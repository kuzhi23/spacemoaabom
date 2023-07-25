'use client';

import styled from 'styled-components';

export const MainSecondDescriptionWraper = styled.div`
  max-width: 1064px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 256px;

  .secondtextWraaper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 24px;
  }

  .secondTitle {
    width: 275px;
    font-size: 32px;
    font-weight: 800;
    line-height: 132%;
  }

  .secondDescription {
    width: 389px;
    line-height: 170%;
  }

  .mSecondImg {
    display: none;
  }
  @media (max-width: 1064px) {
    width: 656px;
    margin-bottom: 120px;
    .secondtextWraaper {
      align-items: center;
    }
    .secondImg {
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
    .secondDescription {
      width: 349px;
    }
  }
  @media (max-width: 656px) {
    align-items: center;
    width: 360px;
    padding: 0 20px 0 20px;
    .secondtextWraaper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 24px;
    }
    .secondTitle {
      width: 100%;
      margin-bottom: 16px;
    }
    .secondDescription {
      width: 100%;
    }
    .dscriptionText {
      width: 100%;
      margin-bottom: 24px;
    }
    .secondImg {
      display: none;
    }
    .mSecondImg {
      display: inline;
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
`;
