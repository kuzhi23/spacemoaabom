import { MiniMap } from './miniMap';
import { MainMiniMapWraper } from './style';

export const MainMap = () => (
  <MainMiniMapWraper>
    <div className="miniMapTextWraper">
      <div className="textWraper ">
        <div className="titleText">위치</div>
        <div>5호선 방이역 1번 출구 도보 3분</div>
      </div>
      <div className="textWraper">
        <div className="subTtileText">주소</div>
        <div className="subTtileD">서울 송파구 마천로 83,(제이에스빌딩, 오금동) 6층</div>
      </div>
      <div className="textWraper">
        <div className="subTtileText">데스크</div>
        <div>평일 09:00 - 18:00 운영</div>
      </div>
      <div className="textWraper">
        <div className="subTtileText">주차</div>
        <div>방문주차 한시간 무료 이용</div>
      </div>
    </div>
    <MiniMap />
  </MainMiniMapWraper>
);
