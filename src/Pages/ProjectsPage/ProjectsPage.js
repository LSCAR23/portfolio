import React from "react";
import './ProjectsPage.css'
import Card from "../../Components/Card/Card";
import me from "../../images/me.jpeg";
import jobsworkers from '../../images/jobsWorkers/jworkers1.png';
import jobsworkers2 from '../../images/jobsWorkers/jworkers2.png';
import jobsworkers3 from '../../images/jobsWorkers/jworkers3.png';
import jobsworkers4 from '../../images/jobsWorkers/jworkers4.png';
import jobs from '../../images/jobs/jobs1.png';
import jobs2 from '../../images/jobs/jobs2.png';
import jobs3 from '../../images/jobs/jobs3.png';
import jobs4 from '../../images/jobs/jobs4.png';
import jobs5 from '../../images/jobs/jobs5.png';
const ProjectsPage = () => {
    const cardsInfo = [
        {
            title: 'JOBS',
            image: jobs,
            description: "I'm a passionate software engineering student nearing completion of my diploma, eager to translate my learnings into real-world applications.  I possess a strong foundation in various technologies like React, Python, Firebase, C#, PostgreSQL, Flutter, and Java, honed through university projects and personal endeavors.  My drive to learn extends beyond programming, as I'm also finalizing my English studies at the university.  I thrive in environments that encourage continuous learning and innovation, allowing me to explore the potential of different technologies and create impactful solutions.",
            images:[jobs,jobs2,jobs3,jobs4,jobs5]
        },
        {
            title: 'JOBS WORKERS',
            image: jobsworkers,
            description: 'Proyecto descripción',
            images:[jobsworkers,jobsworkers2,jobsworkers3,jobsworkers4]
        }
    ];
    return (
        <div className="projectsContent">
            {cardsInfo.map((card, index) => (
                <Card title={card.title} image={card.image} description={card.description} images={card.images} />
            ))}
        </div>
    )
}

export default ProjectsPage