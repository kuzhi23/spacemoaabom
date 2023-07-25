'use client';

import styled from 'styled-components';

export const FooterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 225px;
  border-top: 1px solid #efefef;
  padding: 0px 20px;

  .footer-wrapper {
    max-width: 1064px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .footer-left {
      display: flex;
      gap: 16px;

      .footer-left-left {
        width: 164px;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        .footer-call-number {
          font-size: 20px;
          font-weight: 800;
        }
      }

      .footer-left-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        > div {
          font-size: 14px;
        }
      }
    }

    .footer-right {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: end;

      .footer-right-top {
        display: flex;
        gap: 16px;
        > div {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          height: 20px;
          > a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 20px;
          }
        }
      }

      .footer-right-bottom {
        display: flex;
        gap: 16px;
      }
    }
  }

  .footer-left-right-1-mobile,
  .footer-left-right-2-mobile {
    display: none;
  }

  @media (max-width: 920px) {
    .footer-left-right-2 {
      display: none;
    }

    .footer-left-right-2-mobile {
      display: block;
    }
  }

  @media (max-width: 740px) {
    .footer-wrapper {
      padding: 32px 0px;
    }
    .footer-left-right-1 {
      display: none;
    }
    .footer-left-right-1-mobile {
      display: block;
    }
    .footer-wrapper {
      flex-direction: column;
      align-items: center;

      .footer-left {
        flex-direction: column;
        align-items: center;

        .footer-left-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          line-height: 150%;
        }
      }

      .footer-right {
        margin-top: 16px;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;
