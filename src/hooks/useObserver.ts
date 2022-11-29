import { MutableRefObject, useEffect, useRef } from 'react';

export const useObserver = (
  ref: MutableRefObject<HTMLDivElement | null>,
  callback: () => void,
  isLoading: boolean,
  canLoad: boolean
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!isLoading) {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && canLoad) {
          callback();
        }
      });

      observer.current.observe(ref.current!);
    }

    return () => observer.current?.disconnect();
  }, [isLoading]);
};
