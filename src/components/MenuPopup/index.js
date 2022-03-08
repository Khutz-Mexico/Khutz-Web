import React from 'react';

export const MenuPopup = () => {
  return (
    <div className="w-[520px] h-screen fixed right-0 top-0 bg-[#1B212C] px-[100px] py-[110px]">
      <span className="text-xs text-white opacity-40 font-light">
        NAVIGATION
      </span>
      <hr className="text-white opacity-40 mt-6" />
      <ul className="py-10">
        <li className="menu-item">Inicio</li>
        <li className="menu-item">Portafolio</li>
        <li className="menu-item">Servicios</li>
        <li className="menu-item">Cotizar</li>
        <li className="menu-item">Contacto</li>
      </ul>
      <span className="text-xs text-white opacity-40 font-light">SOCIALS</span>
      <ul className="flex space-x-7">
        <li className="text-white">Instagram</li>
        <li className="text-white">Linkeding</li>
        <li className="text-white">Dribbble</li>
      </ul>
    </div>
  );
};
