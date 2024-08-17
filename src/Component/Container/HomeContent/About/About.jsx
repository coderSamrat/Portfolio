import React from 'react';
import Skills from './Skills';

const About = () => {
      return (
            <div className='h-auto lg:py-12 lg:px-24 md:p-10 p-8 w-full flex justify-between gap-4 md:flex-row flex-col'>
                  <div className='md:basis-[35%] basis-full w-full md:block flex items-center justify-center mt-2 md:mt-0 select-none'>
                        {/* <img src={about_image_1} alt="About Image" className='max-w-full md:h-[70vh] h-auto object-cover md:max-w-sm lg:max-w-lg rounded-2xl cursor-none' /> */}
                        <dotlottie-player src="https://lottie.host/6d91924c-0b51-4a25-be93-7bc89d718435/2flPp9jhtI.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                  </div>
                  <div className='md:basis-[60%] basis-full py-2 w-full flex flex-col gap-4'>
                        <h1 className='md:text-7xl text-4xl text-bg2 font-bold md:text-start text-center'>About Me</h1>
                        <div className='flex flex-col w-full gap-4'>
                              <article className='text-md text-secondary font-semibold text-start italic'>
                                    Hello, I am Samrat Mallick, a dedicated Computer Science & Engineering student at Gargi Memorial Institute of Technology, set to graduate in 2026. My passion lies in web development, where I aim to craft innovative solutions that enhance user experiences through elegant design and seamless functionality. With a creative mindset and a commitment to continuous learning, I am eager to tackle new challenges and opportunities in the tech industry. My expertise encompasses a strong foundation in web development technologies, including HTML, CSS, JavaScript, and modern frameworks such as React.js. I have successfully applied these skills in various projects, transforming ideas into engaging and functional designs that meet user needs. Looking ahead, I aspire to contribute significantly to the intersection of technology and design, creating digital experiences that inspire and engage users worldwide. Beyond my professional pursuits, I enjoy immersing myself in films and video games, believing that entertainment and lifelong learning are crucial for personal and professional growth.
                              </article>
                              <div className="w-full">
                                    <Skills />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default About;
