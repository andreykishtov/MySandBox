import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import EditForm from './EditForm';
import DeleteBook from './DeleteBook';

const Wrapper = styled.div`
  grid-area: Buttons;
  align-self: center;
`;

const EditButton = styled.button`
  background: #1d1e20;
  color: white;
  border: 1px solid #2c2d2f;
  padding: 10px 20px;
`;

const DeleteButton = styled.button`
  background: #1d1e20;
  color: white;
  border: 1px solid #2c2d2f;
  padding: 10px 20px;
`;

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = { DeletePopup: false, editModalState: false };
  }

  toggleEditModal = () => this.setState({ editModalState: !this.state.editModalState });

  toggleDeletePopup = () => this.setState({ DeletePopup: !this.state.DeletePopup });

  render() {
    const { book } = this.props;
    return (
      <Wrapper>
        <EditButton onClick={() => this.toggleEditModal()}>Edit</EditButton>
        <DeleteButton onClick={() => this.toggleDeletePopup()}>Delete</DeleteButton>
        <Modal isOpen={this.state.editModalState}>
          <EditForm onChangeBook={this.props.onChangeBook} toggleModal={this.toggleEditModal} book={book} />
        </Modal>
        <Modal isOpen={this.state.DeletePopup}>
          <DeleteBook toggleDeletePopup={this.toggleDeletePopup} />
        </Modal>
      </Wrapper>
    );
  }
}

export default Edit;
