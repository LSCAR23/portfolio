import React from 'react';
import Modal from 'react-modal';
import './AboutModal.css'
const AboutModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className='ReactModal__Content'>
      <h2 className='titleAbout'>About me</h2>
      <p className='paragraphAbout'>{children}</p>
      <button  className='closingButton' onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default AboutModal;
