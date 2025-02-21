import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
      return (
            <div className='md:max-w-[90vw] max-w-screen mx-auto py-8'>
                  <div className='w-full h-[2px] bg-secondary my-10'></div>
                  <div className="w-full h-auto flex items-center justify-center flex-col gap-2">
                        <p className="text-secondary text-sm">Build by ❤️ <Link to='' onClick={() => window.scrollTo(0, 0)} className='text-accent font-bold text-md italic'>Samrat Mallick ❤️</Link></p>
                        <p className="text-secondary text-sm">© 2024 Samrat Mallick - Portfolio. All rights reserved.</p>
                  </div>
            </div>
      );
};

export default Footer;
