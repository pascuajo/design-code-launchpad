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
      <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center mb-8 text-yellow-500 hover:text-yellow-600 transition-colors font-medium">
            ← Back to all posts
          </Link>
          
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                <img src={post.imageUrl} alt={post.title} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                    {post.title}
                  </h1>
                  <div className="flex items-center text-white/90">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <AnimateOnScroll delay={0.2}>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    {post.content}
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </AnimateOnScroll>
          
          <div className="mt-12 text-center">
            <Link to="/blog" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-4 px-10 rounded-full transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </div>;
}