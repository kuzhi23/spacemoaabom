import Image from 'next/image';
import firtstDscription from '#/assets/web/firtstDscription.svg';
import mFirtstDscription from '#/assets/web/mFirtstDscription.svg';
import { FirstDscriptionWraaper } from './style';

export const MainFirstDscription = () => (
  <FirstDscriptionWraaper>
    <div className="textWrapper">
      <div className="titleText">
        최신 리모델링 빌딩 <br />
        3면 채광, 개별 냉난방,
        <br />
        바닥난방, 주차장 완비
      </div>
      <div className="dscriptionText">
        최신 리모델링된 건물에 위치해 있으며 3면 채광으로 언제나 밝은 분위기와 쾌적한 조망을 제공합니다. 또한 호실 개별
        냉난방으로 나만의 온도에서 업무를 볼 수 있으며 겨울에는 바닥난방 제공으로 건조하지 않고 따 뜻한 실내 환경을
        보장합니다. 건물 내 주차장을 완비하여 자차로 출퇴근도 용이합니다.
      </div>
    </div>
    <Image src={firtstDscription} alt="firtstDscription" className="firstImg" />
    <Image src={mFirtstDscription} alt="firtstDscription" className="firstImgDes" />
  </FirstDscriptionWraaper>
);
