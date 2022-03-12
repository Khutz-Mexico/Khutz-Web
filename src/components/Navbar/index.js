import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { XIcon, MenuAlt4Icon } from '@heroicons/react/solid';
import { MenuPopup } from 'components/MenuPopup';
import { MovilPopup } from 'components/MovilPopup';
import LanguagePicker from './LanguagePicker';

export const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMovilOpen, setMenuMovilOpen] = useState(false);

  const logoPath = '/assets/logo.svg';

  const handleHome = () => {
    navigate('/', {
      replace: true,
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMenuMovil = () => {
    setMenuMovilOpen(!menuMovilOpen);
  };

  return (
    <>
      <header className="bg-white sticky top-0 z-50 h-[var(--navbar-height)] flex items-center justify-between px-8 md:px-[40px]">
        {/* Left side */}
        <div className="hidden md:flex w-[200px] items-center">
          {/* <DropDownMenu /> */}
          <LanguagePicker />
        </div>

        {/* Middle side */}
        <div className="flex flex-grow justify-center items-center h-[14px] cursor-pointer my-auto">
          <img
            alt="khutz-icon"
            src={logoPath}
            className="h-4 md:h-[14px]"
            onClick={handleHome}
          />
        </div>

        {/* Right side */}
        <div className="hidden md:flex md:justify-end w-[200px]">
          {menuOpen ? (
            <XIcon
              className="h-7 cursor-pointer z-50 fill-[#FFFFFF]"
              onClick={toggleMenu}
            />
          ) : (
            <MenuAlt4Icon
              className="h-8 cursor-pointer text-right"
              onClick={toggleMenu}
            />
          )}

          {menuOpen && <MenuPopup onClose={() => setMenuOpen(false)} />}
        </div>

        <div className="absolute bottom-0 right-0">
          <div
            className={`fixed right-8 bottom-8 flex items-center justify-center md:hidden w-[55px] h-[55px] rounded-full 
            ${menuMovilOpen ? 'bg-[#F64B29]' : 'bg-[#1B212C]'}`}
          >
            {menuMovilOpen ? (
              <XIcon
                className="fill-white h-9 cursor pointer"
                onClick={toggleMenuMovil}
              />
            ) : (
              <MenuAlt4Icon
                className="fill-white h-9 cursor-pointer"
                onClick={toggleMenuMovil}
              />
            )}
          </div>

          <div className="fixed right-0 bottom-12">
            {menuMovilOpen && (
              <MovilPopup onClose={() => setMenuMovilOpen(false)} />
            )}
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
