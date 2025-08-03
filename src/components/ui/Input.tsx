'use client';

import React from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <input type="text" value={value} onChange={onChange} className="border border-gray-300 p-2 rounded w-full" />
  );
};

export default Input;