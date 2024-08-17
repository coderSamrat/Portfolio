import React from 'react';
import { Link } from 'react-router-dom';

const ContactBtn = (props) => {
      return (
            <Link to='/contact'>
                  <button className='md:px-8 px-3 py-2 border border-secondary rounded md:text-lg text-md text-secondary hover:bg-secondary hover:text-primary transition duration-500 ease-linear font-semibold'>
                        {props.children}
                  </button>
            </Link>
      );
};

export default ContactBtn;
