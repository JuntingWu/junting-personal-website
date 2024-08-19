import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const ProjectsCard = ({ href, title, description, image }) => {
    return (
        <a class="container project-card flex flex-col" href={href}>
            <div className='box py-18 size'>
                <div className='project-title '>{title}</div>
                <Image className='image size' src={image}
                    alt='Project Image'
                    width={90}
                    height={50}></Image>
                <div className='description'>{description}</div>
            </div>
        </a>
    )
}

export default ProjectsCard;