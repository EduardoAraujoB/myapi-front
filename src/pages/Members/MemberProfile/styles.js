import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 0 30px 0 30px;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 0 20px 20px 20px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  & > strong {
    margin: 20px 0 20px;
    font-size: 23px;
    color: #fc6963;
  }
  & > span {
    display: flex;
    width: 100%;
    margin: 10px;
    text-align: left;
    color: #5e5e5e;
    font-weight: bold;
    font-size: 18px;
    & > p {
      margin-left: 5px;
      font-weight: normal;
      color: #888888;
    }
  }
`;
