import React from 'react';
import { useTranslation } from 'react-i18next';
import Social from 'components/Social';
import { services } from 'data/database';
import ServiceCard from 'components/ServiceCard';

export const ServicesScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="filled2">
      <div className="screen-height pl-[100px] pt-[100px] pr-[139px]">
        <div className="pl-[134px]">
          <p className="quaternaryColor text-xs font-semibold">
            {t('servicesScreen.subtitle')}
          </p>
          <h1 className="text-[55px] font-semibold">
            {t('servicesScreen.title')}
          </h1>
        </div>
        <div className="grid grid-rows-2 grid-cols-3 gap-x-[42px] gap-y-[50px] mt-[104px]">
          {services.map((service, i) => (
            <ServiceCard
              title={t(`servicesScreen.services.${i}.title`)}
              text={t(`servicesScreen.services.${i}.text`)}
              key={i}
            />
          ))}
        </div>
        <Social />
      </div>
    </div>
  );
};
