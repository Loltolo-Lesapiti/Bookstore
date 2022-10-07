import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/books/books";
import AddBook from "./AddBook";
import BookContainer from "./BooksContainer";

const Books = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [booksList.length, dispatch]);

  return (
    <div className="main_container">
      <div className="Lesson-Panel">
        <div className="BooksDisplay">
          {booksList.length > 0 ? (
            <BookContainer bookList={booksList} />
          ) : (
            <h3 className="bookContainer">The store is empty</h3>
          )}
        </div>
        <div className="progress">
          <div className="Oval-2"></div>
          <div className="flex-col">
            <span className="-Percent-Complete">64%</span>
            <span className="Completed Text-Style-2">Completed</span>
          </div>
        </div>
        <div className="Line-2"></div>
        <div className="flex-col">
          <span className="Current-Chapter">Current Chapter</span>
          <span className="Current-Lesson Text-Style-4">Chapter 17</span>
          <span className="Update-progress">Update progress</span>
        </div>
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
