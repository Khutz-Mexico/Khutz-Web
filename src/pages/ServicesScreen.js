import React from 'react';
import { useTranslation } from 'react-i18next';
import Social from 'components/Social';
import ServiceCard from 'components/ServiceCard';
import RecentWork from './HomeScreen/RecentWork';
import WorkToghether from './HomeScreen/WorkToghether';
import Footer from 'components/Footer';

const ServicesList = () => {
  const { t } = useTranslation();
  const services = t('servicesScreen.services', { returnObjects: true });

  return services.map((service, i) => (
    <ServiceCard key={i} title={service.title} text={service.text} />
  ));
};

export const ServicesScreen = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="h-fit filled2 pl-[50px] md:pl-[100px] pt-[100px] pr-[70px] md:pr-[139px] pb-[50px]">
        <div className="pl-0 md:pl-[134px]">
          <p className="quaternaryColor text-xs font-semibold">
            {t('servicesScreen.subtitle')}
          </p>
          <h1 className="text-[55px] font-semibold">
            {t('servicesScreen.title')}
          </h1>
        </div>
        <div className="my-[60px] md:my-[105px]">
          <div className="md:hidden flex flex-col space-y-7 md:space-y-[50px]">
            <ServicesList />
          </div>
          <div className="hidden md:grid grid-rows-6 md:grid-rows-2 grid-cols-1 md:grid-cols-3 max-h-[500px] gap-x-[42px] gap-y-[50px] mt-[104px]">
            <ServicesList />
          </div>
        </div>
      </div>

      <div className="pt-[110px]">
        <RecentWork />
      </div>
      <WorkToghether />
      <Social />
      <Footer />
    </div>
  );
};
