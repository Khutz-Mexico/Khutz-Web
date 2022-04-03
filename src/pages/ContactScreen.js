import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';
import Footer from 'components/Footer';
import { createFormSubmission, getFormFields } from 'services/api/forms';
import { validateFormSubmission } from 'utils/forms';
import { useNavigate } from 'react-router-dom';

const formCode = 'contact';

export const ContactScreen = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [fields, setFields] = useState([]);
  const [data, setData] = useState({});

  const handleChangeValue = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const handleSubmit = () => {
    const error = validateFormSubmission(fields, data, t);
    if (error) {
      return swal('Error', error, 'error');
    }

    createFormSubmission(formCode, data)
      .then(() => {
        swal(
          t('contactScreen.requestReceived.title'),
          t('contactScreen.requestReceived.message'),
          'success',
        );
        navigate('/');
      })
      .catch((e) => {
        if (e?.response?.data?.error?.code === 'invalidFormSubmission') {
          swal(
            t('contactScreen.invalidForm.title'),
            t('contactScreen.invalidForm.message'),
            'warning',
          );
        }
      });
  };

  const translateFields = (_fields) => {
    return _fields.map((field) => ({
      ...field,
      label: t(`formFields.${formCode}.${field.code}`),
    }));
  };

  useEffect(() => {
    getFormFields(formCode).then((response) => {
      setFields(translateFields(response.data));
    });
  }, []);

  useEffect(() => {
    setFields(translateFields(fields));
  }, [t]);

  return (
    <div>
      <div className="px-8 md:px-[180px] py-[110px]">
        {/* Title */}
        <h1 className="text-4xl md:text-[65px] font-semibold whitespace-pre-line leading-tight">
          {t('contactScreen.letsGetStarted')}
        </h1>

        {/* columns */}
        <div className="w-full flex flex-col md:flex-row justify-center items-start space-y-28 md:space-y-0 pt-[130px]">
          {/* left */}
          <div className="w-full md:w-2/3 flex justify-start">
            <form className="w-full" action="">
              <div>
                <hr className="bg-gray-600" />
                <div className="py-[35px]">
                  <h2 className="text-[20px] font-medium text-[--var(primaryColor)]">
                    {t('contactScreen.fieldLabels.name')}
                  </h2>
                  <input
                    type="text"
                    placeholder={t('contactScreen.fieldPlaceholders.name')}
                    onChange={(e) => handleChangeValue('name', e.target.value)}
                    className="text-lg w-full font-light outline-none"
                  />
                </div>
              </div>

              <div>
                <hr className="bg-gray-600" />
                <div className="py-[35px]">
                  <h2 className="text-[20px] font-medium text-[--var(primaryColor)]">
                    {t('contactScreen.fieldLabels.email')}
                  </h2>
                  <input
                    type="email"
                    placeholder="info@khutz.com"
                    onChange={(e) => handleChangeValue('email', e.target.value)}
                    className="text-lg w-full font-light outline-none"
                  />
                </div>
              </div>

              <div>
                <hr className="bg-gray-600" />
                <div className="py-[35px]">
                  <h2 className="text-[20px] font-medium text-[--var(primaryColor)]">
                    {t('contactScreen.fieldLabels.companyName')}
                  </h2>
                  <input
                    type="text"
                    placeholder="Khutz México"
                    onChange={(e) =>
                      handleChangeValue('companyName', e.target.value)
                    }
                    className="text-lg w-full font-light outline-none"
                  />
                </div>
              </div>

              <div>
                <hr className="bg-gray-600" />
                <div className="py-[35px]">
                  <h2 className="text-[20px] font-medium text-[--var(primaryColor)]">
                    {t('contactScreen.fieldLabels.service')}
                  </h2>
                  <input
                    type="text"
                    placeholder="Web design"
                    onChange={(e) =>
                      handleChangeValue('desiredService', e.target.value)
                    }
                    className="text-lg w-full font-light outline-none"
                  />
                </div>
              </div>

              <div>
                <hr className="bg-gray-600" />
                <div className="py-[35px]">
                  <h2 className="text-[20px] font-medium text-[--var(primaryColor)]">
                    {t('contactScreen.fieldLabels.budget')}
                  </h2>
                  <input
                    type="text"
                    placeholder="$1,000 USD"
                    onChange={(e) =>
                      handleChangeValue('budget', e.target.value)
                    }
                    className="text-lg w-full font-light outline-none"
                  />
                </div>
              </div>

              <div>
                <hr className="bg-gray-600" />
                <div className="py-[35px]">
                  <h2 className="text-[20px] font-medium text-[--var(primaryColor)]">
                    {t('contactScreen.fieldLabels.message')}
                  </h2>
                  <input
                    type="text"
                    placeholder={t('contactScreen.fieldPlaceholders.message')}
                    onChange={(e) =>
                      handleChangeValue('message', e.target.value)
                    }
                    className="text-lg w-full font-light outline-none"
                  />
                </div>
                <hr className="bg-gray-600" />
              </div>
            </form>
          </div>
          {/* right */}

          <div className="w-full md:w-1/3 md:pl-[120px]">
            <div className="space-y-12 pb-20 md:pb-72">
              <div className="space-y-2">
                <h3 className="uppercase tracking-[4px] text-xs opacity-60 text-gray-600">
                  {t('contactScreen.contactDetails')}
                </h3>
                <p className="text-[16px] font-medium">info@khutz.com</p>
                <p className="text-[16px] font-medium">+52 222 162 7920</p>
              </div>

              <div className="space-y-2">
                <h3 className="uppercase tracking-[4px] text-xs opacity-60 text-gray-600">
                  {t('contactScreen.businessDetails')}
                </h3>
                <p className="text-[16px] font-medium">CP. 72000</p>
                <p className="text-[16px] font-medium">City: Puebla</p>
                <p className="text-[16px] font-medium">Country: México</p>
              </div>

              <div className="space-y-2">
                <h3 className="uppercase tracking-[4px] text-xs opacity-60 text-gray-600">
                  {t('contactScreen.socialNetworks')}
                </h3>
                <p className="text-[16px] font-medium">Instagram</p>
                <p className="text-[16px] font-medium">Dribbble</p>
                <p className="text-[16px] font-medium">Github</p>
              </div>
            </div>

            <div
              className="bg-gray-900 hover:bg-[#f64b29] duration-300 w-60 h-60 rounded-full flex justify-center items-center cursor-pointer"
              onClick={handleSubmit}
            >
              <span className="text-white">{t('contactScreen.sendIt')}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
