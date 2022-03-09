import { useTranslation } from 'react-i18next';

const RecentWork = () => {
  const { t } = useTranslation();

  return (
    <div className="screen-height flex flex-col items-center">
      <p className="text-[32px] font-bold">{t('home.recentWork.title')}</p>
      <div className="flex justify-between space-x-12 mt-[80px]">
        <a href="https://calidomx.com" target="_blank" rel="noreferrer">
          <img
            className="duration-300 hover:scale-110 cursor-pointer select-none"
            draggable={false}
            src="/assets/recentWork/calido.png"
          />
        </a>
        <a href="https://onlyhomestulum.com" target="_blank" rel="noreferrer">
          <img
            className="duration-300 hover:scale-110 cursor-pointer select-none"
            draggable={false}
            src="/assets/recentWork/only-homes.png"
          />
        </a>
      </div>
    </div>
  );
};

export default RecentWork;
