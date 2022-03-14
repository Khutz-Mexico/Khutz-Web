import React from 'react';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="px-8 md:px-[40px] w-full h-[100px]">
      <div className="w-full h-full flex justify-between items-center font-light">
        <span>© 2022 Khutz México - All rights reserved</span>
        {/* social icons */}
        <div className="hidden md:block">
          <a
            href="https://www.instagram.com/khutzmexico/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="h-7 fill-[#909090] hover:fill-[var(--primaryColor)]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
