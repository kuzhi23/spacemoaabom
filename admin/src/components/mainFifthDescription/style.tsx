'use client';

import styled from 'styled-components';

export const MainFifthDscriptionnWraper = styled.div`
  max-width: 1064px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 256px;

  .fifthTitle {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 124px;
  }

  .itemList {
    max-width: 1064px;
    display: flex;
    flex-wrap: wrap;
    gap: 64px;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
  }
  @media (max-width: 1064px) {
    margin-bottom: 120px;
    max-width: 656px;
    .fifthTitle {
      margin-bottom: 88px;
    }
  }
  @media (max-width: 656px) {
    width: 360px;
    align-items: center;
    padding: 0 20px 0 20px;
    .fifthTitle {
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 72px;
      text-align: center;
    }
    .itemList {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 60px;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      box-sizing: border-box;
    }
  }
`;

export const ItemCardWraper = styled.div<{ index: number | null }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 205px;
  /* margin: ${(props) => (props.index != null && props.index >= 4 && props.index <= 7 ? '94px 0 113px 0' : '0')}; */

  .itemwraper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .itemTitleText {
    font-size: 16;
    font-weight: 800;
    margin-bottom: 12px;
  }

  .itemDescription {
    font-size: 12px;
    text-align: center;
    line-height: 160%;
    white-space: pre-line;
  }
  @media (max-width: 1064px) {
    margin: 0;
    /* margin-top: ${(props) =>
      // eslint-disable-next-line no-nested-ternary
      props.index != null && props.index >= 6 && props.index <= 11 ? '24px' : '0'}; */
  }
  @media (max-width: 656px) {
    width: 360px;
    margin: 0;
    flex-direction: row;
    .itemImag {
      margin-right: 16px;
    }
    .itemwraper {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    .itemTitleText {
      margin-bottom: 8px;
    }
    .itemDescription {
      text-align: left;
    }
  }
  @media (max-width: 360px) {
    padding: 0 20px 0 20px;
  }
`;
