import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } from '../actions/index';

function todoReducer(params) {}

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      const todo = {
        id: action.id,
        title: action.title,
        completed: false
      };

      return [...state, todo];

    case DELETE_TODO:
      const index = state.findIndex(todo => todo.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return Object.assign({}, todo, {
          completed: !todo.completed
        });
      });

    case EDIT_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return Object.assign({}, todo, {
          title: action.title
        });
      });

    default:
      return state;
  }
}
