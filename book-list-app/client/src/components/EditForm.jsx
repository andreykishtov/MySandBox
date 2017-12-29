import React, { Component } from 'react';
import styled from 'styled-components';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', Autour: '', data: '' };
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.title);
    this.props.toggleModal();
  };

  render() {
    {
      this.props.book.volumeInfo.publishedDate;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Edit Book</h3>
        <label>
          Title:
          <input
            type="text"
            title={this.state.title}
            onChange={this.handleChange}
            defaultValue={this.props.book.volumeInfo.title}
          />
        </label>
        <label>
          Autour:
          <input
            type="text"
            title={this.state.Autour}
            onChange={this.handleChange}
            defaultValue={this.props.book.volumeInfo.authors[0]}
          />
        </label>
        <label>
          Date:
          <input
            type="text"
            title={this.state.date}
            onChange={this.handleChange}
            defaultValue={this.props.book.volumeInfo.publishedDate}
          />
        </label>
        <input type="submit" title="Save" />
        <button onClick={this.props.toggleModal}>Cancel</button>
      </form>
    );
  }
}

export default EditForm;
