import { useEffect } from 'react';
import { getCurrentHomepageSEO, getServiceSEO, type SEOConfig } from '../config/seo-config';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  serviceKey?: string; // For service-specific SEO
}

export function SEO({
  title,
  description,
  keywords,
  image = "https://www.clearmontconsulting.com/Profile.png",
  url = "https://www.clearmontconsulting.com",
  type = "website",
  serviceKey
}: SEOProps) {
  // Get SEO config based on service or use defaults
  const seoConfig: SEOConfig = serviceKey 
    ? getServiceSEO(serviceKey)
    : getCurrentHomepageSEO();

  // Use provided props or fall back to config
  const finalTitle = title || seoConfig.title;
  const finalDescription = description || seoConfig.description;
  const finalKeywords = keywords || seoConfig.keywords;
  const finalUrl = url || seoConfig.url;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', finalKeywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', finalTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', finalDescription);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', finalUrl);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', finalTitle);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', finalDescription);
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', finalUrl);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', finalUrl);

  }, [finalTitle, finalDescription, finalKeywords, image, finalUrl, type]);

  return null; // This component doesn't render anything
}