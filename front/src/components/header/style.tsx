'use client';

import styled from 'styled-components';

export const HeaderStyle = styled.div<{ pathname: string; param: string | null }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;

  .private-submenu {
    width: 100%;
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    height: 66px;
    position: absolute;
    top: 72px;
    z-index: 1;
    background-color: #fff;
    transition: transform 0.3s ease;

    > div {
      cursor: pointer;
    }

    .submenu-${(props) => props.param} {
      font-weight: 800;
    }

    .spacing {
      width: 64px;
    }
  }

  .hamburger-menu {
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: calc(100% - 48px);
    top: 48px;
    background-color: #fff;
    display: none;

    .divider {
      width: calc(100% - 40px);
      margin: 0px 20px;
    }

    &-auth {
      display: flex;
      gap: 17px;
      margin: 20px;

      > div {
        cursor: pointer;
      }
    }

    &-box {
      display: flex;
      height: 100%;
    }

    &-category {
      width: 160px;
      height: 100%;
      background-color: #fef1e04c;

      > div {
        height: 50px;
        padding: 16px 20px;
        cursor: pointer;

        &:hover {
          background-color: #fef1e0;
        }
      }

      .category-${(props) => props.pathname?.slice(1)} {
        background-color: #fef1e0;
        font-weight: 800;
      }
    }

    &-private-submenu {
      width: calc(100% - 160px);

      > div {
        height: 50px;
        padding: 16px 40px;
        cursor: pointer;
      }

      .submenu-${(props) => props.param} {
        font-weight: 800;
      }
    }
  }

  .header-wrapper {
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    background-color: #fff;
    padding: 0px 27px;

    .header {
      max-width: 1118px;
      width: 100%;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header-logo {
      width: 164px;
      height: 32px;
      cursor: pointer;
    }

    .header-category {
      display: flex;
      gap: 40px;
      z-index: 2;

      > div:hover {
        cursor: pointer;
      }

      .category-${(props) => props.pathname?.slice(1)} {
        color: #232644;
        font-weight: 800;
      }
    }

    .header-auth {
      display: flex;
      gap: 39px;
    }

    .mobile-menu {
      display: none;
      padding-right: 20px;
    }
  }

  @media only screen and (max-width: 900px) {
    .header-wrapper {
      height: 48px;
      padding: 0;

      .header-logo {
        margin-left: 20px;
        width: 106px;
        /* height: 16px; */
      }

      .header-category,
      .header-auth {
        display: none;
      }

      .mobile-menu {
        display: flex;
        height: 100%;
        align-items: center;
      }
    }

    .hamburger-menu {
      display: block;
    }

    .private-submenu {
      display: none;
    }
  }
`;
