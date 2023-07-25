'use client';

import styled from 'styled-components';

export const ContactFormWraper = styled.div`
  padding: 56px;
  width: 614px;
  box-sizing: border-box;
  background-color: white;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
  input[type='text'],
  input[type='number'],
  input[type='email'] {
    width: 100%;
    padding: 16px;
    height: 50px;
    background-color: #f9fafa;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin-bottom: 24px;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='checkbox'] {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    background-color: #f9fafa;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
  }

  input::placeholder {
    color: #bcbcbc;
    font-weight: bold;
  }
  textarea {
    background-color: #f9fafa;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin-bottom: 24px;
    width: 100%;
    padding: 16px;
    height: 315px;
    resize: none;
  }
  textarea::placeholder {
    color: #bcbcbc;
    font-weight: bold;
  }

  .checkBoxWraper {
    display: flex;
    align-items: flex-start;
    margin-bottom: 56px;
  }

  .checkBoxTitelText {
    color: #575757;
    line-height: 140%;
    margin-bottom: 6px;
  }
  .checkBoxSmallText {
    font-size: 12px;
    color: #bcbcbc;
    text-decoration: none;
  }
  button {
    font-size: 16px;
    font-weight: 800;
    padding: 19px 0 19px 0;
    width: 100%;
    background-color: #232644;
    border: none;
    border-radius: 4px;
    color: white;
  }
  button:hover {
    cursor: pointer;
  }
  @media (max-width: 1064px) {
    width: 100%;
    form {
      display: flex;
      /* align-items: center;
      justify-content: center; */
    }
    input {
      width: 100%;
    }
  }
  @media (max-width: 656px) {
    width: 100%;
    padding: 32px;
    align-items: center;
    justify-content: center;
    .checkBoxWraper {
      margin-bottom: 32px;
    }
    .checkBoxTitelText {
      line-height: 150%;
    }
    .chekBox {
      margin-top: 4px;
    }
  }
`;
