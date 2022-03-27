import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';

export const MiddleCard = ({
  cardTitle,
  cardSubtitle,
  color,
  image,
  backgroundColor,
  query,
}) => {
  const { t } = useTranslation();

  return (
    <Link to={`/projects/${query}`}>
      <div
        className={`overflow-hidden relative w-[320px] h-[calc(80vh-var(--navbar-height))] md:w-[520px] md:h-[400px] ${backgroundColor} flex flex-col md:flex-row justify-between items-center text-white px-[45px] py-[40px] md:px-12 md:py-[55px]`}
      >
        <div className="flex flex-col w-full h-full">
          {/* header */}
          <div>
            <span className="uppercase tracking-[4px] text-xs">
              {t('portfolio.caseStudy')}
            </span>
          </div>
          {/* title */}
          <div className="flex-grow flex flex-col -space-y-2 justify-center">
            <h2 className={`text-[34px] font-semibold ${color}`}>
              {cardTitle}
            </h2>
            <span className="text-[34px] font-semibold">{cardSubtitle}</span>
          </div>
          {/* footer */}
          <div className="hidden md:flex items-center space-x-2">
            <span>{t('portfolio.seeMore')}</span>
            <ChevronRightIcon className="h-6" />
          </div>
        </div>

        <div className="flex md:absolute md:-right-14 items-center justify-center">
          <div className="w-72 h-72 flex items-center justify-center">
            <img className="w-full" src={image} alt={cardTitle} />
          </div>
        </div>
      </div>
    </Link>
  );
};
