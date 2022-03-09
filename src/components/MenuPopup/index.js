import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useClickOutside from '../../hooks/useClickOutside';
import { LINKS } from './constants';

export const MenuPopup = ({ onClose }) => {
  const { t } = useTranslation();
  const menuRef = useRef();

  useClickOutside(menuRef, onClose);

  return (
    <div
      className="w-[520px] h-screen fixed right-0 top-0 bg-[#1B212C] px-[100px] py-[110px]"
      ref={menuRef}
    >
      <span className="text-xs text-white opacity-40 font-light">
        NAVIGATION
      </span>
      <hr className="text-white opacity-40 mt-6" />
      <ul className="py-10">
        {LINKS.map((link) => {
          const isSelected = link.path === location.pathname;
          console.log('isSelected', link.path, location.pathname, isSelected);
          return (
            <li
              key={link.path}
              className={`menu-item hover:text-[#AAAAAA] ${
                isSelected ? 'menu-item-selected' : ''
              }`}
            >
              <NavLink onClick={onClose} to={link.path}>
                {t(link.translationKey)}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <span className="text-xs text-white opacity-40 font-light">SOCIALS</span>
      <ul className="flex space-x-7">
        <a
          href="https://www.instagram.com/khutzmexico"
          target="_blank"
          rel="noreferrer"
        >
          <li className="text-white">Instagram</li>
        </a>
        {/* TODO add LinkedIn link */}
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <li className="text-white">LinkedIn</li>
        </a>
        {/* TODO add Dribbble link */}
        <a href="https://dribbble.com" target="_blank" rel="noreferrer">
          <li className="text-white">Dribbble</li>
        </a>
      </ul>
    </div>
  );
};
