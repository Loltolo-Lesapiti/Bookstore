import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  return (
    <div className="add_Form_Container">
      <span className="addForm">ADD NEW BOOK</span>
      <form className="form">
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
        <select
          required
          id="categoryList"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option>Category</option>
          <option>Drama</option>
          <option>Romance</option>
          <option>Fiction</option>
        </select>
        <button
          type="button"
          onClick={() => {
            if (title && author && category) {
              dispatch(
                postBook({
                  book_id: uuidv4(),
                  category,
                  title,
                  author,
                }),
              );
              document.querySelector('.form').reset();
            }
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
