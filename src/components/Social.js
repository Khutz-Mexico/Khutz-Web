import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const Social = () => {
  return (
    <div className="fixed left-6 md:left-[40px] top-[calc(50%-100px)]">
      <div className="hidden md:flex flex-col justify-center space-y-5 h-[200px]">
        <a
          href="https://www.instagram.com/khutzmexico/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="h-7 fill-[#909090] hover:fill-[var(--primaryColor)]" />
        </a>
        <a href="https://github.com/Khutz" target="_blank" rel="noreferrer">
          <BsGithub className="h-7 fill-[#909090] hover:fill-[var(--primaryColor)]" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaLinkedinIn className="h-7 fill-[#909090] hover:fill-[var(--primaryColor)]" />
        </a>
      </div>
    </div>
  );
};

export default Social;
