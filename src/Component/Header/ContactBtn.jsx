import React from 'react';
import { NavLink } from 'react-router-dom';

const ContactBtn = (props) => {
      return (
            <NavLink to='/contact' 
                  onClick={() => window.scrollTo(0, 0)}
                  className={({ isActive }) => (
                        `md:px-8 px-3 py-2 border border-secondary rounded md:text-lg text-md 
                        ${isActive ? "bg-secondary text-primary" : "bg-primary  text-secondary"}
                        transition duration-500 ease-linear bg-primary hover:bg-secondary hover:text-primary font-semibold`
                  )}
            >
                  {props.children}
            </NavLink>
      );
};

export default ContactBtn;