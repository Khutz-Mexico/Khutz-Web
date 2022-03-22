import { projects } from 'data/database';
import { LargeCard } from 'components/LargeCard';
import { BsInstagram, BsGithub, BsDribbble } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export const PortfolioScreen = () => {
  return (
    <>
      <div className="relative flex flex-col justify-between h-[calc(100vh-var(--movil-navbar-height))] w-full overflow-hidden">
        {/* cards */}
        <div className="flex overflow-scroll scrollbar-hide h-full pt-5 md:pt-6">
          <div className="flex space-x-14 first-of-type:ml-8 last-of-type:mr-8 md:first-of-type:ml-[40px] md:last-of-type:mr-[40px]">
            {projects?.map(
              ({ title, subtitle, textColor, backgroundColor, img, query }) => (
                <LargeCard
                  key={title}
                  projectIndex={query}
                  cardTitle={title}
                  cardSubtitle={subtitle}
                  cardTextColor={textColor}
                  backgroundColor={backgroundColor}
                  img={img}
                  query={query}
                />
              ),
            )}
          </div>
        </div>
        {/* Footer */}
        <div className="hidden md:flex absolute bottom-[40px] left-8 md:left-[40px] space-x-6">
          <NavLink to="/">
            <BsInstagram className="h-7" />
          </NavLink>
          <NavLink to="#">
            <BsGithub className="h-7" />
          </NavLink>
          <NavLink to="#">
            <BsDribbble className="h-7" />
          </NavLink>
        </div>
      </div>
    </>
  );
};
