import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const Form = styled.form`
  width: 400px;
  display: flex;
  padding: 20px;
  background: #fff;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  span {
    font-weight: bold;
    font-size: 22px;
    color: #888888;
    text-align: center;
    padding-bottom: 20px;
    width: 100%;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    height: 46px;
    border: 1px solid #ddd;
    &:placeholder {
      color: #999;
    }
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  button {
    color: #fc6963;
    border: 2px solid #fc6963;
    font-size: 16px;
    font-weight: bold;
    background: none;
    height: 56px;
    border-radius: 5px;
    width: 100%;
    &:hover {
      cursor: pointer;
      background: #fc6963;
      color: #fff;
      transition: 100ms;
    }
    &:ac &:active {
      opacity: 0.8;
    }
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #888888;
    text-decoration: none;
  }
`;
