import React, { Component } from 'react';
import './App.css';

const items = [
  {
    name: 'andrey',
    items: [
      { name: 'kiril', items: [{ name: 'andrey', items: [] }, { name: 'moshe', items: [] }] },
      { name: 'moshe', items: [{ name: 'andrey', items: [] }, { name: 'moshe', items: [] }] }
    ]
  },
  {
    name: 'miki',
    items: [
      { name: 'kiril', items: [{ name: 'andrey', items: [] }, { name: 'moshe', items: [] }] },
      { name: 'moshe', items: [{ name: 'andrey', items: [] }, { name: 'moshe', items: [] }] }
    ]
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items,
      depthArray: []
    };
  }

  changeDepth(depthArray, index) {
    depthArray.unshift(index);
    this.setState({ depthArray });
  }

  createLi = (items, depthArray = [], depth = 0) => {
    if (!items.length) return;
    return items.map((item, index) => (
      <li key={item.name} onClick={() => this.changeDepth(depthArray, index)}>
        {item.name}
        {index === this.state.depthArray[depth] ? (
          <ul>{this.createLi(item.items, depthArray, depth + 1)}</ul>
        ) : (
          ''
        )}
      </li>
    ));
  };

  render() {
    return (
      <div>
        <ul>{this.createLi(this.state.items)}</ul>
      </div>
    );
  }
}

export default App;
