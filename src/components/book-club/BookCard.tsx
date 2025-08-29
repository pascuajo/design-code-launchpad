import { useState } from 'react';
import { useFonts } from '../../hooks/useFonts';

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
  const [imageError, setImageError] = useState(false);
  const h3Font = useFonts('bookClub', 'h3');
  const pFont = useFonts('bookClub', 'p');

  const handleImageError = () => {
    setImageError(true);
  };

  const coverSrc = book.cover;

  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl book-card" 
      data-component="bookClub"
    >
      <div className="relative">
        {imageError ? (
          <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-md flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-gray-600 text-sm font-medium book-club" style={h3Font.getFontStyle()}>{book.title}</div>
            </div>
          </div>
        ) : (
          <img 
            src={coverSrc}
            alt={book.title}
            className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
            onError={handleImageError}
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
          <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Read More
          </span>
        </div>
      </div>
      <div className="mt-3 text-center">
        <h3 className="font-medium text-sm line-clamp-2 book-club" style={h3Font.getFontStyle()}>{book.title}</h3>
        <p className="text-xs text-gray-600 mt-1 book-club" style={pFont.getFontStyle()}>{book.author}</p>
      </div>
    </div>
  );
}