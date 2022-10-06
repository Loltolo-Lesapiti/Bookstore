import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { postBook } from "../redux/books/books";

const AddBook = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div className="addbook">
      <h2>Add New Book</h2>
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
        <select
          required
          id="categoryList"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option>Select Category</option>
          <option>Drama</option>
          <option>Fiction</option>
          <option>Action</option>
          <option>Economy</option>
          <option>Science Fiction</option>
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
                })
              );
              form.reset();
            }
          }}
        >
          {" "}
          Add Book
        </button>
      </form>
      ;
    </div>
  );
};

export default AddBook;
