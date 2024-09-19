import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { ContactBtn } from '../index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Spinner from './Spinner';

const Header = () => {
      const links = [
            { id: 1, name: "Home", link: "/" },
            { id: 2, name: "Projects", link: "/projects" },
      ];

      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      const navigate = useNavigate();

      const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
      };

      const handleNavigation = async (link) => {
            setIsLoading(true);
            if (isMenuOpen) toggleMenu();
            await new Promise(resolve => setTimeout(resolve, 500));
            navigate(link);
            window.scrollTo(0, 0);
            setIsLoading(false);
      };

      return (
            <>
                  {isLoading && <Spinner />}
                  <header className='sticky top-0 right-0 left-0 w-full md:px-8 px-2 py-4 border-b-2 border-b-secondary gap-2 flex justify-between items-center select-none z-50 bg-primary'>
                        <div>
                              <Logo />
                        </div>
                        <ul className='lg:flex hidden gap-10 text-xl font-bold'>
                              {links.map((link) => (
                                    <li key={link.id}>
                                          <button
                                                onClick={() => handleNavigation(link.link)}
                                                className={`text-secondary hover:text-teal-400 transition duration-300 ease-linear ${window.location.pathname === link.link ? 'text-teal-400' : ''}`}
                                          >
                                                {link.name}
                                          </button>
                                    </li>
                              ))}
                        </ul>
                        <div className='flex gap-4'>
                              <ContactBtn>Contact Me</ContactBtn>
                              <button className='text-3xl lg:hidden block text-secondary' onClick={toggleMenu}>
                                    <FontAwesomeIcon icon={faBars} />
                              </button>
                        </div>

                        {isMenuOpen && (
                              <div className='fixed top-0 left-0 w-full h-screen bg-primary opacity-90 z-50'>
                                    <ul className='flex flex-col w-full h-full items-center justify-center gap-5 text-xl font-bold'>
                                          {links.map((link) => (
                                                <li key={link.id}>
                                                      <button
                                                            onClick={() => handleNavigation(link.link)}
                                                            className={`text-secondary hover:text-teal-400 transition duration-300 ease-linear ${window.location.pathname === link.link ? 'text-teal-400' : ''}`}
                                                      >
                                                            {link.name}
                                                      </button>
                                                </li>
                                          ))}
                                    </ul>
                                    <button className='text-3xl absolute top-5 md:right-8 right-3 text-secondary' onClick={toggleMenu}>
                                          <FontAwesomeIcon icon={faTimes} />
                                    </button>
                              </div>
                        )}
                  </header>
            </>
      );
};

export default Header;
