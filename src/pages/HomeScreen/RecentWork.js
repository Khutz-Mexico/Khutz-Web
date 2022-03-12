import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

const RecentWork = () => {
  const { t } = useTranslation();

  return (
    <div className="screen-height flex flex-col items-center">
      <p className="text-[32px] font-bold">{t('home.recentWork.title')}</p>
      <div className="flex justify-between space-x-12 mt-[80px]">
        <a href="https://calidomx.com" target="_blank" rel="noreferrer">
          <img
            className="duration-300 hover:scale-105 cursor-pointer select-none"
            draggable={false}
            src="/assets/recentWork/calido.png"
          />
        </a>
        <a href="https://onlyhomestulum.com" target="_blank" rel="noreferrer">
          <img
            className="duration-300 hover:scale-105 cursor-pointer select-none"
            draggable={false}
            src="/assets/recentWork/only-homes.png"
          />
        </a>
      </div>
      <Link className="w-[178px] mt-[77px]" to="/portfolio">
        <Button rightArrow outlined>
          <div className="font-semibold">{t('home.recentWork.viewAll')}</div>
        </Button>
      </Link>
    </div>
  );
};

export default RecentWork;
