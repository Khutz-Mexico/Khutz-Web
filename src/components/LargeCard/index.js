import { ChevronRightIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const LargeCard = ({
  cardTitle,
  cardSubtitle,
  cardTextColor,
  backgroundColor,
  img,
  query,
}) => {
  const { t } = useTranslation();

  return (
    <Link to={`/projects/${query}`}>
      <div
        className={`flex flex-col w-[350px] h-[calc(85vh-var(--navbar-height))] ${backgroundColor} hover:scale-[102%] md:hover:scale-105 hover:drop-shadow-2xl transform transition duration-300 ease-out px-[45px] py-[40px] cursor-pointer select-none`}
      >
        {/* header */}
        <div>
          <span className="uppercase tracking-[4px] text-xs">
            {t('portfolio.caseStudy')}
          </span>
        </div>
        {/* image */}
        <div className="flex flex-grow items-center justify-center">
          <div className="w-60 h-60 flex items-center justify-center">
            <img className="w-full" src={img} alt={cardTitle} />
          </div>
        </div>
        {/* Title */}
        <div className="flex-grow flex flex-col -space-y-2">
          <h2 className={`text-[34px] font-semibold ${cardTextColor}`}>
            {cardTitle}
          </h2>
          <span className="text-[34px] font-semibold">{cardSubtitle}</span>
        </div>
        {/* footer */}
        <div className="flex items-center space-x-2 justify-end">
          <span>{t('portfolio.seeMore')}</span>
          <ChevronRightIcon className="h-6" />
        </div>
      </div>
    </Link>
  );
};
