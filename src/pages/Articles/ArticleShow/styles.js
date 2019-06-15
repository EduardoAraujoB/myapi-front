import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px;
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
    text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
  }
  & > p {
    margin: 30px;
    font-size: 20px;
  }
  & > span {
    margin: 30px;
    font-size: 20px;
    font-weight: bold;
    text-align: right;
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
  & > p {
    margin: 10px 0 0 10px;
  }
`;
