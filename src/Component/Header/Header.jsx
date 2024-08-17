import React, {useState} from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { ContactBtn } from '../index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
      const links = [
            {
                  id: 1,
                  name: "Home",
                  link: "/"
            },
            {
                  id: 2,
                  name: "Projects",
                  link: "/projects"
            },
      ];

      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen)
      };

      return (
            <header className='sticky top-0 right-0 left-0 w-full md:px-8 px-2 py-4 border-b-2 border-b-secondary gap-2 flex justify-between items-center select-none z-50 bg-primary'>
                  <div>
                        <Logo />
                  </div>
                  <ul className='lg:flex hidden gap-10 text-xl font-bold'>
                        {
                              links.map((link) => (
                                    <NavLink
                                          key={link.id}
                                          to={link.link}
                                          className={
                                                ({ isActive }) => (
                                                      `${isActive ? "text-teal-400" : "text-secondary"} text-secondary
                                                      hover:text-teal-400 transition duration-300 ease-linear`
                                                )
                                          }
                                          onClick={() => window.scrollTo(0, 0)}
                                    >
                                          {link.name}
                                    </NavLink>
                              ))
                        }
                  </ul>
                  <div className='flex gap-4'>
                        <ContactBtn>Contact Me</ContactBtn>
                        <button className=' text-3xl lg:hidden block text-secondary' onClick={toggleMenu}>
                              <FontAwesomeIcon icon={faBars} />
                        </button>
                  </div>

                  {
                        isMenuOpen && (
                              <div className='fixed top-0 left-0 w-full h-screen bg-primary opacity-90 z-50'>
                                    <ul className='flex flex-col w-full h-full items-center justify-center gap-5 text-xl font-bold'>
                                          {
                                                links.map((link) => (
                                                      <NavLink
                                                            key={link.id}
                                                            to={link.link}
                                                            className={
                                                                  ({ isActive }) => (
                                                                        `${isActive ? "text-teal-400" : "text-secondary"} text-secondary
                                                                        hover:text-teal-400 transition duration-300 ease-linear`
                                                                  )
                                                            }
                                                            onClick={() => window.scrollTo(0, 0)}
                                                      >
                                                            {link.name}
                                                      </NavLink>
                                                ))
                                          }
                                    </ul>
                                    <button className='text-3xl absolute top-5 md:right-8 right-3 text-secondary' onClick={toggleMenu}>
                                          <FontAwesomeIcon icon={faTimes} />
                                    </button>
                              </div>
                        )
                  }
            </header>
      );
};

export default Header;
