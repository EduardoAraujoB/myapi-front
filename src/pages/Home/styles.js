import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const ContainerItem = styled.div`
  width: 700px;
  padding: 20px;
  margin: 20px;
  background: #fff;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  h1 {
    font-size: 25px;
    color: #888888;
  }
  p {
    margin-top: 20px;
    font-size: 20px;
  }
  button {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    background: none;
    color: #fc6963;
    border: 2px solid #fc6963;
    border-radius: 25px;
    &:hover {
      cursor: pointer;
      background: #fc6963;
      color: #fff;
      transition: 100ms;
    }
    &:active {
      opacity: 0.8;
    }
  }
`;
