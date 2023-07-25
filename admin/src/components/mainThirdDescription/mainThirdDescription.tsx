import Image from 'next/image';
import multiFirst from '#/assets/web/multiFirst.svg';
import multiSecond from '#/assets/web/multiSecond.svg';
import multiThird from '#/assets/web/multiThird.svg';
import multiFourth from '#/assets/web/multiFourth.svg';
import multiFifth from '#/assets/web/multiFifth.svg';
import { MainThirdDescriptionWraper } from './style';
import { MultiCarousel } from './multiCarousel';

export const MainThirdDescription = () => (
  <>
    <MainThirdDescriptionWraper>
      <div className="thirdTextWraper">
        <div className="thirdTitleText">
          합리적 이용료,
          <br /> 차별화된 서비스!
        </div>
        <div className="thirdDescription">
          사장님은 오전에, 직원은 오후에 이용하는데 2인실을 대여해야 할까? 스페이스 모아봄에서는 적은 비용으로 추가
          인원을 구성할 수 있도록 합리적인 이용료와 넓은 개인 공간 및 라운지를 제공해 드립니다.
        </div>
      </div>
      <div className="carouselWraper">
        <MultiCarousel>
          <div className="carouselImgSize">
            <Image src={multiFirst} alt="multiFirst" />
          </div>
          <div className="carouselImgSize">
            <Image src={multiFifth} alt="multiFirst" />
          </div>
          <div className="carouselImgSize">
            <Image src={multiFourth} alt="multiFirst" />
          </div>
          <div className="carouselImgSize">
            <Image src={multiThird} alt="multiFirst" />
          </div>
          <div className="carouselImgSize">
            <Image src={multiSecond} alt="multiFirst" />
          </div>
        </MultiCarousel>
      </div>
    </MainThirdDescriptionWraper>
  </>
);
