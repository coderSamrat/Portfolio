import React from 'react';
import './ProjectPreview.css';
import project_preview from '../../../Assets/project_preview.js';
import { Item, ViewMore } from '../../../index.js';

const ProjectPreview = () => {
      return (
            <div className="h-auto lg:py-12 lg:px-24 md:p-8 p-4 w-full flex flex-col gap-10 ">
                  <div className="w-full flex items-center justify-center mb-5">
                        <span className='lg:text-5xl md:text-3xl text-2xl text-bg2 font-bold relative preview_title'>Project Preview</span>
                  </div>
                  <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 '>
                        {
                              project_preview.map((item) => (
                                    <Item
                                          key={item.id}
                                          id={item.id}
                                          image={item.image}
                                          name={item.name}
                                    />
                              ))
                        }
                  </div>
                  <div className='w-full flex items-center justify-center'>
                        <ViewMore>View More Project</ViewMore>
                  </div>
            </div>
      );
};

export default ProjectPreview;
