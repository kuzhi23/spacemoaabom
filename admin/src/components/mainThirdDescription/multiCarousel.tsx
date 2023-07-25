'use client';

import Slider from 'react-slick';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MultiCarousel = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3.8, // 한 번에 보여지는 슬라이드의 갯수
    slidesToScroll: 1, // 한 번 스크롤할 때마다 넘어가는 슬라이드의 갯수
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 4.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1801,
        settings: {
          slidesToShow: 3.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1701,
        settings: {
          slidesToShow: 3.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1501,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1301,
        settings: {
          slidesToShow: 2.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1064,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 656,
        settings: {
          slidesToShow: 1.15,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
};
