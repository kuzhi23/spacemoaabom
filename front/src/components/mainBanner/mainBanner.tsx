'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import firstBanner from '#/assets/web/FirstBanner.svg';
import firstMBanner from '#/assets/web/m-mainBanner01.svg';
import SecondBanner from '#/assets/web/SecondBanner.svg';
import SecondMBanner from '#/assets/web/SecondM-Banner.svg';
import SecondMBanner02 from '#/assets/web/SecondM-Banner02.svg';
import ThirdBanner from '#/assets/web/ThirdBanner.svg';
import ThirdMBanner from '#/assets/web/m-mainBanner03.svg';
import { MainBannerStyle } from './style';
import { LibCarousel } from '../libCarousel';

export const MainBanner = () => {
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
    <MainBannerStyle>
      <LibCarousel>
        <Image src={windowWidth > 1064 ? firstBanner : firstMBanner} alt="FirstBanner" />
        <Image
          // eslint-disable-next-line no-nested-ternary
          src={windowWidth > 1064 ? SecondBanner : windowWidth > 500 ? SecondMBanner : SecondMBanner02}
          alt="SecondBanner"
        />
        <Image src={windowWidth > 1064 ? ThirdBanner : ThirdMBanner} alt="ThirdBanner" />
      </LibCarousel>
    </MainBannerStyle>
  );
};
