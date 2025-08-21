import React, { Children } from 'react';
import { AnimateOnScroll, AnimateChildren } from '../AnimateOnScroll';
import { blogPosts } from './blogData';
import { BlogCard } from './BlogCard';
export function BlogPage() {
  return <div className="w-full">
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Our <span className="bg-yellow-300 px-1">Blog</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto text-center mb-16">
              Insights, strategies, and practical advice to help you build what
              truly matters.
            </p>
          </AnimateOnScroll>
          <AnimateChildren staggerDelay={0.1} distance={40} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => <BlogCard key={post.id} post={post} />)}
          </AnimateChildren>
        </div>
      </section>
    </div>;
}