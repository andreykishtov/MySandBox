import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  background: #27282a;
`;

const Button = styled.button`
  background: #1d1e20;
  color: white;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid lightgrey;
`;

const Title = styled.h3`
  color: white;
`;

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
