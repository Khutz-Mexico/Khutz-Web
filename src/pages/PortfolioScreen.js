import { projects } from '../data/database';
import { LargeCard } from '../components/LargeCard';

export const PortfolioScreen = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-[calc(100vh-var(--navbar-height))] w-full overflow-hidden pb-[40px] pt-[20px]">
        {/* cards */}
        <div className="flex overflow-scroll scrollbar-hide">
          <div className="flex space-x-12 first-of-type:ml-[40px]">
            {projects?.map(({ title, service }) => (
              <LargeCard key={title} cardTitle={title} cardService={service} />
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="flex w-full px-8 md:px-[40px]">
          <h2>hola mundo</h2>
        </div>
      </div>
    </>
  );
};
