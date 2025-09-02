import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "Clearmont - Strategic Product Consulting & Digital Transformation",
  description = "Strategic product consulting for purpose-driven organizations. 15+ years of experience in FinTech, PropTech, RegTech, and enterprise SaaS. Building what truly matters, faster.",
  keywords = "product consulting, digital transformation, strategic leadership, FinTech, PropTech, RegTech, enterprise SaaS, product management, innovation, business strategy",
  image = "https://clearmontconsulting.com/Profile.png",
  url = "https://clearmontconsulting.com",
  type = "website"
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', url);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
}
