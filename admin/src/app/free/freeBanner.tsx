'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import FreeWBanner from '#/assets/web/FreeBanner.svg';
import mFreeBanner from '#/assets/web/m-freeBanner.svg';

export const FreeBanner = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Image
      src={windowWidth > 1064 ? FreeWBanner : mFreeBanner}
      alt="FreeBanner"
      style={{
        width: '100vw',
        height: '545px',
        objectFit: 'cover',
      }}
    />
  );
};
