'use client';

import styled from 'styled-components';

export const ContactPageStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
  padding: 140px 0;

  .itemWraper {
    max-width: 1064px;
  }
  .titleText {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 16px;
  }
  .textWraper {
    margin-bottom: 32px;
  }
  .contentWraper {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  @media (max-width: 1064px) {
    .contentWraper {
      flex-direction: column;
    }
  }
  @media (max-width: 656px) {
    padding: 72px 0;

    .textWraper {
      width: 360px;
      margin-bottom: 24px;
    }
    .subDText {
      width: 220px;
      line-height: 150%;
    }
    .contentWraper {
      width: 360px;
      flex-direction: column;
    }
    .contactImg {
      width: 100%;
    }
  }
`;
