import { useTranslation } from 'react-i18next';
import Button from '../../components/Button';

const Body = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-evenly mt-[447px]">
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
          <Button rightArrow>{t('home.body.services')}</Button>
        </div>
      </div>
    </div>
  );
};

export default Body;
