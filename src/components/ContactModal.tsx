import React, { useState } from 'react'
import { X } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useFonts } from '../hooks/useFonts'

type FormData = {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showConfirmation, setShowConfirmation] = useState(false)

  const h2Font = useFonts('contactModal', 'h2');
  const h3Font = useFonts('contactModal', 'h3');
  const pFont = useFonts('contactModal', 'p');
  const labelFont = useFonts('contactModal', 'label');
  const buttonFont = useFonts('contactModal', 'button');
  const formFieldFont = useFonts('contactModal', 'formField');
  const highlightedFont = useFonts('contactModal', 'highlighted');
  
  const services = [
    'Fractional Leadership',
    'Product Design & Prototyping',
    'Product Excellence',
    'Digital Transformation',
    'Product Strategy',
    'Professional Mentoring',
  ]

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const serviceId = 'service_8w30v57'
      const templateId = 'template_s80kikt'
      const publicKey = 'fTCi5jUONAznK7UTI'

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        publicKey
      )

      setSubmitStatus('success')
      setShowConfirmation(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      })
      
      // Auto-close modal after 3 seconds
      setTimeout(() => {
        onClose()
        setShowConfirmation(false)
      }, 3000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 contact-modal" data-component="contactModal">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black contact-modal" style={h2Font.getFontStyle()}>
              <span className="handdrawn-highlight" style={highlightedFont.getFontStyle()}>Get in Touch</span>
            </h2>
            <p className="text-gray-600 mt-2 contact-modal" style={pFont.getFontStyle()}>
              Thanks for your interest in Clearmont. Fill out the form and I'll get back to you as soon as possible.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form or Confirmation */}
        <div className="p-6">
          {showConfirmation ? (
            <div className="text-center py-8">
              <div className="mb-4 p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 contact-modal" style={h3Font.getFontStyle()}>Thank you!</h3>
                <p className="contact-modal" style={pFont.getFontStyle()}>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
              </div>
              <p className="text-gray-600 contact-modal" style={pFont.getFontStyle()}>This window will close automatically...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Phone Row */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-gray-700 mb-2 contact-modal" style={labelFont.getFontStyle()}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black`}
                    placeholder="Your full name"
                    style={formFieldFont.getFontStyle()}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 contact-modal" style={pFont.getFontStyle()}>{errors.name}</p>
                  )}
                </div>

                <div className="flex-1">
                  <label htmlFor="phone" className="block text-gray-700 mb-2 contact-modal" style={labelFont.getFontStyle()}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black`}
                    placeholder="Your phone number"
                    style={formFieldFont.getFontStyle()}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 contact-modal" style={pFont.getFontStyle()}>
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email and Service Row */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-gray-700 mb-2 contact-modal" style={labelFont.getFontStyle()}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black`}
                    placeholder="Your email address"
                    style={formFieldFont.getFontStyle()}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 contact-modal" style={pFont.getFontStyle()}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <label htmlFor="service" className="block text-gray-700 mb-2 contact-modal" style={labelFont.getFontStyle()}>
                    Service You're Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white text-black`}
                    style={formFieldFont.getFontStyle()}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1 contact-modal" style={pFont.getFontStyle()}>
                      {errors.service}
                    </p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 contact-modal" style={labelFont.getFontStyle()}>
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black`}
                  placeholder="How can I help you?"
                  style={formFieldFont.getFontStyle()}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 contact-modal" style={pFont.getFontStyle()}>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button - Full Width */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-300 hover:bg-yellow-600 text-accent-foreground font-medium py-3 px-8 rounded-lg transition duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={buttonFont.getFontStyle()}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  <p className="contact-modal" style={pFont.getFontStyle()}>Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}