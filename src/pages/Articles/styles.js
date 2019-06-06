import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: row wrap;
  background: #000;
  margin: 0;
  width: 100%;
`;
export const Item = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  height: 400px;
  width: 400px;
  background: #fff;
  color: #000;
`;
