import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
// Initiale state.
const initialState = [];

const api =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fROBmRjs3crbK54VNd2y/books";

export const fetchBooks = createAsyncThunk(
  "book/fetchBooks",
  async () => (await axios.get(api)).data
);

export const postBook = createAsyncThunk(
  "book/postBook",
  async (book) =>
    (
      await axios.post(api, {
        item_id: uuidv4(),
        title: book.title,
        author: book.author,
        category: book.category,
      })
    ).data
);
export const removeBook = createAsyncThunk(
  "book/removeBook",
  async (bookId) => {
    try {
      const revBook = await axios.delete(`${api}/${bookId}`);
      return revBook.data;
    } catch (error) {
      return error?.response;
    }
  }
);

// Creating book slice
const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      const books = Object.keys(action.payload).map((item) => ({
        item_id: item,
        ...action.payload[item][0],
      }));
      return books;
    },
    [fetchBooks.rejected]: (state, action) => action.error.message,
    [postBook.fulfilled]: (state, action) => [...state, action.payload],
    [postBook.rejected]: (state, action) => action.error.message,
    /* eslint-disable */
    [removeBook.fulfilled]: (state, action) =>
      state.filter((item) => item.item_id !== action.meta.arg),
    [removeBook.rejected]: (state, action) => action.error.message,
  },
});
export default bookSlice.reducer;
