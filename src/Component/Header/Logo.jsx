import { faJediOrder } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
      const scrollToTop = () => {
            window.scrollTo(0, 0);
      };
      return (
            <NavLink to='/' onClick={scrollToTop}>
                  <span className='text-4xl font-bold text-secondary flex items-center gap-2'>
                        <span>
                              <FontAwesomeIcon icon={faJediOrder} />
                        </span>
                        <span className='md:block hidden text-4xl'>
                              Samrat
                        </span>
                  </span>
            </NavLink>
      );
};

export default Logo;
