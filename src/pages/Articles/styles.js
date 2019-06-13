import styled from "styled-components";

export const NewArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const NewArticleLink = styled.a`
  cursor: pointer;
  padding: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 40px;
  font-weight: bold;
  color: #fff;
  background-color: #fc6963;
  border-radius: 10px;
  height: 50px;
  &:hover {
    border: none;
    background: #fff;
    color: #fc6963;
    border: 2px solid #fc6963;
    transition: 100ms;
  }
`;

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 25px;
`;

export const ArticleStyle = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  height: auto;
  max-width: 615px;
  width: auto;
  background: #fff;
  color: #000;
  text-align: center;
  padding: 20px;
  span {
    padding: 10px;
    width: 100%;
    font-size: 30px;
    font-weight: bold;
  }
  p {
    padding: 10px;
    font-size: 15px;
  }
  a {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    font-weight: bold;
    color: #fc6963;
    background-color: none;
    border: 2px solid #fc6963;
    border-radius: 20px;
    &:hover {
      border: none;
      background: #fc6963;
      color: #fff;
      transition: 100ms;
    }
  }
`;
