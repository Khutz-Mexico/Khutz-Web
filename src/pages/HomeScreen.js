import React from 'react';
import Button from '../components/Button';

export const HomeScreen = () => {
  return (
    <div className="flex flex-col items-center mt-14 md:mt-[145px]">
      <div className="flex flex-col text-3xl md:text-[70px] md:leading-[85px]">
        <p className="font-semibold text-center">AYUDAMOS A LAS</p>
        <p className="font-semibold text-center">
          MARCAS A <span className="secondaryColor">PROSPERAR</span>
        </p>
        <p className="font-semibold text-center">EN LA ERA DIGITAL</p>
      </div>
      <div className="w-60 mt-[70px]">
        <Button rightArrow solid>
          Nuestro trabajo
        </Button>
      </div>
    </div>
  );
};
