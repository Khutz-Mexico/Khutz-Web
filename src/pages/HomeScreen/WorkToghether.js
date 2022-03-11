import { useTranslation } from 'react-i18next';
import Button from '../../components/Button';

const WorkToghether = () => {
  const { t } = useTranslation();

  return (
    <div className="screen-height flex flex-col justify-center items-center">
      <p className="tertiaryColor text-sm font-semibold">
        {t('home.recentWork.likeOurWork')}
      </p>
      <div>
        <span className="text-[36px] font-bold">
          {t('home.recentWork.lets')}{' '}
        </span>
        <span className="secondaryColor text-[36px] font-bold">
          {t('home.recentWork.work')}{' '}
        </span>
        <span className="text-[36px] font-bold">
          {t('home.recentWork.toghether')}
        </span>
      </div>
      <div className="mt-[47px]">
        <Button outlined rightArrow>
          {t('home.recentWork.contact')}
        </Button>
      </div>
    </div>
  );
};

export default WorkToghether;
