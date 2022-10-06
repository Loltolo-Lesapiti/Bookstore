import { Link, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Display';

function App() {
  return (
    <div>
      <header>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
