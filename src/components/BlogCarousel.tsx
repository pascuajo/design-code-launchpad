import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';

interface BlogCarouselProps {
  limit?: number;
}

export const BlogCarousel: React.FC<BlogCarouselProps> = ({ limit = 5 }) => {
  const { posts, loading, error } = useBlogPosts(limit);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (posts.length <= 1) return;
    
    const interval = setInterval(() => {
      if (!isHovered && !isTransitioning) {
        goToNext();
      }
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [posts.length, isHovered, isTransitioning]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  if (loading) {
    return (
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-white">Loading blog posts...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-red-400">Error loading blog posts: {error}</div>
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) return null;

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/blog" className="inline-block">
            <h2 
              className="text-3xl font-bold text-white mb-4 hover:text-yellow-400 transition-colors duration-200"
              style={{fontFamily: 'Source Code Pro, Courier New, Monaco, Consolas, Menlo, monospace'}}
            >
              <span className="handdrawn-highlight">Recent Blog Articles</span>
            </h2>
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Sliding Container */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {posts.map((post) => (
              <div 
                key={post.id}
                className="w-full flex-shrink-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white mx-2 h-[400px] lg:h-[350px]">
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="block h-full"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <div className="flex flex-col lg:flex-row h-full">
                      {/* Content Section (Left) */}
                      <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                        <div className="flex items-center mb-3">
                          {post.category && (
                            <span 
                              className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mr-4"
                              style={{fontFamily: 'Source Code Pro, Courier New, Monaco, Consolas, Menlo, monospace'}}
                            >
                              {post.category}
                            </span>
                          )}
                          <span 
                            className="text-gray-500 text-sm"
                            style={{fontFamily: 'Source Code Pro, Courier New, Monaco, Consolas, Menlo, monospace'}}
                          >
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        
                        <h3 
                          className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2 lg:line-clamp-3"
                          style={{fontFamily: 'Source Code Pro, Courier New, Monaco, Consolas, Menlo, monospace'}}
                        >
                          {post.title}
                        </h3>
                        
                        <p 
                          className="text-gray-600 text-base lg:text-lg leading-relaxed line-clamp-3 lg:line-clamp-4"
                          style={{fontFamily: 'Source Code Pro, Courier New, Monaco, Consolas, Menlo, monospace'}}
                        >
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Image Section (Right) */}
                      <div className="w-full lg:w-1/2 h-1/2 lg:h-full">
                        {post.imageUrl ? (
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <div className="text-center">
                              <div 
                                className="text-4xl lg:text-6xl text-gray-400 mb-2 lg:mb-4"
                                style={{fontFamily: 'Source Code Pro, Courier New, Monaco, Consolas, Menlo, monospace'}}
                              >
                                📝
                              </div>
                              <p 
                                className="text-gray-500 text-sm lg:text-base"
                                style={{fontFamily: 'Source Code Pro, Courier New, Monaco, Consolas, Menlo, monospace'}}
                              >
                                Blog Post
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {posts.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous blog post"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next blog post"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {posts.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {posts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-white' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to blog post ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
