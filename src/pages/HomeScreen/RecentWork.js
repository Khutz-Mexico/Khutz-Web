import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { projects } from 'data/database';
import { MiddleCard } from 'components/MiddleCard';
import Button from 'components/Button';

const RecentWork = () => {
  const { t } = useTranslation();
  const filterProjects = projects.slice(0, 2);

  return (
    <div className="w-full md:screen-height flex flex-col justify-center items-center overflow-hidden">
      {/* title */}
      <p className="text-[32px] font-bold">{t('home.recentWork.title')}</p>
      {/* cards */}
      <div className="justify-center flex overflow-scroll scrollbar-hide w-full">
        <div className="flex pt-[80px] space-x-14">
          {filterProjects?.map(
            ({ title, subtitle, textColor, img, backgroundColor, query }) => (
              <MiddleCard
                key={query}
                cardTitle={title}
                cardSubtitle={subtitle}
                color={textColor}
                image={img}
                backgroundColor={backgroundColor}
                query={query}
              />
            ),
          )}
        </div>
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
