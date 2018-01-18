import React, { Component } from 'react';
import styled from 'styled-components';

import questions from '../questions';

const Wrapper = styled.div``;

//const question = questions[0];

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { questionNumber: 0, selectedOptions: [] };
  }

  componentWillMount = async () => {
    let response = await fetch('http://localhost:4000/questions');
    let json = await response.json();
    this.setState({ questions });
  };

  calculate() {
    return console.log(this.state.selectedOptions.filter(item => item === true).length);
  }

  render() {
    const questionsArray = questions.map((question, questionIndex) => (
      <Wrapper>
        <h1>{question.question}</h1>
        {question.answers.map((item, index) => (
          <div key={item}>
            <input
              type="radio"
              value={index}
              checked={this.state.selectedOptions[questionIndex] === index}
              onChange={changeEvent =>
                this.setState({
                  selectedOptions: [
                    ...this.state.selectedOptions,
                    (this.state.selectedOptions[questionIndex] = changeEvent.target.value)
                  ]
                })
              }
              name={question.id}
            />
            <p>{item}</p>
          </div>
        ))}
        {question.id === '1' ? (
          <button disabled>Prev</button>
        ) : (
          <button onClick={() => this.setState({ questionNumber: this.state.questionNumber - 1 })}>
            Prev
          </button>
        )}
        {questions.length === question.id ? (
          <button onClick={() => this.calculate()}>Done</button>
        ) : (
          <button onClick={() => this.setState({ questionNumber: this.state.questionNumber + 1 })}>
            Next
          </button>
        )}
      </Wrapper>
    ));

    return questionsArray[this.state.questionNumber];
  }
}

export default App;
