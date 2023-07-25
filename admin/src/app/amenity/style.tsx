'use client';

import styled from 'styled-components';

export const AmenityPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 20px;

  .amenity-page-wrapper {
    max-width: 1064px;
    width: 100%;
    margin: 146px 0px;
    display: flex;
    flex-direction: column;
    gap: 146px;

    .amenity-card {
      .amenity-card-title {
        font-size: 24px;
      }

      .amenity-card-descript {
        font-size: 40px;
        font-weight: 800;
        margin-top: 16px;
        margin-bottom: 32px;
        line-height: 130%;
      }

      .amenity-card-carousel {
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

      .amenity-card-option {
        display: flex;
        justify-content: space-between;
        margin-top: 42px;
        flex-wrap: wrap;
        gap: 24px;

        .amenity-card-option-options {
          .option-title {
            font-weight: 800;
          }
          .option-descript {
            margin-top: 12px;
            width: fit-content;
            white-space: nowrap;
            line-height: 158%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 700px) {
    .amenity-page-wrapper {
      .amenity-card {
        .amenity-card-title {
          font-size: 20px;
        }
        .amenity-card-descript {
          font-size: 32px;
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .amenity-page-wrapper {
      .amenity-card {
        .amenity-card-title {
          font-size: 16px;
        }
        .amenity-card-descript {
          font-size: 24px;
        }
      }
    }
  }
`;
