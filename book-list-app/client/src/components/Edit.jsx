import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

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
    this.state = { isModalOpen: false };
  }

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    return (
      <Wrapper>
        <EditButton onClick={() => this.openModal()}>{this.props.children}</EditButton>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <h1>Modal title</h1>
          <p>hello</p>
          <p>{this.props.book.volumeInfo.publishedDate}</p>
          <p>
            <button onClick={() => this.closeModal()}>Close</button>
          </p>
        </Modal>
      </Wrapper>
    );
  }
}

export default Edit;
