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
                    <p className="aboutInfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="skillsContent">
                <h2 className="skillsTitle">Skills</h2>
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