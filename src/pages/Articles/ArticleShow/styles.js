import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px 30px 15px 30px;
`;

export const Article = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  height: auto;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  & > strong {
    color: #fc6963;
    text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
  }
  & > p {
    color: #777;
    margin: 30px;
    font-size: 20px;
  }
  & > span {
    color: #fc6963;
    margin: 30px;
    font-size: 20px;
    font-weight: bold;
    text-align: right;
  }
  & > h4 {
    margin: 10px 0 20px 0;
    color: #5e5e5e;
  }
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 100px;
    height: 40px;
    color: #fc6963;
    font-weight: bold;
    border: 2px solid #fc6963;
    border-radius: 5px;
    &:hover {
      background: #fc6963;
      color: #fff;
      transition: 100ms;
    }
  }
`;

export const CommentContainer = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  height: auto;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  & > strong {
    color: #fc6963;
    text-align: center;
    font-size: 22px;
    margin-bottom: 10px;
  }
`;

export const Comment = styled.div`
  margin-top: 10px;
  width: 100%;
  height: auto;
  padding: 10px;
  border-radius: 10px;
  & > strong {
    color: #fc6963;
  }
  & > p {
    margin: 10px 0 0 10px;
    color: #777;
  }
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: auto;
  border-radius: 5px;
  & > p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    width: 100%;
    height: 40px;
    color: red;
    border: 1px solid red;
    border-radius: 5px;
  }
  & > span {
    color: #fc6963;
    margin: 10px;
    font-weight: bold;
    font-size: 18px;
  }
  & > textarea {
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    height: 90px;
    border: 2px solid #ddd;
    border-radius: 10px;
    color: #777;
    font-size: 15px;
  }
  & > button {
    cursor: pointer;
    width: 70px;
    height: 40px;
    background: none;
    border: 2px solid #fc6963;
    border-radius: 5px;
    color: #fc6963;
    font-weight: bold;
    font-size: 15px;
    &:hover {
      background: #fc6963;
      color: #fff;
      transition: 100ms;
    }
  }
`;
