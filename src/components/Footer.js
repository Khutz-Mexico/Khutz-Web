import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="px-8 md:px-[40px] w-full h-[80px]">
      <div className="w-full h-full flex justify-start items-center font-light">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
