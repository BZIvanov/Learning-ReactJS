import {
  useState,
  useCallback,
  useLayoutEffect,
  type RefCallback,
} from "react";

interface Rect {
  width: number;
  height: number;
}

const useElementRect = (): [Rect, RefCallback<HTMLElement>] => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [rect, setRect] = useState<Rect>({ width: 0, height: 0 });

  const ref = useCallback<RefCallback<HTMLElement>>((node) => {
    if (node !== null) {
      setElement(node);
      // set sizes initially
      const { width, height } = node.getBoundingClientRect();
      setRect({ width, height });
    }
  }, []);

  // set sizes on resize
  useLayoutEffect(() => {
    if (!element) return;

    const updateRect = () => {
      const { width, height } = element.getBoundingClientRect();
      setRect({ width, height });
    };

    window.addEventListener("resize", updateRect);

    return () => {
      window.removeEventListener("resize", updateRect);
    };
  }, [element]);

  return [rect, ref];
};

export default useElementRect;
