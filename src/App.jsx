import React from 'react';
import { Header, Footer } from './Component/index.js';
import { Outlet } from 'react-router-dom';
import ContextProvider from './Context/Context.jsx';

const App = () => {
      return (
            <ContextProvider>
                  <div className='w-full min-h-screen bg-bg'>
                        <Header />
                        <Outlet />
                        <Footer />
                  </div>
            </ContextProvider>
      );
};

export default App;
