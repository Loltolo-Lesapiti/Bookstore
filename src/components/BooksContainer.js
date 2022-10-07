import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";

const BookContainer = ({ bookList }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {bookList.map((book) => (
        <div key={book.item_id}>
          <div className="bookContainer">
            <div className="BookDetails">
              <span className="School-of">{book.category}</span>
              <span className="Tittle">{book.title}</span>
              <span className="author">{book.author}</span>
            </div>
            <div className="bookBtns">
              <button type="button">Comments</button>
              <div className="Line-2"></div>
              <button
                type="button"
                id={book.item_id}
                onClick={(event) => dispatch(removeBook(event.target.id))}
              >
                Remove
              </button>
              <div className="Line-2"></div>
              <button type="button">Edit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
BookContainer.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    })
  ).isRequired,
};

export default BookContainer;
