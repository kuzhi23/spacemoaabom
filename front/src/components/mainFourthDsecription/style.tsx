'use client';

import styled from 'styled-components';

export const MainFourthDscriptionnWraper = styled.div`
  max-width: 1064px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 256px;

  .fourthTextWraper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 24px;
  }

  .fourthTitle {
    font-size: 32px;
    font-weight: 800;
    width: 303px;
    line-height: 132%;
  }

  .fourthDescription {
    width: 471px;
    margin-bottom: 4px;
    line-height: 170%;
  }
  .mfourthImg {
    display: none;
  }
  @media (max-width: 1064px) {
    width: 656px;
    margin-bottom: 120px;
    .fourthTextWraper {
      align-items: flex-end;
    }
    .fourthDescription {
      margin-bottom: 4px;
    }
    .fourthImg {
      width: 656px;
      object-fit: cover;
      object-position: center center;
    }
  }
  @media (max-width: 656px) {
    width: 360px;
    padding: 0 20px 0 20px;
    .fourthTextWraper {
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
    .fourthDescription {
      margin-bottom: 4px;
    }
    .fourthImg {
      display: none;
    }
    .fourthDescription {
      width: 100%;
    }
    .mfourthImg {
      display: inline;
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
`;
