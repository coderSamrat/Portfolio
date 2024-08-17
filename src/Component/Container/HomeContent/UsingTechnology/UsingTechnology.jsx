import React from 'react';
import technology from '../../../Assets/technology.js';

const UsingTechnology = () => {
      return (
            <div className='h-auto lg:py-12 lg:px-24 md:p-8 p-4 w-full flex gap-4 flex-col'>
                  <div className="w-full hidden md:flex items-center gap-8">
                        <span className='text-3xl text-sky-400 font-bold '>Here are some technologies I've been working with </span>
                        <div className='bg-secondary h-[1px] w-40'></div>
                  </div>
                  <div className="w-full md:hidden flex items-center md:justify-start justify-center ">
                        <span className='text-3xl text-sky-400 font-bold relative preview_title'>Here are some technologies I've been working with</span>
                  </div>
                  <div className='w-full flex flex-wrap gap-8 items-center justify-center'>
                        {technology.map((item, index) => (
                              <div key={index} className='w-[100px] h-[100px] flex items-center justify-center'>
                                    <img src={item.image} className='w-full h-full object-contain' />
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default UsingTechnology;
