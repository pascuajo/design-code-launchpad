import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from './blogData';
interface BlogCardProps {
  post: BlogPost;
}
export function BlogCard({
  post
}: BlogCardProps) {
  return <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/blog/${post.slug}`}>
        <div className="h-56 overflow-hidden">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="text-sm text-gray-500">By {post.author}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="text-yellow-500 font-medium">Read more →</div>
        </div>
      </Link>
    </div>;
}