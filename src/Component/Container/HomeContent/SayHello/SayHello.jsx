import React from 'react';
import '../ProjectPreview/ProjectPreview.css';

const SayHello = () => {

      const user = {
            name: 'Samrat Mallick',
            email: 'samratmallick832@gmail.com',
            gender: 'male',
            mobile: '+919883203654',
            country: 'India'
      };

      return (
            <div className="h-auto lg:py-12 lg:px-24 md:p-8 p-4 w-full flex flex-col">
                  <div className="w-full hidden md:flex items-center gap-8">
                        <span className='md:text-5xl text-3xl text-bg2 font-bold '>Say Hello</span>
                        <div className='bg-secondary h-[1px] w-40'></div>
                  </div>
                  <div className="w-full md:hidden flex items-center md:justify-start justify-center ">
                        <span className='md:text-5xl text-3xl text-bg2 font-bold relative preview_title'>Say Hello</span>
                  </div>
                  <div className=' text-secondary flex flex-col md:flex-row items-center justify-between gap-4'>
                        <div className="md:basis-[55%] basis-full flex flex-col lg:text-lg text-md font-semibold mx-10">
                              <h1 className='text-sky-300'>{"{"}</h1>
                              {
                                    Object.keys(user).map((key) => (
                                          <h1 className='ml-8' key={key}>
                                                <span className='text-sky-400'>{key}</span> : {" "} <span>{user[key]}</span>
                                          </h1>
                                    ))
                              }
                              <h1 className='text-sky-300'>{"}"}</h1>
                        </div>
                        <div className="md:basis-[40%] basis-full w-full flex justify-center mt-2 md:mt-0 select-none">
                              <dotlottie-player src="https://lottie.host/6de3bed3-375d-4f54-9af9-541e332cad80/Vme5mepDkr.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                        </div>
                  </div>
            </div>
      );
}

export default SayHello;
