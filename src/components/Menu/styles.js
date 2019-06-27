import styled from "styled-components";

export const Header = styled.div`
  background: #fc6963;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 75px;
`;

export const Logo = styled.a`
  flex: 1;
  margin-left: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
`;

export const Title = styled.span`
  flex: 1;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

export const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: auto;
  flex: 1;
  margin: 5px;
`;

export const MenuButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 50px;
  margin: 5px;
  padding: 10px;
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
    transition: 100ms;
  }
  &:active {
    border: 2px solid #fff;
    color: #fff;
    background: none;
  }
`;
