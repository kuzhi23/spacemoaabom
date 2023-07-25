'use client';

import styled from 'styled-components';

export const FreePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 20px;

  .free-page-wrapper {
    max-width: 1064px;
    width: 100%;
    margin: 146px 0px;
    display: flex;
    flex-direction: column;
    gap: 146px;

    .free-card {
      .free-card-title {
        font-size: 24px;
      }

      .free-card-descript {
        font-size: 40px;
        font-weight: 800;
        line-height: 140%;
        margin-top: 16px;
        margin-bottom: 32px;
      }

      .free-card-carousel {
        max-width: 1064px;
        width: 100%;
        height: 544px;
        .slick-dots li button:before {
          font-size: 12px;
          color: white; /* 변경하려는 색상으로 지정 */
          opacity: 100%;
        }

        .slick-dots li.slick-active button:before {
          color: #232644; /* 선택된 dot의 색상을 변경하려면 이 값을 조정 */
          opacity: 100%;
        }
        .slick-dots {
          bottom: 3%; /* 원하는 위치로 조절 */
        }
        .slick-slide img {
          object-fit: cover;
          object-position: center center;
        }
      }

      .free-card-option {
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
        flex-wrap: wrap;
        gap: 24px;

        .free-card-option-options {
          .option-title {
            font-weight: 800;
          }
          .option-descript {
            margin-top: 12px;
            width: fit-content;
            white-space: nowrap;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 700px) {
    .free-page-wrapper {
      .free-card {
        .free-card-title {
          font-size: 20px;
        }
        .free-card-descript {
          font-size: 32px;
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .free-page-wrapper {
      .free-card {
        .free-card-title {
          font-size: 16px;
        }
        .free-card-descript {
          font-size: 24px;
        }
      }
    }
  }
`;
