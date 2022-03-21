import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { projects } from 'data/database';
import { MiddleCard } from 'components/MiddleCard';
import Button from 'components/Button';
import { getRandomNumber } from './utils';

const RecentWork = () => {
  const { t } = useTranslation();
  const randomIndex1 = getRandomNumber(0, projects.length - 1);
  const randomIndex2 = getRandomNumber(0, projects.length - 1, randomIndex1);
  const filteredProjects = [projects[randomIndex1], projects[randomIndex2]];

  return (
    <div className="pt-12 md:pt-0 w-full md:screen-height flex flex-col justify-center items-center overflow-hidden">
      {/* title */}
      <p className="text-[32px] font-bold">{t('home.recentWork.title')}</p>
      {/* cards */}
      <div className="justify-center flex flex-col md:flex-row md:overflow-scroll scrollbar-hide w-full">
        <div className="flex flex-col md:flex-row md:w-full items-center md:justify-center pt-12 md:pt-[80px] space-y-10 md:space-y-0 md:space-x-14 first-of-type:pl-6 last-of-type:pr-6">
          {filteredProjects?.map(
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
