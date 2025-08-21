import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './blogData';
import { AnimateOnScroll } from '../AnimateOnScroll';
export function BlogPostPage() {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const post = blogPosts.find(post => post.slug === slug);
  if (!post) {
    return <div className="w-full bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or may have been
            moved.
          </p>
          <Link to="/blog" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-8 rounded-full transition duration-300">
            Return to Blog
          </Link>
        </div>
      </div>;
  }
  return <div className="w-full">
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-block mb-8 text-yellow-500 hover:text-yellow-600 transition-colors">
            ← Back to all posts
          </Link>
          <AnimateOnScroll>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center mb-8 text-gray-600">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover" style={{
              maxHeight: '500px'
            }} />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3} className="prose prose-lg max-w-none">
            <div className="text-gray-700">{post.content}</div>
          </AnimateOnScroll>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link to="/blog" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-8 rounded-full transition duration-300 inline-block">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </div>;
}