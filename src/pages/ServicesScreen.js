import Social from 'components/Social';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const ServicesScreen = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="screen-height pl-[234px] pt-[100px]">
        <div>
          <p className="quaternaryColor text-xs font-semibold">
            {t('servicesScreen.subtitle')}
          </p>
          <h1 className="text-[55px] font-semibold">
            {t('servicesScreen.title')}
          </h1>
        </div>
        <Social />
      </div>
    </>
  );
};
