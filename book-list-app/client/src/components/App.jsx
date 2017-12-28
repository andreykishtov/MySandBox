import React, { Component } from 'react';
import styled from 'styled-components';

const api = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const Book = styled.div`
  border: 1px solid grey;
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

  render() {
    const { items } = this.state;
    console.log(items);
    return (
      items.length && (
        <Wrapper>
          {items.map(book => (
            <Book key={book.id}>
              <h1>{book.volumeInfo.title}</h1>
              <p>{book.volumeInfo.publishedDate}</p>
              <p>{book.volumeInfo.authors}</p>
            </Book>
          ))}
        </Wrapper>
      )
    );
  }
}

export default App;
