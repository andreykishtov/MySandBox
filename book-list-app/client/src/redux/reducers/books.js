import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from '../constants/user';

const initialState = {
  books: [],
  getBooksPending: false,
  getBooksError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, getBooksPending: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loginPending: false,
        loginDialogOpen: false
      };
    case LOGOUT:
      return { ...state, loggedIn: false };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload.error,
        loginPending: false
      };
    case TOGGLE_LOGIN_DIALOG:
      return { ...state, loginDialogOpen: !state.loginDialogOpen };
    default:
      return state;
  }
};
