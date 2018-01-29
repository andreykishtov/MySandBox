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
      currentArr: items.filter(item => item.name),
      depth: Array(items.length).fill(0)
    };
  }

  changeDepth(currentIndex) {
    const arr = this.state.items;
    const currentArr = createArray(currentIndex);
    this.setState({ currentArr });
  }

  createLi = items => {
    if (!items.length) return;
    return items.map((item, index) => (
      <li key={item.name} onClick={() => changeDepth(index)}>
        {item.name} {this.items ? <ul>{this.createLi(item.items)}</ul> : ''}
      </li>
    ));
  };

  render() {
    return (
      <div className="App">
        <ul>{this.createLi(this.state.currentArr)}</ul>
      </div>
    );
  }
}

export default App;
