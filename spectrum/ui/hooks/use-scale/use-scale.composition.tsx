import React from 'react';
import { useScale } from './use-scale';

export const BasicuseScale = () => {
  const { count, increment } = useScale();

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};
