import React from 'react';

const Spinner = () => (
      <div className="fixed inset-0 flex items-center justify-center bg-primary opacity-90 z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-400"></div>
      </div>
);

export default Spinner;
