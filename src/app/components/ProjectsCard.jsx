import React from 'react'
import Link from 'next/link';

const ProjectsCard = ({ href, title, description, image }) => {
    return (
        <a class="container project-card" href={href}>
            <div className='box'>
                <div className='project-title'>{title}</div>
                <img className='image' src={image}
                 alt='Project Image' 
                width={200}
                    height={300}></img>
                <div className='description'>{description}</div>
            </div>
        </a>
    )
}

export default ProjectsCard;