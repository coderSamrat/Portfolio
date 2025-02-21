import { faJediOrder } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
      const navigate = useNavigate();

      const handleClick = async () => {
            window.scrollTo(0, 0);
            navigate('/');
      };

      return (
            <>
                  <button onClick={handleClick}>
                        <span className='text-4xl font-bold text-secondary flex items-center gap-2'>
                              <span>
                                    <FontAwesomeIcon icon={faJediOrder} />
                              </span>
                              <span className='md:block hidden text-4xl'>
                                    Samrat
                              </span>
                        </span>
                  </button>
            </>
      );
};

export default Logo;
