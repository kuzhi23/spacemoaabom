'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import popupImg from '#/assets/web/popupImg.svg';
import mpopupImg from '#/assets/web/mpopupImg.svg';
import closeBtn from '#/assets/web/closeBtn.svg';
import mcloseBtn from '#/assets/web/mcloseBtn.svg';
import dayCloseBtn from '#/assets/web/dayCloseBtn.svg';
import mdayCloseBtn from '#/assets/web/mdayCloseBtn.svg';

import { PopUpWraper } from './style';

export const PopUp = () => {
  const [showPopup, setShowPopup] = useState(true);
  const HIDE_FOR_TODAY = localStorage.getItem('hideForToday');

  useEffect(() => {
    if (HIDE_FOR_TODAY && new Date().toISOString().split('T')[0] === HIDE_FOR_TODAY) {
      setShowPopup(false);
    }
  }, [HIDE_FOR_TODAY]);

  const closePopup = () => {
    setShowPopup(false);
  };

  const hidePopupForToday = () => {
    localStorage.setItem('hideForToday', new Date().toISOString().split('T')[0]);
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <PopUpWraper>
          <Image src={popupImg} alt="pop" className="popup" />
          <Image src={mpopupImg} alt="pop" className="mPopUp" />
          <div className="buttonGroup">
            <Image src={dayCloseBtn} alt="pop" onClick={hidePopupForToday} className="dayBtn" />
            <Image src={mdayCloseBtn} alt="pop" onClick={hidePopupForToday} className="mDayBtn" />
            <Image src={closeBtn} alt="pop" onClick={closePopup} className="closeBtn" />
            <Image src={mcloseBtn} alt="pop" onClick={closePopup} className="mCloseBtn" />
          </div>
        </PopUpWraper>
      )}
    </>
  );
};
