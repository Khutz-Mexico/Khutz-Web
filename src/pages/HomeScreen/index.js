import React from 'react';
import Body from './Body';
import Presentation from './Presentation';
import RecentWork from './RecentWork';

export const HomeScreen = () => {
  return (
    <div className="flex flex-col items-center">
      <Presentation />
      <Body />
      <RecentWork />
    </div>
  );
};
