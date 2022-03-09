import React from 'react';

export const LargeCard = ({ cardTitle, cardService }) => {
  return (
    <div className="w-[350px] h-[560px] bg-slate-300 hover:scale-[98%] transform transition duration-300 ease-out">
      <h2>{cardTitle}</h2>
      <span>{cardService}</span>
    </div>
  );
};
