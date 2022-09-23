import React from "react";
const AddBook = () => {
  return (
    <div className="addBook">
      <h1>Add Books</h1>
      <form>
        <input type="text" name="name" placeholder="Tittle" />
        <input type="text" placeholder="Author"></input>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default AddBook;
