import React from 'react';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="flex flex-col items-center">
        <div className="spinner"></div>
        <div className="mt-4 text-xl font-semibold gradient-text">
          Elite Properties
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          Loading your dream home...
        </div>
      </div>
    </div>
  );
};

export default Preloader;

