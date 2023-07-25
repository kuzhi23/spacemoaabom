'use client';

import styled from 'styled-components';

export const PersonalInfoPageStyle = styled.div`
  width: 58%;
  margin: 0 auto;
  padding: 96px 0;

  .titleText {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 16px;
  }

  .desText {
    line-height: 170%;
  }
  span {
    font-weight: 800;
  }
  .textMargin {
    margin-bottom: 12px;
  }
  .table-responsive {
    width: 100%;
    overflow-x: auto;
    margin: 24px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }
  thead {
    background: #fef1e0;

    align-items: center;
  }

  th,
  td {
    padding: 15px;
    line-height: 170%;
    text-align: center;
    border: 1px solid #ddd;
  }

  .text {
    margin-bottom: 12px;
    font-weight: 800;
  }
`;
