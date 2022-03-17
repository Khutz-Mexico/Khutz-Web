import React from 'react';

const BigCard = ({ imageSrc }) => {
  return (
    <img
      className="w-[860px] h-[460px] flex items-center justify-center bg-slate-300"
      src={imageSrc}
    />
  );
};

export default BigCard;
