import { useState } from 'react';
import Book from './components/book';
import Footer from './components/footer';
import Header from './components/header';
import Title from './components/title';
import Form from './components/form';

import './App.css';

import { BookType } from './types';

function App() {
  const [books, setBooks] = useState<BookType[]>([]);

  function updateState(title: string, pages: number) {
    const newBook = {
      title,
      pages,
      isRead: false,
      isFavorite: false,
    };
    setBooks([...books, newBook]);
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Title>Meus Livros</Title>
        <ul className="books-list">
          {books.map((book) => <Book key={ book.title } book={ book } />)}
        </ul>
        <Form
          submitFunction={ updateState }
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
