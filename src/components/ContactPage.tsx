import React, { useState } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  consent: boolean;
  captcha: boolean;
};
export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    consent: false,
    captcha: false
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const services = ['Product Strategy', 'Product Development', 'Digital Transformation', 'Leadership Coaching'];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      checked
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.consent) newErrors.consent = 'You must agree to the terms';
    if (!formData.captcha) newErrors.captcha = "Please verify you're not a robot";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // In a real implementation, you would send the form data to a server here
      // For this example, we'll just simulate a successful submission after a delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: '',
          consent: false,
          captcha: false
        });
      }, 1500);
    }
  };
  return <section className="w-full bg-white py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {isSubmitted ? <div className="text-center py-16">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-yellow-300 px-2">Thank You!</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="text-gray-600 text-xl mb-8">
                Your message has been sent successfully. I'll get back to you as
                soon as possible.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <button onClick={() => setIsSubmitted(false)} className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-8 rounded-full transition duration-300 text-lg">
                Send Another Message
              </button>
            </AnimateOnScroll>
          </div> : <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <AnimateOnScroll direction="right">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="bg-yellow-300 px-2">Get in Touch</span>
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Thanks for your interest in Clearmont Consulting. Fill out
                    the form and I'll get back to you as soon as possible.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Contact us" className="w-full h-auto" />
                </div>
                <div className="mt-8">
                  <h3 className="font-semibold text-xl mb-4">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Email: joseph@clearmontconsulting.co.site
                  </p>
                  <p className="text-gray-600">Phone: (917) 554-5222</p>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="md:w-2/3">
              <AnimateOnScroll direction="left">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Contact Form
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-yellow-500`} placeholder="Your full name" />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-yellow-500`} placeholder="Your phone number (include country code)" />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-yellow-500`} placeholder="Your email address" />
                    {errors.email && <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>}
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-2">
                      Service You're Interested In *
                    </label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white`}>
                      <option value="">Select a service</option>
                      {services.map(service => <option key={service} value={service}>
                          {service}
                        </option>)}
                    </select>
                    {errors.service && <p className="text-red-500 text-sm mt-1">
                        {errors.service}
                      </p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-yellow-500`} placeholder="How can I help you?"></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>}
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleCheckboxChange} className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500" />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="consent" className={`text-sm font-medium ${errors.consent ? 'text-red-500' : 'text-gray-700'}`}>
                        I agree to the processing of my personal information for
                        the purpose of contacting me
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="captcha" name="captcha" type="checkbox" checked={formData.captcha} onChange={handleCheckboxChange} className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500" />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="captcha" className={`text-sm font-medium ${errors.captcha ? 'text-red-500' : 'text-gray-700'}`}>
                        I'm not a robot
                      </label>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button type="submit" disabled={isSubmitting} className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-8 rounded-full transition duration-300 text-lg w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </AnimateOnScroll>
            </div>
          </div>}
      </div>
    </section>;
}