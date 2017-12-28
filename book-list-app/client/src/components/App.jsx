import React, { Component } from 'react';
import styled from 'styled-components';
import Book from './Books';

const api = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
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
    return items.length && <Wrapper>{items.map(book => <Book book={book} />)}</Wrapper>;
  }
}

export default App;
