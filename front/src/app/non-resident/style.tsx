'use client';

import styled from 'styled-components';

export const NonResidentPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .no-resident-banner {
    display: block;
  }

  .no-resident-banner-mobile {
    display: none;
  }

  .no-resident-page-wrapper {
    max-width: 1104px;
    width: 100%;
    margin: 148px 0px;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 148px;

    .descript1 {
      font-size: 40px;
      font-weight: 800;
      word-break: keep-all;
      text-align: center;

      @media (max-width: 1064px) {
        width: 344px;
        line-height: 150%;
        font-size: 32px;
      }

      &-explain {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        @media (max-width: 1064px) {
          flex-direction: column;
          gap: 84px;
        }

        &-list {
          display: flex;
          flex-direction: column;
          gap: 24px;

          &-text {
            white-space: pre;
            line-height: 160%;
            font-size: 24px;
          }
        }
      }
    }

    .descript2 {
      font-size: 40px;
      font-weight: 800;
      word-break: keep-all;
      text-align: center;

      @media (max-width: 1064px) {
        width: 344px;
        line-height: 150%;
        font-size: 32px;
      }

      &-card {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        gap: 24px;

        &-text {
          width: 263px;
          order: 1;
          @media (max-width: 1064px) {
            order: 2;
            display: flex;
            text-align: center;
            flex-direction: column;
            align-items: center;
          }

          &-title {
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 24px;
            line-height: 160%;
          }
          &-descript {
            width: 300px;
            line-height: 160%;
          }
        }

        &-image {
          order: 2;
          @media (max-width: 1064px) {
            order: 1;
          }
        }
      }
    }

    @media (max-width: 1064px) {
      margin: 94px 0px;
      gap: 94px;
      .descript2-card {
        width: 320px;
        object-fit: cover;
        object-position: center center;
      }
    }
  }

  @media (max-width: 1064px) {
    .no-resident-banner {
      display: none;
    }
    .no-resident-banner-mobile {
      display: block;
    }
  }
`;
