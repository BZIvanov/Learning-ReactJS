import { useState, useCallback, useLayoutEffect } from 'react';

const useElementRect = () => {
  const [element, setElement] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const ref = useCallback((node) => {
    if (node !== null) {
      setElement(node);
      // set sizes initially
      setWidth(node.getBoundingClientRect().width);
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  // set sizes on resize
  useLayoutEffect(() => {
    if (element) {
      const measure = () => {
        setWidth(element.getBoundingClientRect().width);
        setHeight(element.getBoundingClientRect().height);
      };

      window.addEventListener('resize', measure);

      return () => {
        window.removeEventListener('resize', measure);
      };
    }
  }, [element]);

  return [{ width, height }, ref];
};

export default useElementRect;
