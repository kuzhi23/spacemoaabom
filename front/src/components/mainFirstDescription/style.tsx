'use client';

import styled from 'styled-components';

export const FirstDscriptionWraaper = styled.div`
  width: 1064px;
  margin-bottom: 256px;
  display: flex;
  justify-content: space-between;

  .textWrapper {
    display: flex;
    flex-direction: column;
    width: 349px;
  }

  .titleText {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 16px;
    line-height: 132%;
  }

  .dscriptionText {
    line-height: 170%;
  }
  .firstImgDes {
    display: none;
  }

  @media (max-width: 1064px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 120px;
    width: 656px;
    .textWrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: row;
      margin-top: 0;
      width: 100%;
    }
    .dscriptionText {
      width: 313px;
      margin-bottom: 24px;
    }
    .firstImg {
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
  @media (max-width: 656px) {
    align-items: center;
    width: 360px;
    padding: 0 20px 0 20px;
    .textWrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .dscriptionText {
      width: 100%;
      margin-bottom: 24px;
    }
    .firstImg {
      display: none;
    }
    .firstImgDes {
      display: inline;
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
`;
