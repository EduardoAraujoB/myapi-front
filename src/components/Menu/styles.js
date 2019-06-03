import styled from "styled-components";

export const Header = styled.div`
  background: #fc6963;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
`;

export const Logo = styled.h1`
  flex-grow: 1;
  color: #fff;
`;

export const Title = styled.span`
  flex-grow: 1;
  margin-left: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

export const Item = styled.a`
  padding: 10px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
  &:hover {
    cursor: pointer;
  }
`;
