import Book from './components/book';
import Footer from './components/footer';
import Header from './components/header';
import Title from './components/title';

import './App.css';

import { booksList } from './data';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Title>
          <p>
            <s>Livros emprestados </s>
            Meus livros:
          </p>
        </Title>
        <ul className="books-list">
          {booksList.map((book) => (
            <Book
              key={ book.title }
              book={ book }
            />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
