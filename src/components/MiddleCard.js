import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';

export const MiddleCard = ({
  cardTitle,
  cardSubtitle,
  color,
  image,
  backgroundColor,
  query,
}) => {
  return (
    <Link to={`/projects/${query}`}>
      <div
        className={`overflow-hidden relative w-[520px] h-[400px] ${backgroundColor} flex justify-between items-center text-white px-12 py-[55px]`}
      >
        <div className="flex flex-col h-full">
          {/* header */}
          <div>
            <span className="uppercase tracking-[4px] text-xs">
              Caso de estudio
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
          <div className="flex items-center space-x-2">
            <span>Ver más</span>
            <ChevronRightIcon className="h-6" />
          </div>
        </div>

        <div className="flex absolute -right-14 items-center justify-center">
          <div className="w-72 h-72 flex items-center justify-center">
            <img className="w-full" src={image} alt={cardTitle} />
          </div>
        </div>
      </div>
    </Link>
  );
};
