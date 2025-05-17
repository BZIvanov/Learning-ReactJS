import {
  useState,
  useLayoutEffect,
  useCallback,
  type RefCallback,
} from "react";
import debounce from "lodash/debounce"; // 4.17.21

interface Size {
  width: number;
  height: number;
}

export const useContainerSize = (
  waitMs: number = 500
): [Size, RefCallback<HTMLElement>] => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  const ref = useCallback<RefCallback<HTMLElement>>((node) => {
    if (node !== null) {
      setElement(node);
      // set sizes initially
      const { width, height } = node.getBoundingClientRect();
      setSize({ width, height });
    }
  }, []);

  useLayoutEffect(() => {
    if (!element) return;

    const handleResize = debounce((entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    }, waitMs);

    const ro = new ResizeObserver(handleResize);

    ro.observe(element);

    return () => {
      ro.disconnect();
    };
  }, [element, waitMs]);

  return [size, ref];
};
