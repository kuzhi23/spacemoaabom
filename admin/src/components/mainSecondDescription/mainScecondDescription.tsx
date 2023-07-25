import Image from 'next/image';
import secondDescription from '#/assets/web/secondDescription.svg';
import mSecondDescription from '#/assets/web/mSecondDescription.svg';
import { MainSecondDescriptionWraper } from './style';

export const MainScecondDescription = () => (
  <MainSecondDescriptionWraper>
    <div className="secondtextWraaper">
      <div className="secondTitle">
        강남 송파의
        <br /> 지리적 이점을 그대로! 그리고 더블 역세권!
      </div>
      <div className="secondDescription">
        5호선 방이역 도보 3분 거리 & 3,5호선 환승역인 오금역 도보 7분 거리에 위치! 스페이스 모아봄은 강남, 송파,
        강동에서 비즈니스를 준비하는 분들에게 최적의 장소입니다.
      </div>
    </div>
    <Image src={secondDescription} alt="secondDescription" className="secondImg" />
    <Image src={mSecondDescription} alt="secondDescription" className="mSecondImg" />
  </MainSecondDescriptionWraper>
);
