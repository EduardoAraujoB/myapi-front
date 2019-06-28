import styled from "styled-components";

export const ContainerItem = styled.div`
  width: 700px;
  padding: 20px;
  margin: 20px;
  background: #fff;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  & > h1 {
    font-size: 25px;
    color: #fc6963;
  }
  & > p {
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 20px;
    color: #777;
  }
  & > strong {
    color: #5e5e5e;
  }
  & > a {
    display: flex;
    background: none;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 19px;
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

export const NewItemContainer = styled.div`
  margin-top: 20px;
  & > a {
    padding: 10px;
    background: #fff;
    border: 2px solid #fc6963;
    border-radius: 10px;
    color: #fc6963;
    font-weight: bold;
    &:hover {
      background: #fc6963;
      color: #fff;
      transition: 100ms;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  @media only screen and (max-width: 760px) {
    & > ${ContainerItem} {
      width: 400px;
    }
  }
`;
