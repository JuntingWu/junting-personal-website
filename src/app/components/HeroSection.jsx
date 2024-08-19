import React from 'react';
import Image from 'next/image';
//bg-gradient-to-br from-sky-100 via-blue-300 to-purple-600
const HeroSection = () => {

    //File Paths
    const my_picture = "images/me-picture.png";
    const spotify_logo = "images/spotify-logo.png";
    const linkedin_logo = "images/Linkedin-logo.png";

    return (
        <section class="py-0">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center pt-[125px]">
                    <h1 class="text-white my-14 sm:text-5xl text-4xl md:text-6xl lg:text-7xl xl:text-8xl
                    font-extrabold font-sans"><span class="text-transparent bg-clip-text gradient-color">Hello, I&#39;m Junting</span></h1>
                    <p class="text-[#81D4FA] text-lg lg:text-2xl my-2" >
                        Welcome to my personal website. I&#39;m a second-year student studying
                        electrical engineering at the University of Toronto.
                    </p>
                    <div>
                        <button class="text-black gradient-color w-full sm:w-fit px-6 py-3 rounded-lg inline-block mr-8 my-2 hover:bg-sky-300 active:bg-sky500 focus:outline-none focus:ring focus:ring-white">Download my resumé</button>
                        <button class="px-6 py-3 pb-5 w-full sm:w-fit rounded-lg inline-block bg-sky-200 mr-8 hover:bg-sky-300 active:bg-sky500 focus:outline-none focus:ring focus:ring-[#0A66C2]">
                             <a class=" font-bold flex items-center justify-center" href="https://www.linkedin.com/in/junting-wu/"><div class="inline-block h-[1.25rem]"><Image src={linkedin_logo}
                                height={30}
                                width={30} /></div></a></button>
                        <button class="px-6 py-3 pb-5 w-full sm:w-fit rounded-lg inline-block gradient-color hover:bg-sky-300 active:bg-sky500 focus:outline-none focus:ring focus:ring-[#0A66C2]">
                            <a class=" font-bold flex items-center justify-center" href="https://open.spotify.com/artist/4buIVdQZPiyQ4R8QBWHSbP?si=ON4PPkgLQ-6TZ0eouqbNMQ"><div class="inline-block h-[1.25rem]"><Image src={spotify_logo}
                                height={30}
                                width={30} /></div></a></button>
                    </div>
                </div>
                <div className="relative col-span-5 place-self-center lg:mt-0">
                    <div className="mt-[6rem] rounded-full place-self-center w-[200px] h-[200px] lg:w-[350px] lg:h-[500px] relative overflow">
                        <img src={my_picture}
                            alt='picture of me'
                            class='absolute w-full h-full object-cover object-center rounded-full'

                        />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default HeroSection
