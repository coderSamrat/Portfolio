import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
      const [activeTab, setActiveTab] = useState('skills');

      return (
            <div className="skills-container">
                  <div className="tab-title flex items-center my-5">
                        <p
                              className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''} text-xl mr-12 font-semibold cursor-pointer relative text-sky-400`}
                              onClick={() => setActiveTab('skills')}
                        >
                              Skills
                        </p>
                        <p
                              className={`tab-links ${activeTab === 'education' ? 'active-link' : ''} text-xl mr-12 font-semibold cursor-pointer relative text-sky-400`}
                              onClick={() => setActiveTab('education')}
                        >
                              Education
                        </p>
                  </div>
                  {activeTab === 'skills' && (
                        <div className="tab-content">
                              <ul>
                                    <li ><span className='text-rose-200 font-semibold text-lg'>Programming Language<br /><span className='text-secondary'>C, Java, JavaScript</span> </span></li>
                                    <li ><span className='text-rose-200 font-semibold text-lg'>Web Development<br /><span className='text-secondary'> HTML, CSS, JavaScript, React-Js, Tailwind CSS</span></span></li>
                              </ul>
                        </div>
                  )}

                  {activeTab === 'education' && (
                        <div className="tab-content">
                              <ul>
                                    <li ><span className='text-rose-200 font-semibold text-lg'>Secondary Examination<br /><span className='text-secondary'>2020</span> </span></li>
                                    <li ><span className='text-rose-200 font-semibold text-lg'>Higher Secondary Examination<br /><span className='text-secondary'>2022</span> </span></li>
                                    <li ><span className='text-rose-200 font-semibold text-lg'>Bachelor of Technology<br /><span className='text-secondary'>2022-Current</span> </span></li>
                              </ul>
                        </div>
                  )}
            </div>
      );
};

export default Skills;
