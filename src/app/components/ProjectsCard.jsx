import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const ProjectsCard = ({ href, title, description, image }) => {
    return (
        <a class="container project-card" href={href}>
            <div className='box'>
                <div className='project-title'>{title}</div>
                <Image className='image' src={image}
                 alt='Project Image' 
                width={200}
                    height={300}></Image>
                <div className='description'>{description}</div>
            </div>
        </a>
    )
}

export default ProjectsCard;