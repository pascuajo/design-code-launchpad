import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className, 
  style, 
  loading = 'lazy',
  width,
  height 
}: OptimizedImageProps) {
  // Convert .png/.jpg to .webp for modern browsers
  const getWebPSrc = (originalSrc: string) => {
    const ext = originalSrc.split('.').pop()?.toLowerCase();
    if (ext === 'png' || ext === 'jpg' || ext === 'jpeg') {
      return originalSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    }
    return originalSrc;
  };

  const webpSrc = getWebPSrc(src);

  return (
    <picture>
      {/* WebP source for modern browsers */}
      <source srcSet={webpSrc} type="image/webp" />
      
      {/* Fallback for older browsers */}
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading={loading}
        width={width}
        height={height}
      />
    </picture>
  );
}
