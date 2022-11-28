import { MutableRefObject, Ref, useEffect, useRef } from 'react';

export const useObserver = (
  ref: Ref<HTMLDivElement>,
  callback: () => void,
  isLoading: boolean,
  canLoad: boolean
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isLoading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    });

    observer.current.observe((ref as MutableRefObject<HTMLDivElement>).current!);
  }, [isLoading]);
};
