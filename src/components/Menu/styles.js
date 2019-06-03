import styled from "styled-components";

export const Header = styled.div`
  background: #fc6963;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
`;

export const Logo = styled.a`
  flex-grow: 1;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
`;

export const Title = styled.span`
  flex-grow: 1;
  margin-left: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

export const MenuButton = styled.a`
  background: none;
  padding: 10px;
  margin: 0 4px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
  border: 2px solid #fff;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background: #fff;
    color: #fc6963;
    border: 2px solid #fc6963;
  }
  &:active {
    border: 2px solid #fff;
    color: #fff;
    border-radius: 10px;
    background: none;
  }
`;
