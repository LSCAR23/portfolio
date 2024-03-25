import React from "react";
import peronImage from '../../images/person.png'
import './MainInfoPage.css'
import reactIcon from '../../images/reactImg.png'
import flutterIcon from '../../images/flutterImg.png'
import pythonIcon from '../../images/pythonImg.png'
import firebaseIcon from '../../images/firebaseImg.png'
import csharpIcon from '../../images/csharpImg.png'
import { useState, useEffect } from 'react';
const MainInfoPage = () => {



    return (
        <div>
            <div className="firstInfoContent">
                <div className="imageContent">
                    <img className="myImage" src={peronImage}></img>
                </div>

                <div className="aboutContent">
                    <p className="aboutInfo">I'm a passionate software engineering student nearing completion of my diploma, eager to translate my learnings into real-world applications.  I possess a strong foundation in various technologies like React, Python, Firebase, C#, PostgreSQL, Flutter, and Java, honed through university projects and personal endeavors.  My drive to learn extends beyond programming, as I'm also finalizing my English studies at the university.  I thrive in environments that encourage continuous learning and innovation, allowing me to explore the potential of different technologies and create impactful solutions.</p>
                </div>
            </div>
            <div className="skillsContent">
                <h2 className="skillsTitle">Tech Stack</h2>
                <div className="iconContent">
                <img className="imgIcon" style={{animation: "slideIcon1 1s ease-in-out 0s 1"}} src={reactIcon} />
                <img className="imgIcon" style={{animation: "slideIcon2 1.5s ease-in-out 0s 1"}} src={flutterIcon} />
                <img className="imgIcon" style={{animation: "slideIcon3 2s ease-in-out 0s 1"}} src={firebaseIcon} />
                <img className="imgIcon" style={{animation: "slideIcon4 2.5s ease-in-out 0s 1"}} src={csharpIcon} />
                <img className="imgIcon" style={{animation: "slideIcon5 3s ease-in-out 0s 1"}} src={pythonIcon} />

                </div>
            </div>
        </div>
    )
}

export default MainInfoPage