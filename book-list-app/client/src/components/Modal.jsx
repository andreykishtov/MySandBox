import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #4f5262;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 150;
`;

const BackDrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 100;
  background: rgba(0, 0, 0, 0.3);
`;

const Modal = ({ onClose, children, isOpen }) =>
  isOpen && (
    <div>
      <Wrapper>{children}</Wrapper>
      <BackDrop />
    </div>
  );

export default Modal;
