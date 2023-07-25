'use client';

import styled from 'styled-components';

export const ContactBtnWraper = styled.div<{ pathname: string | null }>`
  display: ${(props) => props.pathname === '/contact' && 'none'};
  .floating {
    position: fixed;
    z-index: 100;
    right: 2vw;
    top: 90vh;
  }
  .bottom {
    position: fixed;
    font-weight: 800;
    z-index: 10000;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #fef1e0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
  }
`;
