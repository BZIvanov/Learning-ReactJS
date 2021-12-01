import { useState, useLayoutEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

const useContainerSize = (waitMs = 500) => {
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

  useLayoutEffect(() => {
    if (element) {
      const ro = new ResizeObserver(
        debounce((entries) => {
          for (const entry of entries) {
            const cr = entry.contentRect;
            setWidth(cr.width);
            setHeight(cr.height);
          }
        }, waitMs)
      );

      ro.observe(element);

      return () => {
        ro.disconnect();
      };
    }
  }, [element, waitMs]);

  return [{ width, height }, ref];
};

export default useContainerSize;
