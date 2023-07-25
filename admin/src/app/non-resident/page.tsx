import Image from 'next/image';
import NoResidentBanner from '#/assets/web/NoResidentBanner.svg';
import NoResidentBannerMobile from '#/assets/web/NoResidentBannerMobile.svg';
import descript1_1 from '#/assets/web/descript1_1.svg';
import descript1_2 from '#/assets/web/descript1_2.svg';
import descript1_3 from '#/assets/web/descript1_3.svg';
import descript2_1 from '#/assets/web/descript2_1.svg';
import descript2_2 from '#/assets/web/descript2_2.svg';
import descript2_3 from '#/assets/web/descript2_3.svg';
import descript2_4 from '#/assets/web/descript2_4.svg';
import { NonResidentPageStyle } from './style';

export default function NonResidentPage() {
  return (
    <NonResidentPageStyle>
      <Image
        className="no-resident-banner"
        src={NoResidentBanner}
        alt="NoResidentBanner"
        style={{ width: '100%', objectFit: 'cover' }}
      />
      <Image
        className="no-resident-banner-mobile"
        src={NoResidentBannerMobile}
        alt="NoResidentBannerMobile"
        style={{ width: '100%', objectFit: 'cover' }}
      />
      <div className="no-resident-page-wrapper">
        <div className="descript1">어떤 사업자 고객사분들이 이용하면 좋을까요?</div>
        <div className="descript1-explain">
          <div className="descript1-explain-list">
            <Image
              className="descript1-explain-list-image"
              src={descript1_1}
              alt="descript1_1"
              style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
            <div className="descript1-explain-list-text">
              {'세금계산서 발행과 간단한\n미팅 공간이 필요하신 디자인,\n소프트웨어 프리랜서 개발자'}
            </div>
          </div>
          <div className="descript1-explain-list">
            <Image
              className="descript1-explain-list-image"
              src={descript1_2}
              alt="descript1_2"
              style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
            <div className="descript1-explain-list-text">
              {'외근의 비중이 많아\n실제 사무공간에 계시지 않는\n컨설턴트, 영업직'}
            </div>
          </div>
          <div className="descript1-explain-list">
            <Image
              className="descript1-explain-list-image"
              src={descript1_3}
              alt="descript1_2"
              style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
            <div className="descript1-explain-list-text">
              {'집주소로 사업 영위가\n어려우신 해외직구 대행사\n온라인 셀러'}
            </div>
          </div>
        </div>
        <div className="descript2">스페이스 모아봄에서 지원하는 비상주 서비스</div>
        <div className="descript2-card">
          <div className="descript2-card-text">
            <div className="descript2-card-text-title">법무, 세무 지원 서비스</div>
            <div className="descript2-card-text-descript">
              법인 설립 및 관련 세무 지원에 필요한
              <br />
              분야별 전문가를 소개해드립니다
            </div>
          </div>
          <div className="descript2-card-image">
            <Image
              src={descript2_1}
              alt="descript2_1"
              style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
        </div>
        <div className="descript2-card">
          <div className="descript2-card-text">
            <div className="descript2-card-text-title">체계적 우편물 관리</div>
            <div className="descript2-card-text-descript">
              호수로 주소를 부여하여 개별 관리
              <br />
              등기/관공기관 우편물의 경우 알림 서비스
              <br />
              내용 개봉 허락 시 사진 전송 서비스
            </div>
          </div>
          <div className="descript2-card-image">
            <Image
              src={descript2_2}
              alt="descript2_2"
              style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
        </div>
        <div className="descript2-card">
          <div className="descript2-card-text">
            <div className="descript2-card-text-title">비대면 전자계약</div>
            <div className="descript2-card-text-descript">
              시간과 편의를 위해 비대면 전자계약 가능
              <br />
              실공간 확인을 원하시면 대면계약도 가능
            </div>
          </div>
          <div className="descript2-card-image">
            <Image
              src={descript2_3}
              alt="descript2_3"
              style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
        </div>
        <div className="descript2-card">
          <div className="descript2-card-text">
            <div className="descript2-card-text-title">
              중과세 미적용
              <br />
              (죽전점만 해당)
            </div>
            <div className="descript2-card-text-descript">
              법인 설립 혹은 자본금 증자시
              <br />
              중과세 미적용
            </div>
          </div>
          <div className="descript2-card-image">
            <Image
              src={descript2_4}
              alt="descript2_4"
              style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
        </div>
      </div>
    </NonResidentPageStyle>
  );
}
