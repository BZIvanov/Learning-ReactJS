import { useState, useEffect } from 'react';

const Route = ({ path, children }) => {
  // we keep the pathname in a state to trigger rerender of the component, when pathname changes
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  });

  return currentPath === path ? children : null;
};

export default Route;
