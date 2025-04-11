import React from 'react';
import Modal from 'react-modal';
import reactIcon from '../../images/reactImg.png'
import flutterIcon from '../../images/flutterImg.png'
import pythonIcon from '../../images/pythonImg.png'
import firebaseIcon from '../../images/firebaseImg.png'
import csharpIcon from '../../images/csharpImg.png'
import javaIcon from '../../images/javaImg.png'
import postgresIcon from '../../images/postgresImg.png'
import mongoIcon from '../../images/mongo.png'
import gitIcon from '../../images/git.png'
import fastApiIcon from '../../images/FastAPI.png'
import nextIcon from '../../images/next.png'
import './TechStackModal.css'

const TechStackModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className='ReactModal__Content'>
            <div className='mainModalTechContainer'>
                <div id='d1' className='divsModalTech'>
                    <img className="imgIcon tech-icon-1" src={reactIcon} alt="React" />
                    <img className="imgIcon tech-icon-2" src={nextIcon} alt="Next.js" />
                    <img className="imgIcon tech-icon-3" src={flutterIcon} alt="Flutter" />
                </div>
                <div id='d2' className='divsModalTech'>
                    <img className="imgIcon tech-icon-4" src={firebaseIcon} alt="Firebase" />
                    <img className="imgIcon tech-icon-5" src={csharpIcon} alt="C#" />
                    <img className="imgIcon tech-icon-6" src={pythonIcon} alt="Python" />
                    <img className="imgIcon tech-icon-7" src={fastApiIcon} alt="FastAPI" />
                </div>
                <div id='d3' className='divsModalTech'>
                    <img className="imgIcon tech-icon-8" src={javaIcon} alt="Java" />
                    <img className="imgIcon tech-icon-9" src={postgresIcon} alt="PostgreSQL" />
                    <img className="imgIcon tech-icon-10" src={mongoIcon} alt="MongoDB" />
                    <img className="imgIcon tech-icon-11" src={gitIcon} alt="Git" />
                </div>
                <button className='closingButton' onClick={onRequestClose}>Close</button>
            </div>
        </Modal>
    );
};

export default TechStackModal;