import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import EditForm from './EditForm';

const Wrapper = styled.div`
  grid-area: Edit;
  align-self: center;
`;

const EditButton = styled.button`
  background: #1d1e20;
  color: white;
  border: 1px solid #2c2d2f;
  padding: 10px 20px;
`;

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = { modalState: false };
  }

  toggleModal = () => this.setState({ modalState: !this.state.modalState });

  render() {
    const { book, children } = this.props;
    return (
      <Wrapper>
        <EditButton onClick={() => this.toggleModal()}>{children}</EditButton>
        <Modal isOpen={this.state.modalState}>
          <EditForm toggleModal={this.toggleModal} book={book} />
        </Modal>
      </Wrapper>
    );
  }
}

export default Edit;
