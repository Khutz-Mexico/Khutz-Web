import { useTranslation } from 'react-i18next';
import { AVAILABLE_LANGUAGES } from '../../constants';
import i18n from '../../i18nextConf';

const LanguagePicker = () => {
  const selectedLanguage = i18n.language.replace(/-.*/, '');
  useTranslation(); // Used for language change detection

  const handleChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  // console.log(selectedLanguage, t('test'));

  return (
    <ul className="flex items-center space-x-4 select-none">
      {AVAILABLE_LANGUAGES.map((language) => (
        <li
          key={language}
          className={`text-[16px] ${
            language === selectedLanguage ? '' : 'text-[#AAAAAA]'
          } font-medium cursor-pointer`}
          onClick={() => handleChange(language)}
        >
          {language.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};

export default LanguagePicker;
