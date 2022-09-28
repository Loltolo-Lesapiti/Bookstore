import uuid from "react-uuid";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook } from "../redux/books/books";

const AddBook = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.value);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <div className="addBook">
      <h1>Add Books</h1>
      <div className="displayBook">
        {bookList.map((book) => (
          <div className="booksList" key={book}>
            <div className="book">
              <h3 className="name">{book.title}</h3>
              <h3 className="author">{book.author}</h3>
            </div>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteBook({ id: book.id }));
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Tittle"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            dispatch(
              addBook({
                id: uuid(),
                title,
                author,
              })
            );
          }}
        >
          {" "}
          Add Book
        </button>
      </form>
    </div>
  );
};
export default AddBook;
