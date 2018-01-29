import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          name: 'andrey',
          items: [
            { name: 'andrey', items: [{ name: 'andrey', items: [] }, { name: 'moshe', items: [] }] },
            { name: 'moshe', items: [] }
          ]
        },
        { name: 'moshe', items: [] }
      ],
      data: '',
      postData: ''
    };
  }

  componentWillMount = async () => {
    const response = await fetch('http://localhost:4000');
    const json = await response.json();
    this.setState({ data: json });
  };

  createLi = items => {
    if (!items.length) return;
    items.map(item => (
      <li onClick={}>
        {item.name} <ul>{this.createLi(item.items)}</ul>
      </li>
    ));
  };

  post = async (url = 'http://localhost:4000') => {
    var data = { username: 'example' };

    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    const json = await res.json();
    this.setState({ postData: json });
  };

  render() {
    this.post();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test React App</h1>
        </header>
        <p className="App-intro">get: {this.state.data}</p>
        <p className="App-intro">post: {this.state.postData}</p>
        <ul>{this.createLi(this.state.items)}</ul>
      </div>
    );
  }
}

export default App;
