import { createSlice } from '@reduxjs/toolkit';
import { books } from './data';

export const booksSlice = createSlice({
  name: 'books',
  initialState: { value: books },
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },

    deleteBook: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
