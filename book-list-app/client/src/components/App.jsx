import React, { Component } from 'react';
import styled from 'styled-components';

const api = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';

const Wrapper = styled.div`
  width: 100px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: 'loading' };
  }

  componentWillMount = async () => {
    const response = await fetch(api);
    const json = await response.json();
    console.log(json);
    this.setState({ data: json });
  };

  render() {
    return (
      <Wrapper>
        <p>{this.state.data}</p>
      </Wrapper>
    );
  }
}

export default App;
