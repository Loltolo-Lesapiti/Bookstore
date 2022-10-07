import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookContainer = ({ bookList }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {bookList.map((book) => (
        <div key={book.item_id}>
          <div className="Lesson-Panel">
            <div className="bookContainer">
              <div className="BookDetails">
                <span className="School-of">{book.category}</span>
                <span className="Tittle">{book.title}</span>
                <span className="author">{book.author}</span>
              </div>
              <div className="bookBtns">
                <button type="button">Comments</button>
                <div className="Line-2" />
                <button
                  type="button"
                  id={book.item_id}
                  onClick={(event) => dispatch(removeBook(event.target.id))}
                >
                  Remove
                </button>
                <div className="Line-2" />
                <button type="button">Edit</button>
              </div>
            </div>
            <div className="progress">
              <div className="Oval-2">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle"
                    strokeDasharray="60, 100"
                    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <div className="flex-col">
                <span className="-Percent-Complete">64%</span>
                <span className="Completed Text-Style-2">Completed</span>
              </div>
            </div>
            <div className="Line-2" />
            <div className="flex-col">
              <span className="Current-Chapter">Current Chapter</span>
              <span className="Current-Lesson Text-Style-4">Chapter 17</span>
              <span className="Update-progress">Update progress</span>
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
    }),
  ).isRequired,
};

export default BookContainer;
