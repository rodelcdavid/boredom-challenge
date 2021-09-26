import { MenuLinks, StyledLink, NavbarContainer } from "./Nav.styled";

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

export default Nav;
