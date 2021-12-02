import * as React from 'react';
const { useState, useEffect } = React;
import { IWindowDimensions } from '../types/utilTypes';

const isBrowser = typeof window !== "undefined"

function getWindowDimensions(): IWindowDimensions {


  if (!isBrowser) return {
    width: 0,
    height: 0,
  };

  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };

}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

/**
 * use this through
 * const { height, width } = useWindowDimensions();
 **/
