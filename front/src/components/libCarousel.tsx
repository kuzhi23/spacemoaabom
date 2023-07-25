'use client';

import Slider from 'react-slick';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LibCarousel = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 9000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // 한 번에 보여지는 슬라이드의 갯수
    slidesToScroll: 1, // 한 번 스크롤할 때마다 넘어가는 슬라이드의 갯수
  };
  return <Slider {...settings}>{children}</Slider>;
};
