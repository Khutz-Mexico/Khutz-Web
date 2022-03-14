import Footer from 'components/Footer';
import Social from 'components/Social';
import React from 'react';
import Body from './Body';
import Presentation from './Presentation';
import RecentWork from './RecentWork';
import WorkToghether from './WorkToghether';

export const HomeScreen = () => {
  return (
    <div className="relative flex flex-col items-center">
      <Presentation />
      <Body />
      <RecentWork />
      <WorkToghether />
      <Footer />
      <div className="fixed left-[40px] top-[calc(50%-100px)]">
        <Social />
      </div>
    </div>
  );
};
