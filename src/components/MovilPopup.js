import React from 'react';

export const MovilPopup = () => {
  return (
    <div className="absolute right-0 bottom-14 w-[250px] rounded-l-2xl h-[250px] bg-[#1B212C]">
      <ul className="flex flex-col w-full h-full items-start justify-between pr-8 py-7">
        <li className="text-white text-[20px] w-full hover:bg-slate-700 rounded-r-xl pl-8">
          Home
        </li>
        <li className="text-white text-[20px] w-full hover:bg-slate-700 rounded-r-xl pl-8">
          Portafolio
        </li>
        <li className="text-white text-[20px] w-full hover:bg-slate-700 rounded-r-xl pl-8">
          Servicios
        </li>
        <li className="text-white text-[20px] w-full hover:bg-slate-700 rounded-r-xl pl-8">
          Cotizar
        </li>
        <li className="text-white text-[20px] w-full hover:bg-slate-700 rounded-r-xl pl-8">
          Contacto
        </li>
      </ul>
    </div>
  );
};
