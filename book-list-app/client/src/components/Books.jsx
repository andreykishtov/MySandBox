import React from 'react';
import styled from 'styled-components';
import Edit from './Edit';

const Wrapper = styled.div`
  width: 200px;
  display: grid;
  padding-bottom: 10px;
  background: #27282a;
  justify-items: center;
  grid-template-areas: 'Image Image' 'Title Title' ' Author Author' 'PublishDate Edit';
`;

const Title = styled.h2`
  margin-bottom: 5px;
  grid-area: Title;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 180px;
  overflow: hidden;
  color: white;
`;

const PublishDate = styled.p`
  color: #797a7c;
  margin: 0;
  align-self: center;
  grid-area: PublishDate;
`;

const Author = styled.p`
  color: #797a7c;
  margin: 0 0 15px 0;
  grid-area: Author;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 180px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 200px;
  grid-area: Image;
  justify-self: center;
`;

const Book = ({ book }) => (
  <Wrapper key={book.id}>
    <Title>{book.volumeInfo.title}</Title>
    <Image src={book.volumeInfo.imageLinks.thumbnail} alt="harry" />
    <PublishDate>{book.volumeInfo.publishedDate}</PublishDate>
    <Author>{book.volumeInfo.authors}</Author>
    <Edit book={book}>Edit</Edit>
  </Wrapper>
);

export default Book;
