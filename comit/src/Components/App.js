import React, { Component } from 'react';
import styled from 'styled-components';

import questions from '../questions';

const Wrapper = styled.div``;

//const question = questions[0];

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { questionNumber: 0 };
  }

  render() {
    const questionsArray = questions.map(question => (
      <Wrapper>
        <h1>{question.question}</h1>
        {question.answers.map(item => (
          <div key={item}>
            <input type="radio" name={question.id} />
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
        {questions.length === +question.id ? (
          <button>Done</button>
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
