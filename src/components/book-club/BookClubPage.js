import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AnimateOnScroll } from '../AnimateOnScroll';
import { BookCard } from './BookCard';
import { useFonts } from '../../hooks/useFonts';
export function BookClubPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedBook, setSelectedBook] = useState(null);
    const h1Font = useFonts('bookClub', 'h1');
    const h2Font = useFonts('bookClub', 'h2');
    const h3Font = useFonts('bookClub', 'h3');
    const pFont = useFonts('bookClub', 'p');
    const buttonFont = useFonts('bookClub', 'button');
    const highlightedFont = useFonts('bookClub', 'highlighted');
    const books = [
        // Strategy
        {
            id: '1',
            title: 'Playing To Win',
            author: 'A.G. Lafley & Roger L. Martin',
            cover: '/books/playing_to_win.jpg',
            description: 'A masterful guide on how strategy really works - making hard choices about where to play and how to win in business.',
            amazonUrl: 'https://amazon.com/Playing-Win-Strategy-Really-Works/dp/142218739X',
            category: 'Strategy'
        },
        {
            id: '2',
            title: 'Business Model Generation',
            author: 'Alexander Osterwalder & Yves Pigneur',
            cover: '/books/business_model_generation.jpg',
            description: 'The definitive handbook for visionaries and game changers who want to challenge outmoded business models and design tomorrow\'s enterprises.',
            amazonUrl: 'https://amazon.com/Business-Model-Generation-Visionaries-Challengers/dp/0470876417',
            category: 'Strategy'
        },
        {
            id: '3',
            title: 'Value Proposition Design',
            author: 'Alexander Osterwalder, Yves Pigneur & Greg Bernarda',
            cover: '/books/value_proposition.jpeg',
            description: 'Essential companion to Business Model Generation - shows you how to design, test, and build value propositions customers actually want.',
            amazonUrl: 'https://amazon.com/Value-Proposition-Design-Customers-Strategyzer/dp/1118968050',
            category: 'Strategy'
        },
        {
            id: '4',
            title: 'The Lean Startup',
            author: 'Eric Ries',
            cover: '/books/the_lean_startup.jpg',
            description: 'Revolutionary approach to building sustainable businesses through validated learning and rapid experimentation.',
            amazonUrl: 'https://amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898',
            category: 'Strategy'
        },
        {
            id: '5',
            title: 'The Hard Thing About Hard Things',
            author: 'Ben Horowitz',
            cover: '/books/the_hard_thing_about.jpg',
            description: 'Brutally honest insights on building and running a startup when there are no easy answers - essential reading for entrepreneurs.',
            amazonUrl: 'https://amazon.com/Hard-Thing-About-Things-Building/dp/0062273205',
            category: 'Strategy'
        },
        // Leadership
        {
            id: '6',
            title: 'Quiet',
            author: 'Susan Cain',
            cover: '/books/quiet.jpg',
            description: 'Groundbreaking exploration of introversion and how to harness the power of quiet people in a world that celebrates extroversion.',
            amazonUrl: 'https://amazon.com/Quiet-Power-Introverts-World-Talking/dp/0307352153',
            category: 'Leadership'
        },
        {
            id: '7',
            title: 'Thinking, Fast and Slow',
            author: 'Daniel Kahneman',
            cover: '/books/thinking_fast.jpg',
            description: 'Nobel Prize winner reveals how our minds make decisions - understanding the two systems that drive the way we think.',
            amazonUrl: 'https://amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555',
            category: 'Leadership'
        },
        {
            id: '8',
            title: 'Blink',
            author: 'Malcolm Gladwell',
            cover: '/books/blink.webp',
            description: 'Fascinating look at the power of thinking without thinking - how snap judgments and first impressions can be remarkably accurate.',
            amazonUrl: 'https://amazon.com/Blink-Power-Thinking-Without/dp/0316010669',
            category: 'Leadership'
        },
        {
            id: '9',
            title: 'Good to Great',
            author: 'Jim Collins',
            cover: '/books/good_to_great.jpg',
            description: 'Timeless study of what transforms good companies into great ones through disciplined people, thought, and action.',
            amazonUrl: 'https://amazon.com/Good-Great-Some-Companies-Others/dp/0066620996',
            category: 'Leadership'
        },
        {
            id: '10',
            title: 'Measure What Matters',
            author: 'John Doerr',
            cover: '/books/measure_what_matters.jpg',
            description: 'How Google, Bono, and the Gates Foundation rock the world with OKRs - the goal-setting system that drives extraordinary results.',
            amazonUrl: 'https://amazon.com/Measure-What-Matters-Google-Foundation/dp/0525536221',
            category: 'Leadership'
        },
        // Product Management
        {
            id: '11',
            title: 'Inspired',
            author: 'Marty Cagan',
            cover: '/books/Inspired.jpg',
            description: 'The bible of product management - how to create tech products customers love from Silicon Valley\'s most respected product leader.',
            amazonUrl: 'https://amazon.com/INSPIRED-Create-Tech-Products-Customers/dp/1119387507',
            category: 'Product Management'
        },
        {
            id: '12',
            title: 'Transformed',
            author: 'Marty Cagan',
            cover: '/books/transformed.jpg',
            description: 'The follow-up to Inspired - how to move your company to the product operating model and build truly innovative products.',
            amazonUrl: 'https://amazon.com/Transformed-Moving-Product-Operating-Model/dp/1119697336',
            category: 'Product Management'
        },
        {
            id: '13',
            title: 'Empowered',
            author: 'Marty Cagan & Chris Jones',
            cover: '/books/empowered.jpg',
            description: 'How ordinary people, extraordinary products are made - the essential guide to coaching and developing strong product teams.',
            amazonUrl: 'https://amazon.com/EMPOWERED-Ordinary-People-Extraordinary-Products/dp/111969129X',
            category: 'Product Management'
        },
        {
            id: '14',
            title: 'Algorithms to Live By',
            author: 'Brian Christian & Tom Griffiths',
            cover: '/books/algorithms_to_live_by.jpg',
            description: 'Brilliant fusion of computer science and human decision-making - practical lessons from algorithms for everyday life.',
            amazonUrl: 'https://amazon.com/Algorithms-Live-Computer-Science-Decisions/dp/1250118360',
            category: 'Product Management'
        },
        {
            id: '15',
            title: 'How Not to Be Wrong',
            author: 'Jordan Ellenberg',
            cover: '/books/how_not_to_wrong.jpg',
            description: 'The power of mathematical thinking - how math illuminates hidden structures in everyday life and helps us make better decisions.',
            amazonUrl: 'https://amazon.com/How-Not-Be-Wrong-Mathematical/dp/0143127535',
            category: 'Product Management'
        }
    ];
    const categories = ['All', 'Strategy', 'Leadership', 'Product Management'];
    const filteredBooks = selectedCategory === 'All'
        ? books
        : books.filter(book => book.category === selectedCategory);
    return (_jsx("div", { className: "w-full book-club-page", "data-component": "bookClub", children: _jsx("section", { className: "w-full bg-white py-20 px-4", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs(AnimateOnScroll, { children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6 text-center book-club", style: h1Font.getFontStyle(), children: _jsx("span", { className: "handdrawn-highlight", style: highlightedFont.getFontStyle(), children: "Book Club" }) }), _jsx("p", { className: "text-gray-600 text-xl max-w-3xl mx-auto text-center mb-12 book-club", style: pFont.getFontStyle(), children: "My curated collection of books that have shaped my thinking on strategy, leadership, and building successful businesses." })] }), _jsx("div", { className: "flex justify-center mb-12", children: _jsx("div", { className: "flex space-x-4", children: categories.map(category => (_jsx("button", { onClick: () => setSelectedCategory(category), className: `px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                    ? 'bg-yellow-500 text-black'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`, style: buttonFont.getFontStyle(), children: category }, category))) }) }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8", children: filteredBooks.map((book) => (_jsx(BookCard, { book: book, onClick: () => setSelectedBook(book) }, book.id))) }), selectedBook && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50", children: _jsx("div", { className: "bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in", children: _jsx("div", { className: "p-8", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-8", children: [_jsxs("div", { className: "flex-shrink-0", children: [_jsx("img", { src: selectedBook.cover, alt: selectedBook.title, className: "w-48 h-72 object-cover rounded-lg shadow-lg mx-auto", onError: (e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        const fallback = e.currentTarget.nextElementSibling;
                                                        if (fallback) {
                                                            fallback.style.display = 'flex';
                                                        }
                                                    } }), _jsx("div", { className: "w-48 h-72 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg mx-auto hidden items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-6xl mb-3", children: "\uD83D\uDCDA" }), _jsx("div", { className: "text-gray-600 text-sm font-medium book-club", style: h3Font.getFontStyle(), children: selectedBook.title })] }) })] }), _jsxs("div", { className: "flex-1", children: [_jsx("h2", { className: "text-3xl font-bold mb-2 book-club", style: h2Font.getFontStyle(), children: selectedBook.title }), _jsxs("p", { className: "text-xl text-gray-600 mb-4 book-club", style: pFont.getFontStyle(), children: ["by ", selectedBook.author] }), _jsx("div", { className: "inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-6", children: selectedBook.category }), _jsx("p", { className: "text-gray-700 mb-8 leading-relaxed book-club", style: pFont.getFontStyle(), children: selectedBook.description }), _jsxs("div", { className: "flex gap-4", children: [_jsx("a", { href: selectedBook.amazonUrl, target: "_blank", rel: "noopener noreferrer", className: "bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-6 rounded-lg transition-colors", style: buttonFont.getFontStyle(), children: "View on Amazon" }), _jsx("button", { onClick: () => setSelectedBook(null), className: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors", style: buttonFont.getFontStyle(), children: "Close" })] })] })] }) }) }) }))] }) }) }));
}
