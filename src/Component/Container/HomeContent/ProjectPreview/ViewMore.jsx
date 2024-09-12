import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ViewMore = (props) => {
      const [isLoading, setLoading] = useState(false);
      const navigate = useNavigate();

      const handleClick = (event) => {
            event.preventDefault();
            setLoading(true);

            setTimeout(() => {
                  window.scrollTo(0, 0);
                  navigate('/projects');
            }, 1000);
      };

      return (
            <button
                  onClick={handleClick}
                  className={`md:px-8 px-3 py-2 border border-secondary rounded md:text-lg text-md text-primary bg-secondary hover:bg-primary hover:text-secondary transition duration-500 ease-linear font-semibold ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}
            >
                  {isLoading ? 'Loading...' : `${props.children}`}
            </button>
      );
};

export default ViewMore;
