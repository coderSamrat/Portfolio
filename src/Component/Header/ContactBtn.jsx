import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

const ContactBtn = (props) => {
      const links = [
            { id: 1, link: "/contact" },
      ];

      const [isLoading, setIsLoading] = useState(false);
      const navigate = useNavigate();

      const handleNavigation = async (link) => {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 500)); 
            navigate(link);
            window.scrollTo(0, 0);
            setIsLoading(false);
      };

      return (
            <>
                  {isLoading && <Spinner />}
                  {links.map((link) => (
                        <button
                              key={link.id}
                              className={`md:px-8 px-3 py-2 border border-secondary rounded md:text-lg text-md 
                        ${window.location.pathname === link.link ? "bg-secondary text-primary" : "bg-primary text-secondary"} 
                        transition duration-500 ease-linear hover:bg-secondary hover:text-primary font-semibold`}
                              onClick={() => handleNavigation(link.link)}
                        >
                              {props.children}
                        </button>
                  ))}
            </>
      );
};

export default ContactBtn;
