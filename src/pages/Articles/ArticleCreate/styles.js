import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #fff;
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  span {
    font-weight: bold;
    font-size: 20px;
    color: #888888;
    margin-bottom: 20px;
  }
  input {
    margin-bottom: 15px;
    padding: 0 20px;
    width: 100%;
    height: 46px;
    border: 1px solid #ddd;
    color: #777;
    font-size: 15px;
    &:placeholder {
      color: #999;
    }
  }
  textarea {
    display: flex;
    margin-bottom: 15px;
    padding: 20px;
    width: 100%;
    height: 90px;
    border: 1px solid #ddd;
    color: #777;
    font-size: 15px;
    &:placeholder {
      color: #999;
    }
  }
  button {
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
    height: 46px;
    background: none;
    border: 2px solid #fc6963;
    border-radius: 10px;
    color: #fc6963;
    font-weight: bold;
    &:hover {
      background: #fc6963;
      color: #fff;
      transition: 100ms;
    }
    &:active {
      opacity: 0.8;
    }
  }
`;
