import React from 'react';
import { useMediaQuery } from './use-media-query';

export const BasicuseMediaQuery = () => {
  const { count, increment } = useMediaQuery();

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};
