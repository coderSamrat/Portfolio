import { faJediOrder } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner'; 

const Logo = () => {
      const navigate = useNavigate();
      const [isLoading, setIsLoading] = useState(false);

      const handleClick = async () => {
            setIsLoading(true);
            window.scrollTo(0, 0);
            await new Promise(resolve => setTimeout(resolve, 500));
            navigate('/');
            setIsLoading(false);
      };

      return (
            <>
                  {isLoading && <Spinner />}
                  <button onClick={handleClick} disabled={isLoading}>
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
