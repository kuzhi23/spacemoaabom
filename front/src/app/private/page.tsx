'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import PrivateBanner from '#/assets/web/PrivateBanner.svg';
import mPrivateBanner from '#/assets/web/mPrivateBanner.svg';
import desk from '#/assets/icons/desk.svg';
import chair from '#/assets/icons/chair.svg';
import drawer from '#/assets/icons/drawer.svg';
import mate from '#/assets/icons/mate.svg';
import bookshelf from '#/assets/icons/bookshelf.svg';
import wifi from '#/assets/icons/wifi.svg';
import pegboard from '#/assets/icons/pegboard.svg';
import doorlock from '#/assets/icons/doorlock.svg';
import airConditioner from '#/assets/icons/air-conditioner.svg';
import { LibCarousel } from '@/components/libCarousel';
import { useSearchParams } from 'next/navigation';
import oneRoom1_1 from '#/assets/web/oneRoom1_1.svg';
import oneRoom1_2 from '#/assets/web/oneRoom1_2.svg';
import twoRoom1_1 from '#/assets/web/twoRoom1_1.svg';
import twoRoom1_2 from '#/assets/web/twoRoom1_2.svg';
import moreRoom1_1 from '#/assets/web/moreRoom1_2.svg';
import moreRoom1_2 from '#/assets/web/moreRoom1_1.svg';

import { PrivatePageStyle } from './style';

interface OfficeType {
  [key: string]: { title: string; descript: string; fimg: string; simg: string };
}

export default function PrivatePage() {
  const params = useSearchParams();
  const getParamsType = params.get('type') as string;
  const officeType: OfficeType = {
    '1': {
      title: '1인실',
      descript: '나만의 업무를 볼 수 있는\n1인 독립 사무 공간',
      fimg: oneRoom1_1,
      simg: oneRoom1_2,
    },
    '2': {
      title: '2인실',
      descript: '소규모 회사가 쓸 수 있는\n맞춤형 사무 공간',
      fimg: twoRoom1_1,
      simg: twoRoom1_2,
    },
    more: { title: '다인실', descript: '일하기 좋은 맞춤형\n독립 사무 공간', fimg: moreRoom1_1, simg: moreRoom1_2 },
  };

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PrivatePageStyle>
      <Image
        src={windowWidth > 1064 ? PrivateBanner : mPrivateBanner}
        alt="AmenityBanner"
        style={{
          width: '100vw',
          height: '545px',
          objectFit: 'cover',
        }}
      />
      <div className="private-page-wrapper">
        <div className="private-card">
          <div className="private-card-title">{officeType?.[getParamsType]?.title ?? officeType['1'].title}</div>
          <div className="private-card-carousel">
            <LibCarousel>
              <Image src={officeType?.[getParamsType]?.fimg ?? officeType['1'].fimg} alt="oneRoom1_1" />
              <Image src={officeType?.[getParamsType]?.simg ?? officeType['1'].simg} alt="oneRoom1_2" />
            </LibCarousel>
          </div>
          <div className="private-card-option">
            <div className="private-card-option-left">
              <div className="title">프라이빗오피스</div>
              <div className="descript">{officeType?.[getParamsType]?.descript ?? officeType['1'].descript}</div>
            </div>
            <div className="private-card-option-right">
              <div className="private-card-option-right-basic">
                <div className="private-card-option-right-basic-title">기본 제공 사항</div>
                <div className="private-card-option-right-basic-content">
                  <div className="private-card-option-right-basic-content-left">
                    <div>
                      <Image src={desk} alt="desk" width={32} height={32} />
                      Desker 책상 (1400X700)
                    </div>
                    <div>
                      <Image src={chair} alt="desk" width={32} height={32} />
                      Sidiz 의자
                    </div>
                    <div>
                      <Image src={airConditioner} alt="desk" width={32} height={32} />
                      24시간 냉난방
                    </div>
                  </div>
                  <div className="private-card-option-right-basic-content-right">
                    <div>
                      <Image src={drawer} alt="desk" width={32} height={32} />
                      서랍장
                    </div>
                    <div>
                      <Image src={wifi} alt="desk" width={32} height={32} />
                      유무선 인터넷
                    </div>
                    <div>
                      <Image src={doorlock} alt="desk" width={32} height={32} />
                      개별 디지털 도어락
                    </div>
                  </div>
                </div>
              </div>
              <div className="private-card-option-right-option">
                <div className="private-card-option-right-option-title">
                  <div className="title">옵션 제공 사항</div>
                  <div className="comment">*옵션 선택시 비용이 추가될 수 있습니다.</div>
                </div>
                <div className="private-card-option-right-option-content">
                  <div className="private-card-option-right-option-content-left">
                    <div>
                      <Image src={mate} alt="desk" width={32} height={32} />
                      메이트 최대 {getParamsType === '1' ? 1 : 2}인 추가 가능
                    </div>
                    <div>
                      <Image src={pegboard} alt="desk" width={32} height={32} />
                      타공판
                    </div>
                  </div>
                  <div className="private-card-option-right-option-content-right">
                    <div>
                      <Image src={bookshelf} alt="desk" width={32} height={32} />
                      책장&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrivatePageStyle>
  );
}
