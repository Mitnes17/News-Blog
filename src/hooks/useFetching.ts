import { useCallback, useState } from 'react';

export const useFetching = (callback: Function) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = useCallback(async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [callback]);

  return [fetching, isLoading, error] as const;
};
