import React from 'react';
import Modal from 'react-modal';
import './AboutModal.css'
const AboutModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className='ReactModal__Content'>
      <h2>About me</h2>
      <p>{children}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default AboutModal;
