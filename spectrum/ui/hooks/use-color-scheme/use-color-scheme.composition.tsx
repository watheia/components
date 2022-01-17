import React from 'react';
import { useColorScheme } from './use-color-scheme';

export const BasicuseColorScheme = () => {
  const { count, increment } = useColorScheme();

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};
