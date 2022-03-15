import React from 'react';
import { BsBehance, BsGithub, BsInstagram } from 'react-icons/bs';

const Social = () => {
  return (
    <div className="flex flex-col justify-center space-y-5 h-[200px]">
      <a
        href="https://www.instagram.com/khutzmexico/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className="h-7 fill-[#909090] hover:fill-[var(--primaryColor)]" />
      </a>
      <BsBehance className="h-7 fill-[#909090] hover:fill-[var(--primaryColor)]" />
      <BsGithub className="h-7 fill-[#909090] hover:fill-[var(--primaryColor)]" />
    </div>
  );
};

export default Social;
