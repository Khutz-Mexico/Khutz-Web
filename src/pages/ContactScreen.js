import Footer from 'components/Footer';
import React from 'react';

export const ContactScreen = () => {
  return (
    <div>
      <div className="px-[180px] py-[110px]">
        {/* Title */}
        <h1 className="text-[65px] font-semibold whitespace-pre-line leading-tight">
          {'Let’s start a \n project together'}
        </h1>

        {/* columns */}
        <div className="w-full flex justify-center items-start pt-[130px]">
          {/* left */}
          <div className="w-2/3 flex justify-start">
            <form className="w-full" action="">
              <div>
                <hr className="bg-gray-600" />
                <div className="py-[35px]">
                  <h2 className="text-[20px] font-medium text-[--var(primaryColor)]">
                    What´s your name?
                  </h2>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="text-lg w-full font-light"
                  />
                </div>
              </div>

              <div>
                <hr className="bg-gray-600" />
                <div className="py-[35px]">
                  <h2 className="text-[20px] font-medium text-[--var(primaryColor)]">
                    What´s your email?
                  </h2>
                  <input
                    type="email"
                    placeholder="info@khutz.com"
                    className="text-lg w-full font-light"
                  />
                </div>
              </div>

              <div>
                <hr className="bg-gray-600" />
                <div className="py-[35px]">
                  <h2 className="text-[20px] font-medium text-[--var(primaryColor)]">
                    Company Name
                  </h2>
                  <input
                    type="text"
                    placeholder="Khutz México"
                    className="text-lg w-full font-light"
                  />
                </div>
              </div>

              <div>
                <hr className="bg-gray-600" />
                <div className="py-[35px]">
                  <h2 className="text-[20px] font-medium text-[--var(primaryColor)]">
                    What service are you looking for?
                  </h2>
                  <input
                    type="text"
                    placeholder="Web design"
                    className="text-lg w-full font-light"
                  />
                </div>
              </div>

              <div>
                <hr className="bg-gray-600" />
                <div className="py-[35px]">
                  <h2 className="text-[20px] font-medium text-[--var(primaryColor)]">
                    What is your budget?
                  </h2>
                  <input
                    type="text"
                    placeholder="$1,000 USD"
                    className="text-lg w-full font-light"
                  />
                </div>
              </div>

              <div>
                <hr className="bg-gray-600" />
                <div className="py-[35px]">
                  <h2 className="text-[20px] font-medium text-[--var(primaryColor)]">
                    Your message
                  </h2>
                  <input
                    type="text"
                    placeholder="Hello Khutz, can you help me with"
                    className="text-lg w-full font-light"
                  />
                </div>
                <hr className="bg-gray-600" />
              </div>
            </form>
          </div>
          {/* right */}

          <div className="w-1/3 md:pl-[120px]">
            <div className="space-y-12 pb-72">
              <div className="space-y-2">
                <h3 className="uppercase tracking-[4px] text-xs opacity-60 text-gray-600">
                  Contact Details
                </h3>
                <p className="text-[16px] font-medium">info@khutz.com</p>
                <p className="text-[16px] font-medium">+52 222 162 7920</p>
              </div>

              <div className="space-y-2">
                <h3 className="uppercase tracking-[4px] text-xs opacity-60 text-gray-600">
                  Business Details
                </h3>
                <p className="text-[16px] font-medium">CP. 72960</p>
                <p className="text-[16px] font-medium">City: Puebla</p>
                <p className="text-[16px] font-medium">Country: México</p>
              </div>

              <div className="space-y-2">
                <h3 className="uppercase tracking-[4px] text-xs opacity-60 text-gray-600">
                  Social
                </h3>
                <p className="text-[16px] font-medium">Instagram</p>
                <p className="text-[16px] font-medium">Dribbble</p>
                <p className="text-[16px] font-medium">Github</p>
              </div>
            </div>

            <div className="bg-gray-900 hover:bg-[#f64b29] w-60 h-60 rounded-full flex justify-center items-center">
              <span className="text-white">Send it</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
