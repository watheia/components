import React from 'react';
import { useMediaQuery } from './use-media-query';

export const BasicuseMediaQuery = () => {
  const matches = useMediaQuery('(min-width: 240px) and (max-width: 767px)');
  return (
    <>
      <h1>matches (min-width: 240px) and (max-width: 767px)?</h1>
      <h2>{matches}</h2>
    </>
  );
};
