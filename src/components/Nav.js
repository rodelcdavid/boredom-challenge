import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavbarContainer>
      <StyledLink className="logo" to="/">
        30-Day Boredom
      </StyledLink>
      <MenuLinks>
        <StyledLink to="/challenges">Challenges</StyledLink>
        <StyledLink to="/motivation">Motivation</StyledLink>
        <StyledLink to="/">Home</StyledLink>
      </MenuLinks>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
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

const MenuLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
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

export default Nav;
