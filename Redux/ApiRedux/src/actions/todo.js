export const REQUEST_TODOS = 'REQUEST_TODOS';
export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

let nextId = 5;

export function getTodos() {
  return dispatch => {
    dispatch({
      type: REQUEST_TODOS
    });

    return fetch('http://localhost:5000/api/todos')
      .then(response => response.json())
      .then(todos =>
        dispatch({
          type: GET_TODOS,
          todos
        })
      );
  };
}

export function addTodo(title) {
  return {
    type: ADD_TODO,
    id: nextId++,
    title
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function editTodo(id, title) {
  return {
    type: EDIT_TODO,
    id,
    title
  };
}
