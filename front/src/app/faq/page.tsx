import faq from '#/assets/web/faq.svg';
import Image from 'next/image';
import { FaqPageStyle } from './style';

export default function FaqPage() {
  return (
    <FaqPageStyle>
      <Image src={faq} alt="faq" className="faqimg" />
      <div className="font24EB description">
        현재 준비중입니다
        <br /> 조금만 기다려주세요
      </div>
    </FaqPageStyle>
  );
}
