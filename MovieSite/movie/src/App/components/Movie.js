import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`;

const subTitle = styled.h3`
  text-align: center;
`;

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movie: {} };
  }

  async componentDidMount() {
    let response = await fetch(`http://localhost:9000/movies/${this.props.match.params.id}`);
    let data = await response.json();
    this.setState({ movie: data });
  }

  render() {
    let movie = this.state.movie;
    return (
      <div>
        <subTitle>{movie.title}</subTitle>
        <Image src={movie.imageUrl} alt="Movie Loading" />
      </div>
    );
  }
}

export default Movie;
