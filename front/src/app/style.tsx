'use client';

import styled from 'styled-components';

export const RootPageStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-break: keep-all;
  .slick-dots {
    bottom: 3%; /* 원하는 위치로 조절 */
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: white; /* 변경하려는 색상으로 지정 */
    opacity: 100%;
  }

  .slick-dots li.slick-active button:before {
    color: #232644; /* 선택된 dot의 색상을 변경하려면 이 값을 조정 */
    opacity: 100%;
  }
  .slick-dots li {
    margin: 0 2px; /* Dot 간격 조절 */
  }

  .slick-slide img {
    object-fit: cover;
  }

  .mainTitle {
    font-size: 40px;
    font-weight: 800;
    margin: 128px 0;
    max-width: 1064px;
  }
  @media (max-width: 1064px) {
    .mainTitle {
      margin: 104px 0 96px 0;
    }
  }
  @media (max-width: 656px) {
    .mainTitle {
      font-size: 32px;
      font-weight: 800;
      margin: 72px 0;
      max-width: 1064px;
    }
  }
`;
