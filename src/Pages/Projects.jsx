import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import { Hero, Item } from '../Component/index.js';

const Projects = () => {

      const { all_project } = useContext(Context);

      return (
            <div className='pt-2'>
                  <div className="">
                        <Hero />
                        <div className="h-auto lg:py-12 lg:px-24 md:p-8 p-4 space-y-6">
                              <div className='max-w-[90vw] mx-auto flex justify-center'>
                                    <h1 className='uppercase md:text-5xl text-lg font-bold text-sky-600 underline'>My Projects</h1>
                              </div>
                              <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 '>
                                    {
                                          all_project.map((item) => {
                                                return (
                                                      <Item
                                                            key={item.id}
                                                            id={item.id}
                                                            image={item.image}
                                                            name={item.name}
                                                      />
                                                );
                                          })
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Projects;
