import React from 'react';
import { Wrapper, Button, Title } from '../styled/DeleteBook.styled';

const DeleteBook = ({ toggleDeletePopup, onDelete, id }) => {
  return (
    <Wrapper>
      <Title>Are you Sure?</Title>
      <Button
        onClick={() => {
          onDelete(id);
          toggleDeletePopup();
        }}
      >
        Delete Book
      </Button>
      <Button onClick={toggleDeletePopup}>Cancel</Button>
    </Wrapper>
  );
};

export default DeleteBook;
