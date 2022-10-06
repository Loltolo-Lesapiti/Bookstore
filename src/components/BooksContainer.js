import React from "react";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";

// disabling camelcase for item_id field coming from /books API
/* eslint-disable camelcase */
const BookContainer = ({ bookList }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {bookList.map((book) => {
        return (
          <div key={book.item_id}>
            <div className="bookContainer">
              <div className="BookDetails">
                <h3>{book.category}</h3>
                <h3>{book.title}</h3>
                <h3>{book.author}</h3>
              </div>
              <div className="bookBtns">
                <button type="button">Comments</button>
                <button
                  type="button"
                  id={book.item_id}
                  onClick={(event) => dispatch(removeBook(event.target.id))}
                >
                  Remove
                </button>
                <button type="button">Edit</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// // 'bookList' is missing in props validation --- react/prop-types
// BookContainer.propTypes = {
//   bookList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       author: PropTypes.string,
//       title: PropTypes.string,
//       category: PropTypes.string,
//     })
//   ).isRequired,
// };

export default BookContainer;
