import { DELETE_BOOK, ADD_BOOK, EDIT_BOOK } from "../constants/actionTypes";

export const addBook = (bookData) => {
  return {
    type: ADD_BOOK,
    payload: bookData,
  };
};

export const editBook = (bookData) => {
  return {
    type: EDIT_BOOK,
    payload: bookData,
  };
};

export const deleteBook = (bookData) => {
  return {
    type: DELETE_BOOK,
    payload: bookData,
  };
};
