// import Image from 'next/image';
// import background from '#/assets/web/contact.svg';
import { MainContactWraper } from './style';
import { ContactForm } from '../contactForm/contactForm';
import { ImgComponent } from './imgComponent';

export const MainContact = () => (
  <MainContactWraper>
    <ImgComponent />
    <div className="itemWraper">
      <div className="textWraper">
        <div className="contactTitleText">
          스페이스 모아봄
          <br />
          입주 문의
        </div>
        <div className="contacDescription">해당 정보를 남겨주시면, 입주 문의를 도와드리겠습니다.</div>
      </div>
      <ContactForm />
    </div>
  </MainContactWraper>
);
