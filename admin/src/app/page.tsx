import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MainMap } from '@/components/mainMap/mainMap';
import { MainContact } from '@/components/mainContact/mainContact';
import { MainFifthDescription } from '@/components/mainFifthDescription/mainFifthDescription';
import { MainFourthDscription } from '@/components/mainFourthDsecription/mainFourthDescription';
import { MainThirdDescription } from '@/components/mainThirdDescription/mainThirdDescription';
import { MainScecondDescription } from '@/components/mainSecondDescription/mainScecondDescription';
import { MainFirstDscription } from '@/components/mainFirstDescription/mainFirstDscription';
import { MainBanner } from '@/components/mainBanner/mainBanner';
import { RootPageStyle } from './style';

export default function RootPage() {
  return (
    <RootPageStyle>
      <MainBanner />
      <div className="mainTitle">왜 스페이스 모아봄 일까?</div>
      <MainFirstDscription />
      <MainScecondDescription />
      <MainThirdDescription />
      <MainFourthDscription />
      <MainFifthDescription />
      <MainMap />
      <MainContact />
    </RootPageStyle>
  );
}

// test
