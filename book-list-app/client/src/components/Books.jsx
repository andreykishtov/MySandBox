import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid grey;
  display: grid;
  grid-gap: 1em;
  grid-template-areas: 'Title Edit' 'PublishDate Author';
`;

const Title = styled.h2`
  grid-area: Title;
`;

const Edit = styled.button`
  grid-area: Edit;
`;

const PublishDate = styled.p`
  grid-area: PublishDate;
`;

const Author = styled.p`
  grid-area: Author;
`;

const Book = ({ book }) => {
  return (
    <Wrapper key={book.id}>
      <Title>{book.volumeInfo.title}</Title>
      <PublishDate>{book.volumeInfo.publishedDate}</PublishDate>
      <Author>{book.volumeInfo.authors}</Author>
      <Edit>Edit</Edit>
    </Wrapper>
  );
};

export default Book;
