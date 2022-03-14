import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from 'components/Button';

const Body = () => {
  const { t } = useTranslation();

  return (
    // Main container
    <div className="px-6 md:px-[240px] py-14 md:py-[120px] space-y-10 md:space-y-0 md:screen-height flex flex-col md:flex-row md:justify-center md:items-start md:space-x-[133px] w-full">
      {/* left */}
      <div className="flex flex-col space-y-[36px]">
        <div className="text-[32px] font-bold">
          <p>{t('home.body.howCanWe')}</p>
          <p>{t('home.body.helpYou')}</p>
        </div>
        <div className="text-lg font-light">
          <p>{t('home.body.paragraph1')}</p>
        </div>
        <div className="text-lg font-light">
          <p>{t('home.body.paragraph2')}</p>
        </div>
        <div className="w-[200px]">
          <Button rightArrow left>
            <NavLink to="/services" className="font-semibold">
              {t('home.body.services')}
            </NavLink>
          </Button>
        </div>
      </div>

      {/* Right */}
      <div className="md:flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-[45px] md:pt-28">
        <div className="flex flex-col">
          <p className="secondaryColor text-[16px] md:text-[13px] font-bold mb-1">
            {t('home.body.servicesSection.design.title')}
          </p>
          <div className="montserrat-font flex flex-col space-y-2 primaryColor text-lg md:text-sm font-semibold">
            <p>{t('home.body.servicesSection.design.uxUiDesign')}</p>
            <p>{t('home.body.servicesSection.design.prototyping')}</p>
            <p>{t('home.body.servicesSection.design.branding')}</p>
            <p>{t('home.body.servicesSection.design.illustration')}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="secondaryColor text-[16px] md:text-[13px] font-bold mb-1">
            {t('home.body.servicesSection.development.title')}
          </p>
          <div className="montserrat-font flex flex-col space-y-2 primaryColor text-lg md:text-sm font-semibold">
            <p>{t('home.body.servicesSection.development.webDevelopment')}</p>
            <p>{t('home.body.servicesSection.development.apps')}</p>
            <p>{t('home.body.servicesSection.development.crmAndErp')}</p>
            <p>{t('home.body.servicesSection.development.cms')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
