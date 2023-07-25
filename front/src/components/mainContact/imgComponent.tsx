'use client';

import background from '#/assets/web/contact.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const ImgComponent = () => {
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
    <>
      {windowWidth > 650 ? (
        <Image src={background} alt="backgroundImg" className="backImg" />
      ) : (
        <div className="back" />
      )}
    </>
  );
};
