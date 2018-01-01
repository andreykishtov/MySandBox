import React, { Component } from 'react';
import { Form, Header, InputBox, InputLabel, Save, Cancel } from './EditForm.styled.js';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', author: '', publishedDate: '' };
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  checkForString = data => typeof data !== 'string';

  checkData = (title, author, publishedDate) => {
    if (this.checkForString(title)) {
      alert('title Must Be a string');
      return false;
    }

    if (this.checkForString(author)) {
      alert('author Must Be a string');
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    let { title, author, publishedDate } = this.state;
    if (!this.checkData(title, author, publishedDate)) {
      return;
    }
    this.props.onChangeBook({ id: this.props.book.id, title, author, publishedDate });
    this.props.toggleModal();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header>Edit Book</Header>
        <InputLabel grid-area="Title">
          Title:
          <InputBox
            placeholder="please enter Title"
            name="title"
            type="text"
            title={this.state.title}
            onChange={this.handleChange}
            required
          />
        </InputLabel>
        <InputLabel grid-area="Author">
          Author:
          <InputBox
            placeholder="please enter Author"
            name="author"
            type="text"
            title={this.state.author}
            onChange={this.handleChange}
            required
          />
        </InputLabel>
        <InputLabel grid-area="publishedDate">
          Date:
          <InputBox
            placeholder="please enter Date"
            name="publishedDate"
            type="text"
            title={this.state.publishedDate}
            onChange={this.handleChange}
            required
          />
        </InputLabel>
        <Save type="submit" title="Save" />
        <Cancel onClick={this.props.toggleModal}>Cancel</Cancel>
      </Form>
    );
  }
}

export default EditForm;
