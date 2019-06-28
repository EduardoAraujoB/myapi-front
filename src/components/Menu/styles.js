import styled from "styled-components";

export const Logo = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-left: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
`;

export const MenuBarOpen = styled.div`
  display: none;
  flex: 1;
  padding: 20px;
  & > button {
    cursor: pointer;
    background: none;
  }
`;

export const MenuBarClose = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: auto;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #fc6963;
  padding: 20px;
  & > button {
    cursor: pointer;
    background: none;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  background: white;
  bottom: 0;
  width: 100%;
  height: 100%;
  ${({ active }) =>
    active
      ? `transform: translateX(0);
    transition: transform 200ms linear;`
      : `transform: translateX(-100%);
      transition: transform 200ms linear;`}
  & > ul {
    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 75px;
      border-bottom: 1px solid #fc6963;
      & > a {
        color: #fc6963;
        font-size: 25px;
      }
    }
  }
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

export const Header = styled.nav`
  background: #fc6963;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 75px;
  @media only screen and (max-width: 980px) {
    & > ${MenuButtonContainer} {
      display: none;
    }
    & > ${MenuBarOpen} {
      display: flex;
      flex: 0;
    }
    & > ${Logo} {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 74px;
      flex: 1;
    }
  }
`;
