import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

const initialState = { count: 0 };

let reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.amount };
    case 'DECREMENT':
      return { count: state.count - action.amount };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// const incrementAction = { type: 'INCREMENT', amount: 1 };
// const decrementAction = { type: 'DECREMENT', amount: 1 };
// const resetAction = { type: 'RESET', amount: initialState.count };

let increment = amount => {
  return { type: 'INCREMENT', amount };
};

let decrement = amount => {
  return { type: 'DECREMENT', amount };
};

let reset = () => {
  return { type: 'RESET' };
};

const store = createStore(reducer, initialState);

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  increment() {
    let amount = parseInt(this.refs.amount.value || 1);
    store.dispatch(increment(amount));
  }

  decrement() {
    let amount = parseInt(this.refs.amount.value || 1);
    store.dispatch(decrement(amount));
  }

  reset() {
    store.dispatch(reset());
  }

  render() {
    const count = store.getState().count;
    return (
      <div className="counter">
        <span className="count">{count}</span>

        <div className="buttons">
          <button className="decrement" onClick={this.decrement}>
            -
          </button>
          <button className="reset" onClick={this.reset}>
            delete
          </button>
          <button className="increment" onClick={this.increment}>
            +
          </button>
        </div>
        <input type="text" ref="amount" defaultValue="1" />
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
