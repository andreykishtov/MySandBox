import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import todos from './todos';
import App from './App';
//import { addTodo, deleteTodo, editTodo, toggleTodo } from './actions';

const store = createStore(reducer, todos);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(addTodo('check stuff'));
// store.dispatch(toggleTodo(5));
// store.dispatch(editTodo(5, 'delete stuff'));
// store.dispatch(deleteTodo(5));

// class Provider extends React.Component {
//   getChildContext() {
//     return {
//       store: this.props.store
//     };
//   }
//   render() {
//     return this.props.children;
//   }
// }

// Provider.childContextTypes = {
//   store: PropTypes.object
// };

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
