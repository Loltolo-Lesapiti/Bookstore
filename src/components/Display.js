import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import AddBook from './AddBook';
import BookContainer from './BooksContainer';

const Books = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [booksList.length, dispatch]);

  return (
    <div className="main_container">
      <div>
        <div className="BooksDisplay">
          {booksList.length > 0 ? (
            <BookContainer bookList={booksList} />
          ) : (
            <h3 className="Lesson-Panel">The store is empty</h3>
          )}
        </div>
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
