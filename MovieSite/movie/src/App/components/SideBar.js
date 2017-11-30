import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  grid-row: 2 / 4;
  grid-column: 1 / 2;
  color: white;
`;

const Paragraph = styled.p`
  cursor: pointer;
`;

const Clear = styled.h2`
  cursor: pointer;
`;

class SideBar extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  findDirectors(movies) {
    if (!movies.length) {
      return {};
    }
    return movies.reduce((acc, curr) => {
      acc[curr.director] ? acc[curr.director]++ : (acc[curr.director] = 1);
      return acc;
    }, {});
  }
  findActors(movies) {
    if (!movies.length) {
      return {};
    }

    return movies.reduce(
      (accumulator, currentValue) => ({ ...this.findHowMany(currentValue.cast), ...accumulator }),
      {}
    );
  }

  findHowMany(movies) {
    return movies.reduce((accumulator, currentValue) => {
      accumulator[currentValue.cast] ? accumulator[currentValue]++ : (accumulator[currentValue] = 1);
      return accumulator;
    }, {});
  }

  render() {
    let { movies, handleOnClick, handelClear } = this.props;
    let directors = this.findDirectors(movies);
    let actors = this.findActors(movies);
    let text = { directors: 'Directors', actors: 'Actors', clearText: 'Clear Search' };
    return (
      <Wrapper>
        <h2>{text.directors}</h2>
        {Object.keys(directors).map(director => (
          <Paragraph key={director} onClick={() => handleOnClick(director, 'director')}>
            {director} ({directors[director]})
          </Paragraph>
        ))}
        <h2>{text.actors}</h2>
        {Object.keys(actors).map(actor => (
          <Paragraph key={actor} onClick={() => handleOnClick(actor, 'cast')}>
            {actor} ({actors[actor]})
          </Paragraph>
        ))}
        <Clear onClick={() => handelClear()}>{text.clearText}</Clear>
      </Wrapper>
    );
  }
}

SideBar.propTypes = {};

export default SideBar;
