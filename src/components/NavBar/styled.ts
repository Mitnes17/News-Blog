import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 72px 10px 72px;
  background-color: #367588;
  z-index: 10;
`;

export const Menu = styled.nav`
  display: flex;
  column-gap: 100px;
`;

export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:hover {
    color: black;
    transition: 0.3s ease-in-out;
  }
`;

export const Logo = styled(Link)`
  width: 40px;
  height: auto;

  img {
    width: inherit;
    height: inherit;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 2;
  margin-left: 40px;
`;
