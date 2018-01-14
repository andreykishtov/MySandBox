import React from 'react';
import Buttons from './Buttons';
import { Wrapper, Title, PublishDate, Author, Image } from '../styled/Books.styled';

const Book = ({ book, onDelete }) => (
  <Wrapper key={book.id}>
    <Title>{book.volumeInfo.title}</Title>
    <Image src={book.volumeInfo.imageLinks.thumbnail} alt="harry" />
    <PublishDate>{book.volumeInfo.publishedDate}</PublishDate>
    <Author>{book.volumeInfo.authors}</Author>
    <Buttons book={book} onDelete={onDelete} />
  </Wrapper>
);

export default Book;
