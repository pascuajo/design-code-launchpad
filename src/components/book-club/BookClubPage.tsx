import React, { useState } from 'react';
import { AnimateOnScroll } from '../AnimateOnScroll';
import { BookCard } from './BookCard';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  amazonUrl: string;
  category: string;
}

const books: Book[] = [
  {
    id: '1',
    title: 'Good to Great',
    author: 'Jim Collins',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546097703i/76865.jpg',
    description: 'A masterpiece on transforming good companies into great ones through disciplined people, thought, and action.',
    amazonUrl: 'https://amazon.com/Good-Great-Some-Companies-Others/dp/0066620996',
    category: 'Strategy'
  },
  {
    id: '2',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1421842784i/36072.jpg',
    description: 'Timeless principles for personal and professional effectiveness that have shaped countless leaders.',
    amazonUrl: 'https://amazon.com/Habits-Highly-Effective-People-Powerful/dp/1982137274',
    category: 'Leadership'
  },
  {
    id: '3',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333576876i/10127019.jpg',
    description: 'Revolutionary approach to building sustainable businesses through validated learning and experimentation.',
    amazonUrl: 'https://amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898',
    category: 'Strategy'
  },
  {
    id: '4',
    title: 'Dare to Lead',
    author: 'Brené Brown',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1536251273i/40109367.jpg',
    description: 'Courage-building practices that transform teams and organizations through vulnerable, value-based leadership.',
    amazonUrl: 'https://amazon.com/Dare-Lead-Brave-Conversations-Hearts/dp/0399592520',
    category: 'Leadership'
  },
  {
    id: '5',
    title: 'Zero to One',
    author: 'Peter Thiel',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1414347376i/18050143.jpg',
    description: 'Contrarian insights on building companies that create new things and escape competition.',
    amazonUrl: 'https://amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296',
    category: 'Strategy'
  }
];

const categories = ['All', 'Strategy', 'Leadership'];

export function BookClubPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const filteredBooks = selectedCategory === 'All' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  return (
    <div className="w-full">
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Book <span className="bg-yellow-300 px-1">Club</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto text-center mb-12">
              My curated collection of books that have shaped my thinking on strategy, 
              leadership, and building successful businesses.
            </p>
          </AnimateOnScroll>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Bookshelf */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onClick={() => setSelectedBook(book)}
              />
            ))}
          </div>

          {/* Book Detail Modal */}
          {selectedBook && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <img 
                        src={selectedBook.cover} 
                        alt={selectedBook.title}
                        className="w-48 h-72 object-cover rounded-lg shadow-lg mx-auto"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-2">{selectedBook.title}</h2>
                      <p className="text-xl text-gray-600 mb-4">by {selectedBook.author}</p>
                      <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                        {selectedBook.category}
                      </div>
                      <p className="text-gray-700 mb-8 leading-relaxed">
                        {selectedBook.description}
                      </p>
                      <div className="flex gap-4">
                        <a 
                          href={selectedBook.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-6 rounded-lg transition-colors"
                        >
                          View on Amazon
                        </a>
                        <button 
                          onClick={() => setSelectedBook(null)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}