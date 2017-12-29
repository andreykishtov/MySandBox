import React, { Component } from 'react';
import styled from 'styled-components';
import Book from './Books';

const api = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';

const Wrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  width: 1300px;
  display: grid;
  grid-template-columns: 0fr 0fr 0fr 0fr;
  grid-gap: 10px;
  background: #1d1e20;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentWillMount = async () => {
    const response = await fetch(api);
    const json = await response.json();
    this.setState({ items: json.items });
  };

  handleOnChange = formObj => {
    const items = this.state.items.map(
      item =>
        formObj.id === item.id
          ? {
              ...item,
              volumeInfo: {
                ...item.volumeInfo,
                title: formObj.title,
                publishedDate: formObj.publishedDate,
                authors: [formObj.author]
              }
            }
          : item
    );
    this.setState({ items });
  };

  handleOnDelete = id => {
    const items = this.state.items.filter(item => id !== item.id);
    this.setState({ items });
  };

  render() {
    const { items } = this.state;
    return (
      items.length && (
        <Wrapper>
          {items.map(book => (
            <Book
              onDelete={this.handleOnDelete}
              onChangeBook={this.handleOnChange}
              key={book.id}
              book={book}
            />
          ))}
        </Wrapper>
      )
    );
  }
}

export default App;
