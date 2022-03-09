import { useTranslation } from 'react-i18next';
import Button from '../../components/Button';

const Body = () => {
  const { t } = useTranslation();

  return (
    <div className="screen-height flex justify-center items-center space-x-[133px] w-full mt-[174px]">
      <div className="flex flex-col items-stretch space-y-[36px]">
        <div>
          <p className="text-[32px] font-bold">{t('home.body.howCanWe')}</p>
          <p className="text-[32px] font-bold">{t('home.body.helpYou')}</p>
        </div>
        <div>
          <p>{t('home.body.paragraph1.line1')}</p>
          <p>{t('home.body.paragraph1.line2')}</p>
          <p>{t('home.body.paragraph1.line3')}</p>
        </div>
        <div>
          <p>{t('home.body.paragraph2.line1')}</p>
          <p>{t('home.body.paragraph2.line2')}</p>
          <p>{t('home.body.paragraph2.line3')}</p>
          <p>{t('home.body.paragraph2.line4')}</p>
          <p>{t('home.body.paragraph2.line5')}</p>
        </div>
        <div className="w-[100px]">
          <Button rightArrow>
            <div className="font-semibold">{t('home.body.services')}</div>
          </Button>
        </div>
      </div>
      <div className="flex justify-between space-x-[45px]">
        <div className="flex flex-col">
          <p className="secondaryColor text-[13px] font-bold mb-1">
            {t('home.body.servicesSection.design.title')}
          </p>
          <div className="montserrat-font flex flex-col space-y-2">
            <p className="primaryColor text-sm font-semibold">
              {t('home.body.servicesSection.design.uxUiDesign')}
            </p>
            <p className="primaryColor text-sm font-semibold">
              {t('home.body.servicesSection.design.prototyping')}
            </p>
            <p className="primaryColor text-sm font-semibold">
              {t('home.body.servicesSection.design.branding')}
            </p>
            <p className="primaryColor text-sm font-semibold">
              {t('home.body.servicesSection.design.illustration')}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="secondaryColor text-[13px] font-bold mb-1">
            {t('home.body.servicesSection.development.title')}
          </p>
          <div className="montserrat-font flex flex-col space-y-2">
            <p className="primaryColor text-sm font-semibold">
              {t('home.body.servicesSection.development.webDevelopment')}
            </p>
            <p className="primaryColor text-sm font-semibold">
              {t('home.body.servicesSection.development.apps')}
            </p>
            <p className="primaryColor text-sm font-semibold">
              {t('home.body.servicesSection.development.crmAndErp')}
            </p>
            <p className="primaryColor text-sm font-semibold">
              {t('home.body.servicesSection.development.cms')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
