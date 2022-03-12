import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowNarrowDownIcon } from '@heroicons/react/solid';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <div className="screen-height flex flex-col items-center pt-[120px] md:pt-[120px]">
      <div className="flex flex-col text-3xl md:text-[70px] md:leading-[85px]">
        <p className="font-semibold text-center">
          {t('home.presentation.title.weHelp')}
        </p>
        <p className="font-semibold text-center">
          {t('home.presentation.title.brandsTo')}{' '}
          <span className="secondaryColor">
            {t('home.presentation.title.thrive')}
          </span>
        </p>
        <p className="font-semibold text-center">
          {t('home.presentation.title.inTheDigitalAge')}
        </p>
      </div>
      <Link className="w-60 mt-[70px]" to="/portfolio">
        <Button rightArrow solid>
          {t('home.presentation.ourWork')}
        </Button>
      </Link>
      <div className="absolute flex justify-between items-center bottom-0 md:bottom-10 space-x-[35px] select-none">
        <div className="flex items-center justify-between space-x-10">
          <ArrowNarrowDownIcon className="arrow" />
          <div className="space-x-2">
            <span className="text-[12px] font-light">S</span>
            <span className="text-[12px] font-light">C</span>
            <span className="text-[12px] font-light">R</span>
            <span className="text-[12px] font-light">O</span>
            <span className="text-[12px] font-light">L</span>
            <span className="text-[12px] font-light">L</span>
          </div>
          <ArrowNarrowDownIcon className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
