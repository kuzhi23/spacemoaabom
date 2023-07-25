'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Banner from '#/assets/web/AmenityBanner.svg';
import mBanner from '#/assets/web/mAmenityBanner.svg';

export const AmenityBanner = () => {
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
      src={windowWidth > 1064 ? Banner : mBanner}
      alt="AmenityBanner"
      style={{
        width: '100vw',
        height: '545px',
        objectFit: 'cover',
      }}
    />
  );
};
