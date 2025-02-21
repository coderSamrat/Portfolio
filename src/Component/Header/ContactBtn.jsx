import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactBtn = (props) => {
      const links = [
            { id: 1, link: "/contact" },
      ];

      const navigate = useNavigate();

      const handleNavigation = (link) => {
            navigate(link);
            window.scrollTo(0, 0);
      };

      return (
            <>
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
