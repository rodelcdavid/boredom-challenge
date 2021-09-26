import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  background-color: #14213d;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const MenuLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: #e5e5e5;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1rem;
  transition: all 150ms ease-in;

  &:hover {
    color: #fca311;
  }

  &.logo {
    font-size: 2rem;
  }

  &.logo:hover {
    color: #e5e5e5;
  }

  @media only screen and (min-width: 600px) {
    &.logo {
      margin-right: auto;
    }
  }
`;
