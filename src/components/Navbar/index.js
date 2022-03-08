import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import DropDownMenu from '../DropDownMenu';
import { XIcon, MenuAlt4Icon } from '@heroicons/react/solid';
import { MenuPopup } from '../MenuPopup';

export const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logoPath = '/assets/logo.svg';

  const handleHome = () => {
    navigate('/', {
      replace: true,
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-white sticky top-0 z-50 h-[var(--navbar-height)] flex items-center justify-between px-8 md:px-[40px]">
        {/* Left side */}
        <div className="flex w-[200px]">
          <DropDownMenu />
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
      </header>
      <Outlet />
    </>
  );
};
