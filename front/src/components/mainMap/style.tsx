'use client';

import styled from 'styled-components';

export const MainMiniMapWraper = styled.div`
  width: 1064px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 164px;

  .miniMapTextWraper {
    display: flex;
    flex-direction: column;
  }

  .textWraper {
    margin-bottom: 32px;
  }

  .titleText {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 24px;
  }
  .subTtileText {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .miniMapSize {
    width: 704px;
    height: 475px;
  }

  @media (max-width: 1064px) {
    width: 656px;
    align-items: center;
    margin-bottom: 120px;
    .miniMapSize {
      width: 50%;
      height: 475px;
    }
    .subTtileD {
      width: 200px;
      line-height: 150%;
    }
  }
  @media (max-width: 656px) {
    width: 360px;
    padding: 0 20px 0 20px;
    margin-bottom: 120px;
    .titleText {
      font-size: 32px;
      font-weight: 800;
    }
    .miniMapSize {
      width: 100%;
      height: 475px;
    }
  }
`;
