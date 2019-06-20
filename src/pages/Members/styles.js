import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MemberTable = styled.div`
  padding: 25px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  & > strong {
    font-size: 20px;
    color: #fc6963;
  }
  & > hr {
    margin-top: 10px;
    border-top: 1px solid #fc6963;
  }
  & > table {
    border-collapse: collapse;
    width: 100%;
    tr {
      & > td {
        padding: 15px;
        border-bottom: 1px solid #fc6963;
        color: #5e5e5e;
      }
      & > th {
        padding: 15px;
        border-bottom: 1px solid #fc6963;
        color: #fc6963;
      }
      &:hover {
        background: #f2f2f2;
      }
    }
  }
`;
