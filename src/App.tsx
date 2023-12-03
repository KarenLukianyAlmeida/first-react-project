import Book from './components/book';
import Footer from './components/footer';
import Header from './components/header';
import Title from './components/title';

import './App.css';

const booksList = [
  {
    title: 'Dom Casmurro',
    pages: 200,
    isRead: true,
    isFavorite: false,
  },
  {
    title: 'Ladrão de Raios',
    pages: 300,
    isRead: true,
    isFavorite: true,
  },
  {
    title: 'Vidas Secas',
    pages: 136,
    isRead: false,
    isFavorite: false,
  },
  {
    title: 'Mar de Monstros',
    pages: 300,
    isRead: true,
    isFavorite: false,
  },
  {
    title: 'O Segredo dos Dinamarqueses',
    pages: 350,
    isRead: false,
    isFavorite: false,
  },
];

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
