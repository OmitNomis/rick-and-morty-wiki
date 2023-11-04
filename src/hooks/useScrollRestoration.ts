import { useEffect } from "react";

export const useScrollRestoration = (key: string) => {
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem(key);
    if (scrollPosition) {
      window.scrollTo(0, Number(scrollPosition));
    }
  }, [key]);

  useEffect(() => {
    return () => {
      sessionStorage.setItem(key, window.scrollY.toString());
    };
  }, [key]);
};
