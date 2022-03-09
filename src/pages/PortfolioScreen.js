import { projects } from '../data/database';
import { LargeCard } from '../components/LargeCard';

export const PortfolioScreen = () => {
  return (
    <div className="flex overflow-scroll scrollbar-hide">
      <div className="flex space-x-5 bg-red-100">
        {projects?.map(({ title, service }) => (
          <LargeCard key={title} cardTitle={title} cardService={service} />
        ))}
      </div>
    </div>
  );
};
