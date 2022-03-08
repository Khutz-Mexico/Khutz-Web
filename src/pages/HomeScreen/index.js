import React from 'react';
import Body from './Body';
import Presentation from './Presentation';

export const HomeScreen = () => {
  return (
    <div className="flex flex-col items-center mt-14 md:mt-[145px]">
      <Presentation />
      <Body />
    </div>
  );
};
