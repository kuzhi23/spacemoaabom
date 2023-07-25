'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import contactImg from '#/assets/web/contactImg.svg';
import mContactImg01 from '#/assets/web/mContact.svg';
import mContactImg02 from '#/assets/web/mContact02.svg';

export const ContactImg = () => {
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
      // eslint-disable-next-line no-nested-ternary
      src={windowWidth > 1064 ? contactImg : windowWidth < 650 ? mContactImg02 : mContactImg01}
      alt="contactImg"
      className="contactImg"
    />
  );
};
