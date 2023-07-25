'use client';

import styled from 'styled-components';

export const PrivatePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 20px;

  .private-page-wrapper {
    max-width: 1064px;
    width: 100%;
    margin: 146px 0px;
    display: flex;
    flex-direction: column;

    .private-card {
      .private-card-title {
        font-size: 40px;
        font-weight: 800;
        margin-bottom: 48px;
      }

      .private-card-carousel {
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

      .private-card-option {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 48px;
        gap: 40px;
        @media (max-width: 500px) {
          flex-direction: column;
        }

        .private-card-option-left {
          flex: 3 0 0;

          .title {
            font-size: 40px;
            font-weight: 800;
            margin-bottom: 17px;
            white-space: nowrap;
            @media (min-width: 501px) and (max-width: 700px) {
              font-size: 32px;
            }
            @media (max-width: 500px) {
              font-size: 24px;
            }
          }

          .descript {
            white-space: pre;
            font-size: 24px;
            line-height: 160%;
            @media (min-width: 501px) and (max-width: 700px) {
              font-size: 20px;
            }
            @media (max-width: 500px) {
              font-size: 16px;
            }
          }
        }

        .private-card-option-right {
          flex: 4 0 0;
          display: flex;
          flex-direction: column;
          gap: 64px;

          &-basic {
            &-title {
              margin-bottom: 24px;
              font-size: 24px;
              font-weight: 800;
              @media (min-width: 501px) and (max-width: 700px) {
                font-size: 20px;
              }
              @media (max-width: 500px) {
                font-size: 16px;
              }
            }

            &-content {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              gap: 24px;

              &-left,
              &-right {
                display: flex;
                flex-direction: column;
                gap: 24px;

                > div {
                  white-space: nowrap;
                  display: flex;
                  align-items: center;
                  gap: 14px;
                }
              }
            }
          }

          &-option {
            display: flex;
            flex-direction: column;
            gap: 24px;

            &-title {
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-wrap: wrap;
              gap: 8px;

              .title {
                font-size: 24px;
                font-weight: 800;
                white-space: nowrap;
                @media (min-width: 501px) and (max-width: 700px) {
                  font-size: 20px;
                }
                @media (max-width: 500px) {
                  font-size: 16px;
                }
              }

              .comment {
                font-size: 12px;
                white-space: nowrap;
                margin-bottom: 4px;
              }
            }
            &-content {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              gap: 24px;

              &-left,
              &-right {
                display: flex;
                flex-direction: column;
                gap: 24px;

                > div {
                  white-space: nowrap;
                  display: flex;
                  align-items: center;
                  gap: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
