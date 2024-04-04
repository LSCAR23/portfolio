import React from "react";
import './ProjectsPage.css'
import Card from "../../Components/Card/Card";
import jobsworkers from '../../images/jobsWorkers/jworkers1.png';
import jobsworkers2 from '../../images/jobsWorkers/jworkers2.png';
import jobsworkers3 from '../../images/jobsWorkers/jworkers3.png';
import jobsworkers4 from '../../images/jobsWorkers/jworkers4.png';

import jobs from '../../images/jobs/jobs1.png';
import jobs2 from '../../images/jobs/jobs2.png';
import jobs3 from '../../images/jobs/jobs3.png';
import jobs4 from '../../images/jobs/jobs4.png';
import jobs5 from '../../images/jobs/jobs5.png';

import pagMeteorito1 from '../../images/pagMeteorito/PagMeteorito1.png'
import pagMeteorito2 from '../../images/pagMeteorito/PagMeteorito2.png'
import pagMeteorito3 from '../../images/pagMeteorito/PagMeteorito3.png'
import pagMeteorito4 from '../../images/pagMeteorito/PagMeteorito4.png'
import pagMeteorito5 from '../../images/pagMeteorito/PagMeteorito5.png'
import pagMeteorito6 from '../../images/pagMeteorito/PagMeteorito6.png'
import pagMeteorito7 from '../../images/pagMeteorito/PagMeteorito7.png'
import pagMeteorito8 from '../../images/pagMeteorito/PagMeteorito8.png'

const ProjectsPage = () => {
    const cardsInfo = [
        {
            title: 'JOBS',
            image: jobs,
            description: "A platform that bridges the gap between workers seeking casual jobs and clients who need their services. The project, built using Flutter, leverages Firebase as its backend database. As a full-stack developer, I’ve handled all aspects of development so far.",
            images:[jobs,jobs2,jobs3,jobs4,jobs5]
        },
        {
            title: 'JOBS WORKERS',
            image: jobsworkers,
            description: "I’m currently in the process of developing a comprehensive platform that caters to casual workers seeking employment opportunities. This application serves as the ideal bridge between these workers and potential clients. Leveraging the power of Flutter, I’m crafting an intuitive and user-friendly interface that simplifies job discovery for workers and streamlines the hiring process for clients. The project shares a common Firebase database with JOBS, ensuring seamless data synchronization and efficient management. As a dedicated full-stack developer, I’ve taken charge of every aspect of this project, from conceptualization to implementation.",
            images:[jobsworkers,jobsworkers2,jobsworkers3,jobsworkers4]
        },
        {
            title: 'WEB SITE MATEORITE AGUAS ZARCAS',
            image: pagMeteorito1,
            description: "A simple website for a university community, in which I collaborate in its development. This site, built using React, focuses on a meteorite that fell near the community of Aguas Zarcas. It will include scientific data, curiosities and information about both the local community and the nearby areas impacted by the meteorite.",
            images:[pagMeteorito1,pagMeteorito2,pagMeteorito3,pagMeteorito4,pagMeteorito5,pagMeteorito6,pagMeteorito7,pagMeteorito8]
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