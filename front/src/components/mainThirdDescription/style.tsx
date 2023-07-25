'use client';

import styled from 'styled-components';

export const MainThirdDescriptionWraper = styled.div`
  margin-bottom: 256px;
  .carouselImgSize {
    width: 245px;
    height: 336px;
  }
  .slick-slide {
    float: right;
  }

  @media (max-width: 3840px) {
    flex-direction: column;
    align-items: center;
    width: 1064px;

    .thirdTextWraper {
      margin-right: 0;
      width: 1064px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 24px;
    }
    .thirdTitleText {
      font-size: 32px;
      font-weight: 800;
      line-height: 132%;
    }
    .thirdDescription {
      line-height: 170%;
      width: 503px;
    }
    .carouselWraper {
      width: 100%;
    }
  }
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    .thirdTextWraper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 300px;
      margin-right: 60px;
    }
    .thirdTitleText {
      line-height: 132%;
      margin-bottom: 16px;
    }

    .thirdDescription {
      width: 300px;
      line-height: 170%;
    }
    .carouselWraper {
      width: 59vw;
    }
    .slick-slide {
      float: right;
    }
  }
  @media (max-width: 1800px) {
    .carouselWraper {
      width: 59.57vw;
    }
  }

  @media (max-width: 1700px) {
    .carouselWraper {
      width: 60.11vw;
    }
  }

  @media (max-width: 1600px) {
    margin-bottom: 120px;
    .carouselWraper {
      width: 60.74vw;
    }
  }

  @media (max-width: 1500px) {
    .carouselWraper {
      width: 61.46vw;
    }
  }

  @media (max-width: 1400px) {
    .carouselWraper {
      width: 62.3vw;
    }
  }

  @media (max-width: 1300px) {
    .carouselWraper {
      width: 63.24vw;
    }
  }
  @media (max-width: 1200px) {
    .carouselWraper {
      width: 64.34vw;
    }
  }
  @media (max-width: 1100px) {
    .carouselWraper {
      width: 65.66vw;
    }
  }

  @media (max-width: 1064px) {
    flex-direction: column;
    align-items: center;
    width: 656px;

    .thirdTextWraper {
      margin-right: 0;
      width: 656px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 24px;
    }
    .thirdTitleText {
      line-height: 150%;
    }
    .thirdDescription {
      line-height: 170%;
      width: 400px;
    }
    .carouselWraper {
      width: 100%;
    }
  }
  @media (max-width: 656px) {
    display: flex;
    width: 360px;
    padding: 0 20px 0 20px;
    flex-direction: column;
    .carouselWraper {
      width: 360px;
    }
    .thirdTextWraper {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .thirdDescription {
      width: 100%;
    }
    .carouselWraper {
      width: 100%;
    }
  }
`;
