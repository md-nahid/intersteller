import { useEffect, useState } from 'react';

export default function useWindowsize() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    function screenSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', screenSize);
    return () => {
      window.removeEventListener('resize', screenSize);
    };
  }, []);

  return width;
}
