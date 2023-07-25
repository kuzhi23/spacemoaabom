'use client';

import { useEffect } from 'react';
import { ContactForm } from '@/components/contactForm/contactForm';
import { ContactPageStyle } from './style';
import { ContactImg } from './contactImg';

export default function ContactPage() {
  useEffect(() => {
    const element = document.getElementById('contactPage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);
  return (
    <ContactPageStyle>
      <div className="itemWraper">
        <div className="textWraper" id="contactPage">
          <div className="titleText">입주문의</div>
          <div className="subDText">스페이스 모아봄 전문 컨설턴트가 입주 상담을 도와드립니다.</div>
        </div>
        <div className="contentWraper">
          <ContactImg />
          <ContactForm />
        </div>
      </div>
    </ContactPageStyle>
  );
}
