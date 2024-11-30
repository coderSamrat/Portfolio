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
                                    I am a passionate and driven web developer currently pursuing a Bachelors Of Technology in
                                    Computer Science and Engineering from Gargi Memorial Institute of Technology. As a third-year
                                    student, I have developed a solid foundation in programming languages such as C, Java, and
                                    JavaScript. I am proficient in building modern web applications using ReactJS, ExpressJS, Node.js,
                                    and MongoDB, along with styling using TailwindCSS. With a keen interest in web development, I am
                                    eager to apply my skills in real-world projects and continue expanding my knowledge in the field. As
                                    a fresher, I am open to learning and contributing to innovative development teams.
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
