import AddBook from "./AddBook";
import Book from "./Book";
const Home = () => {
  return (
    <div className="Home">
      <h1> List of Books</h1>
      <ul>
        <li>
          <Book name={"Harry Potter"} author={"J. K. Rowling"} />
        </li>
        <li>
          <Book name={"Harry Potter"} author={"J. K. Rowling"} />
        </li>
        <li>
          <Book name={"Harry Potter"} author={"J. K. Rowling"} />
        </li>
      </ul>

      <AddBook />
    </div>
  );
};
export default Home;
