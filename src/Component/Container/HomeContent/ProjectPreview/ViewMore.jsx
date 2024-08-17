import React from 'react';
import { Link } from 'react-router-dom';

const ViewMore = (props) => {
      const scrollToTop = () => {
            window.scrollTo(0, 0);
      };
      return (
            <Link to='/projects' onClick={scrollToTop}>
                  <button className='md:px-8 px-3 py-2 border border-secondary rounded md:text-lg text-md text-primary bg-secondary hover:bg-primary hover:text-secondary transition duration-500 ease-linear font-semibold'>
                        {props.children}
                  </button>
            </Link>
      );
};

export default ViewMore;
