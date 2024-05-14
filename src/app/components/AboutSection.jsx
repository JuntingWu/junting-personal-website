import React from 'react'

const AboutSection = () => {
  return (//Make opacity change as we scroll down
    <section class="text-white py-6">
        <div class="text-5xl text-transparent bg-clip-text gradient-color">More About Me</div>
        <p class="py-3">
            I am passionate about programming and making my own things that work!
            I have experience in web development and database management from being a part of the University of Toronto CloudClub adn developing personal website! 
            On my free time, I like to exercise and make my own music. Keep reading to learn more about these projects. 
        </p>
        <div>My skills include: </div>
        <ul>
              <li>C/C++</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
        </ul>
    </section>
  )
}

export default AboutSection