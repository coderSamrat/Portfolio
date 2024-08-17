import React from 'react';
import { createContext } from 'react';
import all_project from '../Component/Assets/all_project.js';

export const Context = createContext(null);

const ContextProvider = (prop) => {
      const contextValue = { all_project };

      return (
            <Context.Provider value={contextValue}>
                  {prop.children}
            </Context.Provider>
      );
};

export default ContextProvider;