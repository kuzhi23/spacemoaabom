'use client';

import styled from 'styled-components';

export const MainContactWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  .backImg {
    object-fit: cover;
    width: 100%;
  }

  .itemWraper {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 1064px;
  }

  .textWraper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .contactTitleText {
    font-size: 40px;
    font-weight: 800;
    line-height: 132%;
    margin-bottom: 24px;
  }
  .contacDescription {
    color: #575757;
  }
  @media (max-width: 1064px) {
    .itemWraper {
      width: 656px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .textWraper {
      width: 100%;
      margin-bottom: 32px;
    }
  }
  @media (max-width: 656px) {
    .itemWraper {
      width: 360px;
      padding: 0 20px 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .textWraper {
      width: 100%;
      margin-bottom: 24px;
    }
    .contactTitleText {
      font-size: 32px;
      font-weight: 800;
      line-height: 130%;
      margin-bottom: 8px;
    }
    .contacDescription {
      width: 190px;
      line-height: 140%;
    }
    .back {
      width: 100%;
      height: 1090px;
      background-color: #fef1e0;
    }
  }
`;
