import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowNarrowDownIcon } from '@heroicons/react/solid';
import Button from '../components/Button';

export const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mt-14 md:mt-[145px]">
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
      <div className="w-60 mt-[70px]">
        <Button rightArrow solid>
          {t('home.presentation.ourWork')}
        </Button>
      </div>
      <div className="absolute flex justify-between items-center bottom-10 space-x-[35px] select-none">
        <ArrowNarrowDownIcon className="w-[19px]" />
        <span>SCROLL</span>
        <ArrowNarrowDownIcon className="w-[19px]" />
      </div>
    </div>
  );
};
