import React from "react";
import peronImage from '../../images/me.jpeg'
import './MainInfoPage.css'
import reactIcon from '../../images/reactImg.png'
import flutterIcon from '../../images/flutterImg.png'
import pythonIcon from '../../images/pythonImg.png'
import firebaseIcon from '../../images/firebaseImg.png'
import AboutModal from "../../Components/AboutModal/AboutModal";
import nextIcon from '../../images/next.png'
import mongoIcon from '../../images/mongo.png'
import ClipboardJS from 'clipboard';
import { useState, useEffect, useRef } from 'react';
import TechStackModal from "../../Components/TechStackModal/TechStackModal";
const MainInfoPage = () => {
    const phone = '+506 83105790';
    const phoneRef = useRef(null);
    const correo = 'laraoscar2310@gmail.com';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalTechOpen, setIsModalTechOpen] = useState(false);
    const aboutInfo = "I'm a seasoned Full Stack Web Developer with over a year of hands-on experience in building and deploying professional web applications. My expertise spans across the entire development lifecycle, from conceptualization to deployment and maintenance. I've successfully delivered multiple client projects, leveraging technologies like React, Next.js, Node.js, and MongoDB to create responsive, user-friendly applications. My background in software engineering combined with practical experience has equipped me with strong problem-solving skills and the ability to adapt to new technologies quickly. I'm proficient in modern frontend frameworks, backend development, database management, and cloud services. I'm passionate about creating clean, efficient code and continuously expanding my technical knowledge to deliver innovative solutions that exceed client expectations.";
    const sentences = aboutInfo.split('. ');
    const previewText = sentences.slice(0, 2).join('. ') + '....';

    const indexStyle={
        'index1':{
            'z-index': '2'
        },
        'index2':{
            'z-index': '0'
        },
    }

    useEffect(() => {
        const clipboard = new ClipboardJS(phoneRef.current, {
            text: () => phone
        });

        clipboard.on('success', function (e) {
            alert('Número copiado al portapapeles');
            e.clearSelection();
        });

        return () => {
            clipboard.destroy();
        };
    }, []);

    return (
        <div className="main-container">
            <div className="firstInfoContent">
                <div className="imageContent">
                    <img className="myImage" src={peronImage} alt="Oscar Lara"></img>
                    <div className="contactInfoContainer">
                        <h3 className="name">I'm Oscar</h3>
                        <a href={`mailto:${correo}`} className="correo">{correo}</a>
                        <div className="phone" ref={phoneRef} >{phone}</div>
                    </div>
                </div>

                <div className="aboutContent">
                    <p className="aboutInfo">{aboutInfo}</p>
                </div>
                <div className="aboutContentM">
                    <p className="aboutInfo">{previewText} <button onClick={() => setIsModalOpen(true)}>See more</button></p>
                </div>

                <AboutModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
                    {aboutInfo}
                </AboutModal>
            </div>
            <div className="skillsContent">
                <h2 className="skillsTitle" onClick={()=>setIsModalTechOpen(true)} style= {isModalTechOpen? indexStyle['index2']:isModalTechOpen?indexStyle['index2']:indexStyle['index1']}>Tech Stack</h2>
                <div className="iconContent">
                    <img className="imgIcon" style={{ animation: "slideIcon1 1s ease-in-out 0s 1" }} src={reactIcon} alt="React" />
                    <img className="imgIcon" style={{ animation: "slideIcon2 1.5s ease-in-out 0s 1" }} src={nextIcon} alt="Next.js" />
                    <img className="imgIcon" style={{ animation: "slideIcon3 2s ease-in-out 0s 1" }} src={flutterIcon} alt="Flutter" />
                    <img className="imgIcon" style={{ animation: "slideIcon4 2.5s ease-in-out 0s 1" }} src={firebaseIcon} alt="Firebase" />
                    <img className="imgIcon" style={{ animation: "slideIcon5 3s ease-in-out 0s 1" }} src={mongoIcon} alt="MongoDB" />
                    <img className="imgIcon" style={{ animation: "slideIcon6 3.5s ease-in-out 0s 1" }} src={pythonIcon} alt="Python" />
                </div>
            </div>
            {isModalTechOpen && <TechStackModal isOpen={isModalTechOpen} onRequestClose={()=> setIsModalTechOpen(false)} />}
        </div>
    )
}

export default MainInfoPage