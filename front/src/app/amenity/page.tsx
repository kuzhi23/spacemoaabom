import Image from 'next/image';
import relax from '#/assets/web/relax.svg';
import phoneBooth1_1 from '#/assets/web/phoneBooth1_1.svg';
import phoneBooth1_2 from '#/assets/web/phoneBooth1_2.svg';
import meetingRoom1_1 from '#/assets/web/meetingRoom1_1.svg';
import meetingRoom1_2 from '#/assets/web/meetingRoom1_2.svg';
import lounge1_1 from '#/assets/web/lounge1_1.svg';
import lounge1_2 from '#/assets/web/lounge1_2.svg';
// import AmenityBanner from '#/assets/web/AmenityBanner.svg';
import { LibCarousel } from '@/components/libCarousel';
import { AmenityPageStyle } from './style';
import { AmenityBanner } from './amenityBanner';

export default function AmenityPage() {
  return (
    <AmenityPageStyle>
      <AmenityBanner />
      <div className="amenity-page-wrapper">
        <div className="amenity-card">
          <div className="amenity-card-title">라운지</div>
          <div className="amenity-card-descript">
            탁트인 뷰를 보며 휴식을
            <br />
            취할 수 있는 공간 제공
          </div>
          <div className="amenity-card-carousel">
            <LibCarousel>
              <Image src={lounge1_1} alt="lounge1_1" />
              <Image src={lounge1_2} alt="lounge1_2" />
            </LibCarousel>
          </div>
          <div className="amenity-card-option">
            <div className="amenity-card-option-options">
              <div className="option-title">최고급 커피머신/원두</div>
              <div className="option-descript">
                Jura 커피머신과 스타벅스,폴바셋
                <br />
                원두로 최고급 커피 무료 제공
              </div>
            </div>
            <div className="amenity-card-option-options">
              <div className="option-title">우편/택배 알림</div>
              <div className="option-descript">
                우편/택배 수령 및 보관, 카톡 문자로&nbsp;
                <br />
                개별 알림 서비스
              </div>
            </div>
            <div className="amenity-card-option-options">
              <div className="option-title">여유로운 미팅공간</div>
              <div className="option-descript">Tea-Meeting을 위한 테이블 제공</div>
            </div>
            <div className="amenity-card-option-options">
              <div className="option-title">개별 식음료 보관</div>
              <div className="option-descript">개별 식음료 보관 가능한 냉장고 완비</div>
            </div>
          </div>
        </div>
        <div className="amenity-card">
          <div className="amenity-card-title">회의실</div>
          <div className="amenity-card-descript">
            시간도, 공간도
            <br />
            여유로운 회의공간
          </div>
          <div className="amenity-card-carousel">
            <LibCarousel>
              <Image src={meetingRoom1_1} alt="meetingRoom1_1" />
              <Image src={meetingRoom1_2} alt="meetingRoom1_2" />
            </LibCarousel>
          </div>
          <div className="amenity-card-option">
            <div className="amenity-card-option-options">
              <div className="option-title">전자칠판 회의실</div>
              <div className="option-descript">
                LG 65인치 전자칠판으로
                <br />
                스마트한 회의실 서비스 제공
                <br />
                (미러링, 터치 필기 기능)
              </div>
            </div>
            <div className="amenity-card-option-options">
              <div className="option-title">여유있는 회의공간</div>
              <div className="option-descript">최대 8인, 6인 수용 가능 2개 회의실</div>
            </div>
            <div className="amenity-card-option-options">
              <div className="option-title">무료 식음료 제공</div>
              <div className="option-descript">
                외부 초청 고객사분들께도
                <br />
                무료 커피/차 제공
              </div>
            </div>
            <div className="amenity-card-option-options">
              <div className="option-title">회의실 무료시간 제공</div>
              <div className="option-descript">
                모든 고객 입주사는 월 20시간 내에
                <br />
                무료로 이용 가능합니다.
                <br />
                (초과 시간은 별도 요금 부과됩니다)
              </div>
            </div>
          </div>
        </div>
        <div className="amenity-card">
          <div className="amenity-card-title">OA존 & 폰부스</div>
          <div className="amenity-card-descript">
            실속 있는
            <br />
            스페이스 모아봄만의 업무공간
          </div>
          <div className="amenity-card-carousel">
            <LibCarousel>
              <Image src={phoneBooth1_1} alt="phoneBooth1_1" />
              <Image src={phoneBooth1_2} alt="phoneBooth1_2" />
            </LibCarousel>
          </div>
          <div className="amenity-card-option">
            <div className="amenity-card-option-options">
              <div className="option-title">프린트 무료제공</div>
              <div className="option-descript">
                개별 호실에서 프린트를 자유롭게!
                <br />
                흑백 300장 컬러 10장 매월 무료제공
              </div>
            </div>
            <div className="amenity-card-option-options">
              <div className="option-title">파쇄기</div>
              <div className="option-descript">문서 보안을 위한 문서파쇄기 설치&nbsp;&nbsp;</div>
            </div>
            <div className="amenity-card-option-options">
              <div className="option-title">사무용품 대여</div>
              <div className="option-descript">각종 사무용품 대여</div>
            </div>
            <div className="amenity-card-option-options">
              <div className="option-title">폰부스</div>
              <div className="option-descript">폰부스에서 장시간 통화도 부담없이</div>
            </div>
          </div>
        </div>
        <div className="amenity-card">
          <div className="amenity-card-title">릴렉스룸</div>
          <div className="amenity-card-descript">
            편안하게 휴식을
            <br />
            취할수 있는 공간
          </div>
          <div className="amenity-card-carousel">
            <LibCarousel>
              <Image src={relax} alt="relax" />
            </LibCarousel>
          </div>
          <div className="amenity-card-option">
            <div className="amenity-card-option-options">
              <div className="option-title">릴렉스 룸</div>
              <div className="option-descript">고급 안마의자에서 업무의 스트레스를 날려보세요.</div>
            </div>

            <div className="amenity-card-option-options">
              <div className="option-title">업무효율을 높일수 있는 공간</div>
              <div className="option-descript">편안한 분위기로 업무의 효율을 올려드립니다.</div>
            </div>
            <div className="amenity-card-option-options">
              <div className="option-title">무료 제공</div>
              <div className="option-descript">모든 입주사 고객에게 무료로 제공해드립니다.</div>
            </div>
          </div>
        </div>
      </div>
    </AmenityPageStyle>
  );
}
