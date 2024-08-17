import React from 'react';
import { Header, Footer, LeftSider } from './Component/index.js';
import { Outlet, useLocation } from 'react-router-dom';
import ContextProvider from './Context/Context.jsx';

const App = () => {
      const location = useLocation();
      const isContactPage = location.pathname === '/contact';
      return (
            <ContextProvider>
                  <div className='w-full min-h-screen bg-bg'>
                        <Header />
                        <Outlet />
                        <Footer />
                        {isContactPage ? null : <LeftSider />}
                  </div>
            </ContextProvider>
      );
};

export default App;
