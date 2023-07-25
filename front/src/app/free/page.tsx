import Image from 'next/image';

import { LibCarousel } from '@/components/libCarousel';
import free1_1 from '#/assets/web/free1_1.svg';
import free1_2 from '#/assets/web/free1_2.svg';
import { FreePageStyle } from './style';
import { FreeBanner } from './freeBanner';

export default function FreePage() {
  return (
    <FreePageStyle>
      <FreeBanner />
      <div className="free-page-wrapper">
        <div className="free-card">
          <div className="free-card-title">자유석</div>
          <div className="free-card-descript ">
            공유사무실 비용을 절약하시거나
            <br />
            오픈 공간을 선호하시는 입주사분들을 위한 선택
          </div>
          <div className="free-card-carousel">
            <LibCarousel>
              <Image src={free1_1} alt="free1_1" />
              <Image src={free1_2} alt="free1_2" />
            </LibCarousel>
          </div>
          <div className="free-card-option">
            <div className="free-card-option-options">
              <div className="option-title">나만의 업무 공간</div>
              <div className="option-descript">자유석 전용 창문조망 좌석</div>
            </div>
            <div className="free-card-option-options">
              <div className="option-title">라커 무상대여</div>
              <div className="option-descript">자유석 입주사를 위한 개별 라커 무상대여</div>
            </div>
            <div className="free-card-option-options">
              <div className="option-title">모든 서비스 이용가능</div>
              <div className="option-descript">부대시설과 서비스를 동일하게 사용가능</div>
            </div>
          </div>
        </div>
      </div>
    </FreePageStyle>
  );
}
