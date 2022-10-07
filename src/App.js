import { Link, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Display';

function App() {
  return (
    <div>
      <header className="panel-bg">
        <div className="navigation">
          <span className="Bookstore-CMS">Bookstore CMS</span>
          <ul>
            <li>
              <Link to="/books" className="BOOKS Text-Style-3">
                Books
              </Link>
            </li>
            <li>
              <Link to="/categories" className="CATEGORIES Text-Style-3">
                Categories
              </Link>
            </li>
          </ul>
        </div>
        <div className="Oval">
          <i className="fas">&#xf406;</i>
        </div>
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
