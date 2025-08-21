import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from './blogData';
interface BlogCardProps {
  post: BlogPost;
}
export function BlogCard({
  post
}: BlogCardProps) {
  return <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 h-[500px] flex flex-col">
      <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="h-56 overflow-hidden flex-shrink-0">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="text-sm text-gray-500">By {post.author}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800 overflow-hidden">{post.title}</h3>
          <p className="text-gray-600 mb-4 flex-grow overflow-hidden">{post.excerpt}</p>
          <div className="text-yellow-500 font-medium mt-auto">Read more →</div>
        </div>
      </Link>
    </div>;
}