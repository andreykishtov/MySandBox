import React, { Component } from 'react';
import Modal from './Modal';
import EditForm from './EditForm';
import DeleteBook from './DeleteBook';
import { Wrapper, EditButton, DeleteButton } from '../styled/Buttons.styled';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = { DeletePopup: false, editModalState: false };
  }

  toggleEditModal = () => this.setState({ editModalState: !this.state.editModalState });

  toggleDeletePopup = () => this.setState({ DeletePopup: !this.state.DeletePopup });

  render() {
    const { book, onDelete } = this.props;
    return (
      <Wrapper>
        <EditButton onClick={() => this.toggleEditModal()}>Edit</EditButton>
        <DeleteButton onClick={() => this.toggleDeletePopup()}>Delete</DeleteButton>
        <Modal isOpen={this.state.editModalState}>
          <EditForm onChangeBook={this.props.onChangeBook} toggleModal={this.toggleEditModal} book={book} />
        </Modal>
        <Modal isOpen={this.state.DeletePopup}>
          <DeleteBook id={book.id} onDelete={onDelete} toggleDeletePopup={this.toggleDeletePopup} />
        </Modal>
      </Wrapper>
    );
  }
}

export default Edit;
