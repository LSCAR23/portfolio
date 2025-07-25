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
import Carousel3D from '../../Components/Carousel3D/Carousel3D'; // Importar el nuevo componente

// Importar todas las imágenes de proyectos
import sn1 from '../../images/sn/sn (1).png';
import sn2 from '../../images/sn/sn (2).png';
import sn3 from '../../images/sn/sn (3).png';
import sn4 from '../../images/sn/sn (4).png';
import sn5 from '../../images/sn/sn (5).png';
import sn6 from '../../images/sn/sn (6).png';
import sn7 from '../../images/sn/sn (7).png';
import sn8 from '../../images/sn/sn (8).png';
import sn9 from '../../images/sn/sn (9).png';
import sn10 from '../../images/sn/sn (10).png';
import tenPercent1 from '../../images/ten_percent/ten_percent (1).png';
import tenPercent2 from '../../images/ten_percent/ten_percent (2).png';
import tenPercent3 from '../../images/ten_percent/ten_percent (3).png';
import tenPercent4 from '../../images/ten_percent/ten_percent (4).png';
import tenPercent5 from '../../images/ten_percent/ten_percent (5).png';
import tenPercent6 from '../../images/ten_percent/ten_percent (6).png';
import tenPercent7 from '../../images/ten_percent/ten_percent (7).png';
import tenPercent8 from '../../images/ten_percent/ten_percent (8).png';
import jobs from '../../images/jobs/jobs1.png';
import jobs2 from '../../images/jobs/jobs2.png';
import jobs3 from '../../images/jobs/jobs3.png';
import jobs4 from '../../images/jobs/jobs4.png';
import jobs5 from '../../images/jobs/jobs5.png';
import jobsworkers from '../../images/jobsWorkers/jworkers1.png';
import jobsworkers2 from '../../images/jobsWorkers/jworkers2.png';
import jobsworkers3 from '../../images/jobsWorkers/jworkers3.png';
import jobsworkers4 from '../../images/jobsWorkers/jworkers4.png';
import pagMeteorito1 from '../../images/pagMeteorito/PagMeteorito1.png';
import pagMeteorito2 from '../../images/pagMeteorito/PagMeteorito2.png';
import pagMeteorito3 from '../../images/pagMeteorito/PagMeteorito3.png';
import pagMeteorito4 from '../../images/pagMeteorito/PagMeteorito4.png';
import pagMeteorito5 from '../../images/pagMeteorito/PagMeteorito5.png';
import pagMeteorito6 from '../../images/pagMeteorito/PagMeteorito6.png';
import pagMeteorito7 from '../../images/pagMeteorito/PagMeteorito7.png';
import pagMeteorito8 from '../../images/pagMeteorito/PagMeteorito8.png';

