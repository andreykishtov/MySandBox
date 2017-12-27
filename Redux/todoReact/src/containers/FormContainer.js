import React from 'react';

import Form from '../components/Form';
import { addTodo } from '../actions';

class componentName extends React.Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(title) {
    this.store.dispatch(addTodo(title));
  }

  render() {
    return <Form onAdd={this.handleAdd} />;
  }
}

componentName.propTypes = {};

export default componentName;
