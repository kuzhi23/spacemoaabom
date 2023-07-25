'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import contactBtn from '#/assets/web/contactBtn.svg';
import { ContactBtnWraper } from './style';

export const ContactBtn = () => {
  const [isShow, setIsShow] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      setIsShow(true);
      if (timerId) {
        clearTimeout(timerId);
      }

      setTimerId(
        setTimeout(() => {
          setIsShow(false);
        }, 2000),
      );
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId, windowWidth]);

  const handleButtonClick = () => {
    const element = document.getElementById('emailContact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <ContactBtnWraper pathname={pathname}>
      {windowWidth > 760 ? (
        <Image
          src={contactBtn}
          alt="contactBtn"
          className="floating"
          onClick={pathname !== '/' ? () => router.push('/contact') : handleButtonClick}
        />
      ) : (
        <div
          className="bottom"
          style={{ transform: `translateY(${isShow ? '0' : '100%'})` }}
          onClick={pathname !== '/' ? () => router.push('/contact') : handleButtonClick}
        >
          문의하기
        </div>
      )}
    </ContactBtnWraper>
  );
};
