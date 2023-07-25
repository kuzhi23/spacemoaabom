'use client';

import styled from 'styled-components';

export const PopUpWraper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: fixed;
  z-index: 9999;
  left: 22%;
  top: 12vh;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); */
  object-fit: cover;

  .mPopUp {
    display: none;
  }

  .buttonGroup {
    display: flex;
    flex-direction: row;
  }
  .mCloseBtn {
    display: none;
  }
  .mDayBtn {
    display: none;
  }
  @media (max-width: 656px) {
    left: 3vw;
  }
  @media (max-width: 493px) {
    align-items: flex-end;
    background-color: #fffcf9;
    .popup {
      display: none;
    }
    .dayBtn {
      display: none;
    }
    .closeBtn {
      display: none;
    }
    .mPopUp {
      display: inline;
      position: relative;
    }
    .mCloseBtn {
      display: inline;
    }
    .mDayBtn {
      display: inline;
    }
  }
`;
