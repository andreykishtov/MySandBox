import axios from 'axios';
import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from '../constants/user';

export const getBooks = () => ({ type: GET_BOOKS });
export const getBooksSuccess = () => ({ type: GET_BOOKS_SUCCESS });
export const getBooksFailure = error => ({
  type: GET_BOOKS_FAILURE,
  payload: { error }
});

export const booksRequest = (url = '/api/v1/users') => async dispatch => {
  dispatch(getBooks());

  try {
    const books = await axios.get(url);
    dispatch(getBooksSuccess());
  } catch ({ response: { status } }) {
    dispatch(getBooksFailure(status));
  }
};
