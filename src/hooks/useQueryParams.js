import { useSearchParams } from 'react-router-dom';

const useQueryParams = () => {
  const query = Object.fromEntries([...useSearchParams()[0].entries()]);

  return query;
};

export default useQueryParams;
