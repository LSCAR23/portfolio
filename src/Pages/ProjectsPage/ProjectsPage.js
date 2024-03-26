import React from "react";
import Card from "../../Components/Card/Card";
import me from "../../images/me.jpeg";
const ProjectsPage = () => {
    const cardsInfo = [
        {
            title: 'JOBS',
            image: me,
            description: 'Proyecto descripción.....'
        },
        {
            title: 'JOBS',
            image: me,
            description: 'Proyecto descripción.....'
        },
        {
            title: 'JOBS',
            image: me,
            description: 'Proyecto descripción.....'
        },
        {
            title: 'JOBS',
            image: me,
            description: 'Proyecto descripción.....'
        },
        {
            title: 'JOBS',
            image: me,
            description: 'Proyecto descripción.....'
        },
        {
            title: 'JOBS',
            image: me,
            description: 'Proyecto descripción.....'
        }
    ];
    return (
        <div>
            {cardsInfo.map((card, index) => (
                <Card title={card.title} image={card.image} description={card.description} />
            ))}
        </div>
    )
}

export default ProjectsPage