import React from 'react';
import Link from "next/link";
import ProjectsCard from './ProjectsCard';

const Projects = [
  {
    link: 'https://github.com/CloudClub-uoft/GuessTheLocation',
    title: 'Guess The Location',
    description: 'Web developer using React.js to link user-uploaded images and display them on webpage',
    image: '/images/GuessTheLocation.png',
  },
  {
    link: 'https://juntingwu.github.io/junting-personal-website/',
    title: 'This Personal Website',
    description: 'Built this responsive personal website using Next.js and styled efficiently using TailwindCSS',
    image: '/images/Picture-of-me.jpg',
  },
  {
    link: 'https://open.spotify.com/artist/4buIVdQZPiyQ4R8QBWHSbP?si=ON4PPkgLQ-6TZ0eouqbNMQ&nd=1&dlsi=d68d6e414b234871',
    title: 'Music Creation',
    description: 'Making fire beats',
    image: '/images/My-Spotify.png',
  },
  {
    link: 'https://open.spotify.com/artist/4buIVdQZPiyQ4R8QBWHSbP?si=ON4PPkgLQ-6TZ0eouqbNMQ&nd=1&dlsi=d68d6e414b234871',
    title: 'Deep Learning Model',
    description: 'In progress. ',
    image: '/images/My-Spotify.png',
  },
]
const ProjectsSection = () => {
  return (
    <section class="text-white py-6">
      <div class="text-5xl text-transparent bg-clip-text gradient-color py-3 font-bold">Projects</div>
      <div className='container mx-auto flex flex-wrap biggest'>
        {Projects.map((link, index) => (
          <div key={index} className="w-full md:w-1/3 p-4">
            <ProjectsCard key={index}
              href={link.link}
              title={link.title}
              description={link.description}
              image={link.image} />
          </div>
        ))}
      </div>
      <div className='text-center py-5'>
        <iframe title="My Spotify" src="https://open.spotify.com/embed/artist/4buIVdQZPiyQ4R8QBWHSbP?utm_source=generator"
          width="100%" height="352" ></iframe>
        <div className='mt-3 '>↑Check out my <a class="underline font-bold spotify text-transparent bg-clip-text" href="https://open.spotify.com/artist/4buIVdQZPiyQ4R8QBWHSbP?si=ON4PPkgLQ-6TZ0eouqbNMQ">Spotify Artist Profile</a>↑
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection