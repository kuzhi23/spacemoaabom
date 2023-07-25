import Image from 'next/image';
import fourthDescriptinImg from '#/assets/web/fourthDescriptinImg.svg';
import mFourthDescriptinImg from '#/assets/web/mFourthDescriptinImg.svg';
import { MainFourthDscriptionnWraper } from './style';

export const MainFourthDscription = () => (
  <MainFourthDscriptionnWraper>
    <div className="fourthTextWraper">
      <div className="fourthTitle">
        실질적 창업 인큐베이팅, <br /> 창업준비생도 OK!
      </div>
      <div className="fourthDescription">
        창업은 알아서 해야지라고 방관하지 않습니다. 송파 지역 인력개발, 창업 지원 교육기관과의 연계로 창업에 필요한
        교육/세미나를 개최합니다. 창업에 있어 어려움을 해결해 드리기 위해 세무/관세/법률 서비스를 도와드립니다.
      </div>
    </div>
    <Image src={fourthDescriptinImg} alt="fourthDescriptionImg" className="fourthImg" />
    <Image src={mFourthDescriptinImg} alt="fourthDescriptionImg" className="mfourthImg" />
  </MainFourthDscriptionnWraper>
);
