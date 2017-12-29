import React from 'react';

const DeleteBook = ({ toggleDeletePopup, onDelete, id }) => {
  return (
    <div>
      <h2>Are you Sure?</h2>
      <button
        onClick={() => {
          onDelete(id);
          toggleDeletePopup();
        }}
      >
        Delete Book
      </button>
      <button onClick={toggleDeletePopup}>Cancel</button>
    </div>
  );
};

export default DeleteBook;
