import { MutableRefObject, useEffect, useRef, useState } from 'react';

export default function useSticky(): [
  MutableRefObject<HTMLElement | undefined>,
  boolean
] {
  const ref = useRef<HTMLElement>();
  const [isSticky, setIsSticky] = useState(false);

  // mount
  useEffect(() => {
    const cachedRef = ref.current;
    if (cachedRef) {
      const observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        {
          threshold: [1]
          // rootMargin: '-1px 0px 0px 0px',  // alternativly, use this and set `top:0` in the CSS
        }
      );

      observer.observe(cachedRef);

      // unmount
      return function () {
        observer.unobserve(cachedRef);
      };
    }
  }, [ref.current]);

  return [ref, isSticky];
}
