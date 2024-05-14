import React from 'react';
import Image from 'next/image';
//bg-gradient-to-br from-sky-100 via-blue-300 to-purple-600
const HeroSection = () => {
    return (
        <section class="py-6"> 
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center pt-[125px]">
                    <h1 class="text-white my-14 sm:text-5xl text-3xl md:text-6xl lg:text-7xl xl:text-8xl
                    font-extrabold font-sans"><span class="text-transparent bg-clip-text gradient-color">Hello, I&#39;m Junting</span></h1>
                    <p class="text-[#81D4FA] text-lg lg:text-2xl my-2" >
                        Welcome to my personal website. I&#39;m a second-year student studying
                        electrical engineering at the University of Toronto.
                    </p>
                    <div>
                        <button class="text-black gradient-color w-full sm:w-fit px-6 py-3 rounded-lg inline-block mr-8 my-2 hover:bg-sky-300 active:bg-sky500 focus:outline-none focus:ring focus:ring-white">Download my resumé</button>
                        <button class="px-6 py-3 w-full sm:w-fit rounded-lg inline-block bg-sky-200 mr-8 hover:bg-sky-300 active:bg-sky500 focus:outline-none focus:ring focus:ring-[#0A66C2]">
                        <div class="inline-block h-[1.25rem]"><Image src="/images/Linkedin-logo.png"
                        height={30}
                        width={30}/></div> <a class=" font-bold " href="https://www.linkedin.com/in/junting-wu/">My LinkedIn</a></button>
                        <button class="px-6 py-3 w-full sm:w-fit rounded-lg inline-block gradient-color hover:bg-sky-300 active:bg-sky500 focus:outline-none focus:ring focus:ring-[#0A66C2]">
                        <a class=" font-bold " href="https://open.spotify.com/artist/4buIVdQZPiyQ4R8QBWHSbP?si=ON4PPkgLQ-6TZ0eouqbNMQ">Spotify Artist Profile</a></button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full flex offset-5 bg-gray-800 w-[300px] h-[330px] lg:w-[400px] lg:h-[400px] relative">
                        <Image src="/images/Picture-of-me.jpg" 
                        alt='picture of me' 
                        class='absolute rounded-md object-cover'
                        width ={500} 
                        height={500}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection
