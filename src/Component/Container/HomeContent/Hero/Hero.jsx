import React from 'react';
import hero_image from '../../../Assets/hero_image.jpg';
import { ContactBtn } from '../../../index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsPraying } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {

      return (
            <div className='lg:h-[80vh] h-auto text-secondary flex flex-col-reverse md:flex-row items-center justify-between lg:py-12 lg:px-24 md:p-8 p-4 gap-4'>
                  <div className="md:w-1/2 w-full flex flex-col items-start md:items-start">
                        <p className="mb-2 flex gap-2 items-center font-semibold"><span>Hi</span> <span className='text-accent text-2xl'><FontAwesomeIcon icon={faHandsPraying} /></span></p>
                        <p className="mb-2 text-lg font-semibold">I'm</p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 text-accent font-bold">Samrat Mallick</h1>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 font-bold">
                              I build things for the web.
                        </h1>
                        <p className="mb-6 font-semibold text-lg md:text-xl">
                              I'm a passionate React developer based in India, dedicated to creating dynamic, user-centric web applications. With expertise in modern technologies, I deliver high-quality, scalable solutions and optimize performance for impactful digital experiences.
                        </p>
                        <ContactBtn>Get In Touch</ContactBtn>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center mt-2 md:mt-0 select-none">
                        <img src={hero_image} alt="Hero Image" className="max-w-full md:h-[70vh] h-auto object-cover md:max-w-sm lg:max-w-lg rounded-2xl cursor-none" />
                  </div>
            </div>
      );
};

export default Hero;
