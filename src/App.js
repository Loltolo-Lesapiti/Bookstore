import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import BooksContainer from './components/BooksContainer';
import Categories from './components/Categories';

function App() {
  return (
    <header>
      <nav>
        <h1 className="app-title">Bookstore CMS</h1>
        <ul className="menu-list">
          <li key="bookPage">
            <Link to="/">Books</Link>
          </li>
          <li key="categoryPage">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<BooksContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </header>
  );
}

export default App;