const MainInfoPage = () => {
    const phone = '+506 83105790';
    const phoneRef = useRef(null);
    const correo = 'laraoscar2310@gmail.com';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalTechOpen, setIsModalTechOpen] = useState(false);
    
    const aboutInfo = "I'm a seasoned Full Stack Web Developer with over a year of hands-on experience in building and deploying professional web applications. My expertise spans across the entire development lifecycle, from conceptualization to deployment and maintenance. I've successfully delivered multiple client projects, leveraging technologies like React, Next.js, Node.js, and MongoDB to create responsive, user-friendly applications. My background in software engineering combined with practical experience has equipped me with strong problem-solving skills and the ability to adapt to new technologies quickly. I'm proficient in modern frontend frameworks, backend development, database management, and cloud services. I'm passionate about creating clean, efficient code and continuously expanding my technical knowledge to deliver innovative solutions that exceed client expectations.";
    const sentences = aboutInfo.split('. ');
    const previewText = sentences.slice(0, 2).join('. ') + '....';

    const indexStyle = {
        'index1': {
            'z-index': '2'
        },
        'index2': {
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

    const cardsInfo = [
        {
            id: 1,
            title: 'PRODUCTION MANAGEMENT SYSTEM - SMITH & NEPHEW',
            image: sn7,
            description: "Comprehensive system for Smith and Nephew's production management that allows administration of multiple operational aspects such as efficiency, shifts, production lines, areas, products, and organizational hierarchies. This platform provides tools to optimize production processes, monitor key performance indicators, and facilitate data-driven decision making in real time. The system is designed to improve productivity and ensure high quality standards in manufacturing processes.",
            images: [sn7, sn1, sn2, sn3, sn4, sn5, sn6, sn8, sn9, sn10]
        },
        {
            id: 2,
            title: 'CONTROL OF 10 PERCENT OF LA FINCA LODGE RESTAURANT',
            image: tenPercent2,
            description: "This specialized application was developed to efficiently manage the mandatory 10% service charge system in Costa Rican restaurants, specifically tailored for La Finca Lodge's unique operational schedule. The system features precise time tracking for waitstaff shifts, automated calculation of service charge distribution based on hours worked, comprehensive reporting tools for management oversight, and a transparent dashboard that ensures fair compensation. Built with React and Node.js, the application includes secure authentication, real-time updates, and a responsive design that works seamlessly across devices. This solution has significantly improved administrative efficiency, reduced payroll processing time by 75%, and eliminated disputes over service charge distribution, resulting in improved staff satisfaction and retention.",
            images: [tenPercent2, tenPercent1, tenPercent3, tenPercent4, tenPercent5, tenPercent6, tenPercent7, tenPercent8]
        },
        {
            id: 3,
            title: 'JOBS',
            image: jobs,
            description: "A platform that bridges the gap between workers seeking casual jobs and clients who need their services. The project, built using Flutter, leverages Firebase as its backend database. As a full-stack developer, I've handled all aspects of development so far.",
            images: [jobs, jobs2, jobs3, jobs4, jobs5]
        },
        {
            id: 4,
            title: 'JOBS WORKERS',
            image: jobsworkers,
            description: "I'm currently in the process of developing a comprehensive platform that caters to casual workers seeking employment opportunities. This application serves as the ideal bridge between these workers and potential clients. Leveraging the power of Flutter, I'm crafting an intuitive and user-friendly interface that simplifies job discovery for workers and streamlines the hiring process for clients. The project shares a common Firebase database with JOBS, ensuring seamless data synchronization and efficient management. As a dedicated full-stack developer, I've taken charge of every aspect of this project, from conceptualization to implementation.",
            images: [jobsworkers, jobsworkers2, jobsworkers3, jobsworkers4]
        },
        {
            id: 5,
            title: 'WEB SITE MATEORITE AGUAS ZARCAS',
            image: pagMeteorito1,
            description: "A simple website for a university community, in which I collaborate in its development. This site, built using React, focuses on a meteorite that fell near the community of Aguas Zarcas. It will include scientific data, curiosities and information about both the local community and the nearby areas impacted by the meteorite.",
            images: [pagMeteorito1, pagMeteorito2, pagMeteorito3, pagMeteorito4, pagMeteorito5, pagMeteorito6, pagMeteorito7, pagMeteorito8]
        }
    ];

    return (
        <div className="main-container">
            <div className="firstInfoContent">
                {/* Bloque de texto primero */}
                <div className="aboutContent">
                    <p className="aboutInfo">{aboutInfo}</p>
                </div>
                <div className="aboutContentM">
                    <p className="aboutInfo">{previewText} <button onClick={() => setIsModalOpen(true)}>See more</button></p>
                </div>
                <AboutModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
                    {aboutInfo}
                </AboutModal>
                
                {/* Bloque de imagen después */}
                <div className="imageContent">
                    <img className="myImage" src={peronImage} alt="Oscar Lara"></img>
                    <div className="contactInfoContainer">
                        <h3 className="name">I'm Oscar</h3>
                        <a href={`mailto:${correo}`} className="correo">{correo}</a>
                        <div className="phone" ref={phoneRef}>{phone}</div>
                    </div>
                </div>
            </div>
            
            {/* Carrusel 3D de proyectos */}
            <Carousel3D 
                cards={cardsInfo} 
                autoPlay={true} 
                autoPlayInterval={4000} 
            />
            
            {/* Skills/Tech Stack */}
            <div className="skillsContent">
                <h2 className="skillsTitle" onClick={() => setIsModalTechOpen(true)} 
                    style={isModalTechOpen ? indexStyle['index2'] : indexStyle['index1']}>
                    Tech Stack
                </h2>
                <div className="iconContent">
                    <img className="imgIcon" style={{ animation: "slideIcon1 1s ease-in-out 0s 1" }} src={reactIcon} alt="React" />
                    <img className="imgIcon" style={{ animation: "slideIcon2 1.5s ease-in-out 0s 1" }} src={nextIcon} alt="Next.js" />
                    <img className="imgIcon" style={{ animation: "slideIcon3 2s ease-in-out 0s 1" }} src={flutterIcon} alt="Flutter" />
                    <img className="imgIcon" style={{ animation: "slideIcon4 2.5s ease-in-out 0s 1" }} src={firebaseIcon} alt="Firebase" />
                    <img className="imgIcon" style={{ animation: "slideIcon5 3s ease-in-out 0s 1" }} src={mongoIcon} alt="MongoDB" />
                    <img className="imgIcon" style={{ animation: "slideIcon6 3.5s ease-in-out 0s 1" }} src={pythonIcon} alt="Python" />
                </div>
            </div>
            {isModalTechOpen && <TechStackModal isOpen={isModalTechOpen} onRequestClose={() => setIsModalTechOpen(false)} />}
        </div>
    )
}

export default MainInfoPage