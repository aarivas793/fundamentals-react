import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
  return (
    <div>
      <h1>Best Sellers in Books</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} num={index + 1} />;
        })}
      </section>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
