import React from "react";
const Book = ({ title, author }) => {
  return (
    <div className="booksList">
      <div className="book">
        <h3 className="name">{title}</h3>
        <h3 className="author">{author}</h3>
      </div>
      <button>Remove</button>
    </div>
  );
};
export default Book;
