import React from 'react';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  amazonUrl: string;
  category: string;
}

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

export function BookCard({ book, onClick }: BookCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative">
        <img 
          src={book.cover} 
          alt={book.title}
          className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
          <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Read More
          </span>
        </div>
      </div>
      <div className="mt-3 text-center">
        <h3 className="font-medium text-sm line-clamp-2">{book.title}</h3>
        <p className="text-xs text-gray-600 mt-1">{book.author}</p>
      </div>
    </div>
  );
}