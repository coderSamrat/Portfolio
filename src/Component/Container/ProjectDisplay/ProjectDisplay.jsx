import React from 'react';
const ProjectDisplay = (props) => {
      const { projects } = props;

      return (
            <div className='h-auto lg:py-12 lg:px-24 md:px-16 md:py-8 px-10 py-4 w-full flex justify-between gap-4 md:flex-row flex-col'>
                  <div className="md:basis-[35%] basis-full w-full md:block flex items-center justify-center mt-2 md:mt-0 select-none">
                        <img src={projects.image} alt={projects.title} className='max-w-full h-auto object-cover md:max-w-sm lg:max-w-lg rounded-2xl cursor-none' />
                  </div>
                  <div className="md:basis-[60%] basis-full p-2 w-full flex flex-col gap-8">
                        <h1 className='md:text-7xl text-4xl text-bg2 font-bold md:text-start text-center'>{projects.name}</h1>
                        <div className='flex flex-col gap-4'>
                              <p className='text-lg text-secondary font-semibold text-start italic'><span className='text-2xl text-bold text-gray-300'>Description </span> <span>:</span> {projects.description}</p>
                              <p className='text-lg text-secondary font-semibold text-start italic'><span className='text-2xl text-bold text-gray-300'>Tools </span> <span>:</span> {projects.tools}</p>
                        </div>
                        <div className='flex gap-4 items-center justify-start'>
                              <a href={projects.github} target="_blank" rel="noopener noreferrer" className='md:px-8 px-3 py-2 border border-secondary rounded md:text-lg text-md text-primary bg-secondary hover:bg-primary hover:text-secondary transition duration-500 ease-linear font-semibold'>Github</a>
                              <a href={projects.live} target="_blank" rel="noopener noreferrer" className='md:px-8 px-3 py-2 border border-secondary rounded md:text-lg text-md text-primary bg-secondary hover:bg-primary hover:text-secondary transition duration-500 ease-linear font-semibold'>Live</a>
                        </div>
                  </div>
            </div>
      );
};

export default ProjectDisplay;
