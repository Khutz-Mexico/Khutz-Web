import { projects } from '../data/database';
import { LargeCard } from '../components/LargeCard';

export const PortfolioScreen = () => {
  return (
    <>
      <div className="relative flex flex-col justify-between h-[calc(100vh-var(--navbar-height))] w-full overflow-hidden">
        {/* cards */}
        <div className="flex overflow-scroll scrollbar-hide h-full pt-5 md:pt-[30px]">
          <div className="flex space-x-14 first-of-type:ml-8 md:first-of-type:ml-[40px] md:last-of-type:mr-[40px]">
            {projects?.map(
              ({ title, service, titleColor, backgroundColor }) => (
                <LargeCard
                  key={title}
                  cardTitle={title}
                  cardService={service}
                  titleColor={titleColor}
                  backgroundColor={backgroundColor}
                />
              ),
            )}
          </div>
        </div>
        {/* Footer */}
        <div className="absolute bg-blue-400 bottom-[40px] left-8 md:left-[40px]">
          <h2>Socials section</h2>
        </div>
      </div>
    </>
  );
};
