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
  // Strategy
  {
    id: '1',
    title: 'Playing To Win',
    author: 'A.G. Lafley & Roger L. Martin',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925471i/15803424.jpg',
    description: 'A masterful guide on how strategy really works - making hard choices about where to play and how to win in business.',
    amazonUrl: 'https://amazon.com/Playing-Win-Strategy-Really-Works/dp/142218739X',
    category: 'Strategy'
  },
  {
    id: '2',
    title: 'Business Model Generation',
    author: 'Alexander Osterwalder & Yves Pigneur',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1349048756i/9364501.jpg',
    description: 'The definitive handbook for visionaries and game changers who want to challenge outmoded business models and design tomorrow\'s enterprises.',
    amazonUrl: 'https://amazon.com/Business-Model-Generation-Visionaries-Challengers/dp/0470876417',
    category: 'Strategy'
  },
  {
    id: '3',
    title: 'Value Proposition Design',
    author: 'Alexander Osterwalder, Yves Pigneur & Greg Bernarda',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1432484976i/22505488.jpg',
    description: 'Essential companion to Business Model Generation - shows you how to design, test, and build value propositions customers actually want.',
    amazonUrl: 'https://amazon.com/Value-Proposition-Design-Customers-Strategyzer/dp/1118968050',
    category: 'Strategy'
  },
  {
    id: '4',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333576876i/10127019.jpg',
    description: 'Revolutionary approach to building sustainable businesses through validated learning and rapid experimentation.',
    amazonUrl: 'https://amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898',
    category: 'Strategy'
  },
  {
    id: '5',
    title: 'The Hard Thing About Hard Things',
    author: 'Ben Horowitz',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386609333i/18176747.jpg',
    description: 'Brutally honest insights on building and running a startup when there are no easy answers - essential reading for entrepreneurs.',
    amazonUrl: 'https://amazon.com/Hard-Thing-About-Things-Building/dp/0062273205',
    category: 'Strategy'
  },

  // Leadership
  {
    id: '6',
    title: 'Quiet',
    author: 'Susan Cain',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328562861i/8520610.jpg',
    description: 'Groundbreaking exploration of introversion and how to harness the power of quiet people in a world that celebrates extroversion.',
    amazonUrl: 'https://amazon.com/Quiet-Power-Introverts-World-Talking/dp/0307352153',
    category: 'Leadership'
  },
  {
    id: '7',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg',
    description: 'Nobel Prize winner reveals how our minds make decisions - understanding the two systems that drive the way we think.',
    amazonUrl: 'https://amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555',
    category: 'Leadership'
  },
  {
    id: '8',
    title: 'Blink',
    author: 'Malcolm Gladwell',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1427207976i/40102.jpg',
    description: 'Fascinating look at the power of thinking without thinking - how snap judgments and first impressions can be remarkably accurate.',
    amazonUrl: 'https://amazon.com/Blink-Power-Thinking-Without/dp/0316010669',
    category: 'Leadership'
  },
  {
    id: '9',
    title: 'Good to Great',
    author: 'Jim Collins',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546097703i/76865.jpg',
    description: 'Timeless study of what transforms good companies into great ones through disciplined people, thought, and action.',
    amazonUrl: 'https://amazon.com/Good-Great-Some-Companies-Others/dp/0066620996',
    category: 'Leadership'
  },
  {
    id: '10',
    title: 'Measure What Matters',
    author: 'John Doerr',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1518706047i/39286958.jpg',
    description: 'How Google, Bono, and the Gates Foundation rock the world with OKRs - the goal-setting system that drives extraordinary results.',
    amazonUrl: 'https://amazon.com/Measure-What-Matters-Google-Foundation/dp/0525536221',
    category: 'Leadership'
  },

  // Product Management
  {
    id: '11',
    title: 'Inspired',
    author: 'Marty Cagan',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516996215i/35249663.jpg',
    description: 'The bible of product management - how to create tech products customers love from Silicon Valley\'s most respected product leader.',
    amazonUrl: 'https://amazon.com/INSPIRED-Create-Tech-Products-Customers/dp/1119387507',
    category: 'Product Management'
  },
  {
    id: '12',
    title: 'Transformed',
    author: 'Marty Cagan',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1676306818i/123395025.jpg',
    description: 'The follow-up to Inspired - how to move your company to the product operating model and build truly innovative products.',
    amazonUrl: 'https://amazon.com/Transformed-Moving-Product-Operating-Model/dp/1119697336',
    category: 'Product Management'
  },
  {
    id: '13',
    title: 'Empowered',
    author: 'Marty Cagan & Chris Jones',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617781302i/53481975.jpg',
    description: 'How ordinary people, extraordinary products are made - the essential guide to coaching and developing strong product teams.',
    amazonUrl: 'https://amazon.com/EMPOWERED-Ordinary-People-Extraordinary-Products/dp/111969129X',
    category: 'Product Management'
  },
  {
    id: '14',
    title: 'Algorithms to Live By',
    author: 'Brian Christian & Tom Griffiths',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1454296875i/25666050.jpg',
    description: 'Brilliant fusion of computer science and human decision-making - practical lessons from algorithms for everyday life.',
    amazonUrl: 'https://amazon.com/Algorithms-Live-Computer-Science-Decisions/dp/1250118360',
    category: 'Product Management'
  },
  {
    id: '15',
    title: 'How Not to Be Wrong',
    author: 'Jordan Ellenberg',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1394033815i/18693884.jpg',
    description: 'The power of mathematical thinking - how math illuminates hidden structures in everyday life and helps us make better decisions.',
    amazonUrl: 'https://amazon.com/How-Not-Be-Wrong-Mathematical/dp/0143127535',
    category: 'Product Management'
  }
];

const categories = ['All', 'Strategy', 'Leadership', 'Product Management'];

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