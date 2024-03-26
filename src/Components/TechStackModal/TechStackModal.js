import React from 'react';
import Modal from 'react-modal';
import reactIcon from '../../images/reactImg.png'
import flutterIcon from '../../images/flutterImg.png'
import pythonIcon from '../../images/pythonImg.png'
import firebaseIcon from '../../images/firebaseImg.png'
import csharpIcon from '../../images/csharpImg.png'
import './TechStackModal.css'
const TechStackModal = ({ isOpen, onRequestClose}) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className='ReactModal__Content'>
            <div id='d1' className='divsModalTech'>
                <img className="imgIcon" src={reactIcon} />
                <img className="imgIcon" src={flutterIcon} />
            </div>
            <div id='d2' className='divsModalTech'>
                <img className="imgIcon" src={firebaseIcon} />
                <img className="imgIcon" src={csharpIcon} />
                <img className="imgIcon" src={pythonIcon} />
            </div>
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default TechStackModal;