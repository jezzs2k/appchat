import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerHeight: height } = window;
  return { height };
}

export default function useWindowDimension() {
  const [windowDimension, setWindowDimension] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimension(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimension;
}
