import air from '#/assets/web/serviceSvg/airConditioning.svg';
import metting from '#/assets/web/serviceSvg/meeting.svg';
import auth from '#/assets/web/serviceSvg/auth.svg';
import coffee from '#/assets/web/serviceSvg/coffee.svg';
import dicount from '#/assets/web/serviceSvg/discount.svg';
import gift from '#/assets/web/serviceSvg/gift.svg';
import month from '#/assets/web/serviceSvg/month.svg';
import office from '#/assets/web/serviceSvg/office.svg';
import relax from '#/assets/web/serviceSvg/relax.svg';
import reservation from '#/assets/web/serviceSvg/reservationsvg.svg';
import tax from '#/assets/web/serviceSvg/tax.svg';
import wifi from '#/assets/web/serviceSvg/wifi.svg';
import { ItemCard } from './itemCard';
import { MainFifthDscriptionnWraper } from './style';

type Item = {
  id: number;
  img: string;
  title: string;
  description: string;
};
const itemList: Item[] = [
  {
    id: 1,
    img: metting,
    title: '전자칠판 회의실',
    description: '65인치 LG 전자칠판 설치 회의실에서 보다 효율적인 회의 및 미팅을 하세요.',
  },
  {
    id: 2,
    img: reservation,
    title: '회의실 예약시스템',
    description: '치열한 눈치싸움은 그만! 언제 어디서나 회의실 예약을 원격으로 하세요\n(최대 20시간 무료)',
  },
  {
    id: 3,
    img: coffee,
    title: '최고급 커피머신/원두',
    description: 'Jura 커피머신과 스타벅스 커피로 365일 무료 커피를 즐겨보세요.',
  },
  {
    id: 4,
    img: air,
    title: '호실별 개별 냉난방',
    description:
      '사무실에 모두 똑같은 온도를 공유한다고요? 스페이스 모아봄에서는 각 호실별 개별 냉난방을 제공합니다.\n(겨울에는 바닥난방으로 쾌적해요!)',
  },
  {
    id: 5,
    img: auth,
    title: '4+1 보안서비스',
    description: 'CCTV, 지문인식 출입,개별 호실 도어록 건물 내 상주 경비, 화장실 도어록',
  },
  {
    id: 6,
    img: relax,
    title: '폰부스 & 릴렉스 룸',
    description: '폰부스에서 장기간 통화를 마음 편하게 그리고 릴렉스룸 에서는\n안마의자에서 편안한 휴식을',
  },
  {
    id: 7,
    img: month,
    title: '1개월 단기임대',
    description: '장기간 계약이 부담스러우시다면\n1개월 단기 임대로\n스페이스 모아봄을 경험해 보세요',
  },
  {
    id: 8,
    img: dicount,
    title: '장기계약 할인',
    description: '3,6,12개월 장기계약 시\n할인 혜택을 제공해 드립니다',
  },
  {
    id: 9,
    img: gift,
    title: '입주시 웰컴 기프트',
    description: '입주하시는 모든 분들께\n웰컴 기프트를 드립니다',
  },
  {
    id: 10,
    img: tax,
    title: '세무/법률/관세 솔루션',
    description: '업무에 필요한 세무, 창업 관련 법률문제 글로벌 창업을 위한 관세 등 관련 분야 전문가를 소개해 드립니다',
  },
  {
    id: 11,
    img: wifi,
    title: '최고수준 인터넷 보안',
    description:
      'UTM(Unified Threat Management)을 설치하여 바이러스, 랜섬웨어 걱정 없이 안정적이고 쾌적한\n인터넷 환경을 제공합니다',
  },
  {
    id: 12,
    img: office,
    title: '공원속의 오피스',
    description: '올림픽공원 도보 10분\n오금공원 도보 3분\n성내천 송파둘레길 도보 7분',
  },
];
export const MainFifthDescription = () => (
  <MainFifthDscriptionnWraper>
    <div className="font40EB fifthTitle">스페이스 모아봄만의 서비스</div>
    <div className="itemList">
      {itemList.map((item, index) => (
        <ItemCard img={item.img} title={item.title} description={item.description} key={item.id} index={index} />
      ))}
    </div>
  </MainFifthDscriptionnWraper>
);
