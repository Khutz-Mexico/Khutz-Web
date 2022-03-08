import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { LANGUAGE_OPTIONS } from './constants';

export const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(LANGUAGE_OPTIONS[0]);

  const logoPath = '/assets/logo.svg';
  const menuIconPath = '/assets/menu-icon.svg';

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
        <div className="hidden md:flex">
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="font-semibold text-lg select-language text-[#1B212C]"
            >
              {LANGUAGE_OPTIONS.map((_language) => (
                <option key={_language} value={_language}>
                  {_language}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Middle side */}
        <div className="flex-grow flex justify-center items-center h-[14px] cursor-pointer my-auto">
          <img
            alt="khutz-icon"
            src={logoPath}
            className="h-4 md:h-[14px]"
            onClick={handleHome}
          />
        </div>

        {/* Right side */}
        <div className="hidden md:flex">
          <img src={menuIconPath} alt="" className="" onClick={toggleMenu} />
        </div>
      </header>
      <Outlet />
    </>
  );
};
