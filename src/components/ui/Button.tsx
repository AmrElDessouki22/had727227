'use client';

import React from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default Button;