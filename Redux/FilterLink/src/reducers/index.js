import { combineReducers } from 'redux';

import * as fromTodos from './todo';
import { default as filter } from './filter';

const reducer = combineReducers({
  todos: fromTodos.default,
  filter: filter
});

export default reducer;

export function getFilteredTodos(state) {
  return fromTodos.getFilteredTodos(state.todos, state.filter);
}
