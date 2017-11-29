import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h3`
  text-align: center;
`;

const Movie = ({ movie, handleClickOnMovie }) => (
  <div onClick={() => handleClickOnMovie(movie.id)}>
    <Link to={`/${movie.id}`}>
      <Title>{movie.title}</Title>
      <Image src={movie.imageUrl} alt="Movie Loading" />
    </Link>
  </div>
);

export default Movie;
