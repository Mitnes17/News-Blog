import { useState } from 'react';

export const useFetching = (callback: Function) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return [fetching, isLoading, error] as const;
};
