import React from "react";
import peronImage from '../../images/me.jpeg'
import './MainInfoPage.css'
import reactIcon from '../../images/reactImg.png'
import flutterIcon from '../../images/flutterImg.png'
import pythonIcon from '../../images/pythonImg.png'
import firebaseIcon from '../../images/firebaseImg.png'
import csharpIcon from '../../images/csharpImg.png'
import ClipboardJS from 'clipboard';
import { useState, useEffect, useRef } from 'react';
import AboutModal from "../../Components/AboutModal/AboutModal";
import TechStackModal from "../../Components/TechStackModal/TechStackModal";
const MainInfoPage = () => {
    const phone = '+506 83105790';
    const phoneRef = useRef(null);
    const correo = 'laraoscar2310@gmail.com';

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalTechOpen, setIsModalTechOpen] = useState(false);
    const aboutInfo = "I'm a passionate software engineering student nearing completion of my diploma, eager to translate my learnings into real-world applications.  I possess a strong foundation in various technologies like React, Python, Firebase, C#, PostgreSQL, Flutter, and Java, honed through university projects and personal endeavors.  My drive to learn extends beyond programming, as I'm also finalizing my English studies at the university.  I thrive in environments that encourage continuous learning and innovation, allowing me to explore the potential of different technologies and create impactful solutions.";
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

        // Limpiar en desmontaje
        return () => {
            clipboard.destroy();
        };
    }, []);

    return (
        <div>
            <div className="firstInfoContent">
                <div className="imageContent">
                    <img className="myImage" src={peronImage}></img>
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
                <TechStackModal isOpen={isModalTechOpen} onRequestClose={()=> setIsModalTechOpen(false)}></TechStackModal>
            </div>
            <div className="skillsContent">
                <h2 className="skillsTitle" onClick={()=>setIsModalTechOpen(true)} style= {isModalOpen? indexStyle['index2']:isModalTechOpen?indexStyle['index2']:indexStyle['index1']}>Tech Stack</h2>
                <div className="iconContent" style= {isModalOpen? indexStyle['index2']:isModalTechOpen?indexStyle['index2']:indexStyle['index1']}>
                    <img className="imgIcon" style={{ animation: "slideIcon1 1s ease-in-out 0s 1" }} src={reactIcon} />
                    <img className="imgIcon" style={{ animation: "slideIcon2 1.5s ease-in-out 0s 1" }} src={flutterIcon} />
                    <img className="imgIcon" style={{ animation: "slideIcon3 2s ease-in-out 0s 1" }} src={firebaseIcon} />
                    <img className="imgIcon" style={{ animation: "slideIcon4 2.5s ease-in-out 0s 1" }} src={csharpIcon} />
                    <img className="imgIcon" style={{ animation: "slideIcon5 3s ease-in-out 0s 1" }} src={pythonIcon} />

                </div>
            </div>
        </div>
    )
}

export default MainInfoPage