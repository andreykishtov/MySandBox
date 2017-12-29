import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  padding: 10px;
  display: grid;
  background: #27282a;
  justify-items: center;
  grid-template-areas:
    'Header Header Header'
    'Title Author publishedDate'
    'Save . Cancel';
`;

const Header = styled.h2`
  grid-area: Header;
  color: white;
`;

const InputBox = styled.input`
  background: #1d1e20;
  color: white;
  padding: 10px;
  margin: 10px;
  border: 1px solid lightgrey;
`;

const InputLabel = styled.label`
  grid-area: ${props => props.gridArea};
`;

const Save = styled.input`
  grid-area: Save;
  background: #1d1e20;
  color: white;
  border: 1px solid #2c2d2f;
  padding: 10px 20px;
`;

const Cancel = styled.button`
  grid-area: Cancel;
  background: #1d1e20;
  color: white;
  border: 1px solid #2c2d2f;
  padding: 10px 20px;
`;

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', author: '', publishedDate: '' };
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    const { title, author, publishedDate } = this.state;
    event.preventDefault();
    alert('A name was submitted: ' + JSON.stringify(this.state));
    this.props.toggleModal();
  };

  render() {
    {
      this.props.book.volumeInfo.publishedDate;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Header>Edit Book</Header>
        <InputLabel grid-area="Title">
          Title:
          <InputBox
            name="title"
            type="text"
            title={this.state.title}
            onChange={this.handleChange}
            defaultValue={this.props.book.volumeInfo.title}
          />
        </InputLabel>
        <InputLabel grid-area="Author">
          Author:
          <InputBox
            name="author"
            type="text"
            title={this.state.author}
            onChange={this.handleChange}
            defaultValue={this.props.book.volumeInfo.authors[0]}
          />
        </InputLabel>
        <InputLabel grid-area="publishedDate">
          Date:
          <InputBox
            name="publishedDate"
            type="text"
            title={this.state.publishedDate}
            onChange={this.handleChange}
            defaultValue={this.props.book.volumeInfo.publishedDate}
          />
        </InputLabel>
        <Save type="submit" title="Save" />
        <Cancel onClick={this.props.toggleModal}>Cancel</Cancel>
      </Form>
    );
  }
}

export default EditForm;
