import styled from "styled-components"
import { Link } from "react-router-dom"

const Nav = () => {

return (
    <NavbarContainer>
        <StyledLink className='logo' to='/boredom-challenge'>30-Day Boredom</StyledLink>
        <MenuLinks>
            <StyledLink to='/boredom-challenge/challenges'>Challenges</StyledLink>
            <StyledLink to='/boredom-challenge/motivation'>Motivation</StyledLink>
            <StyledLink to='/boredom-challenge'>Home</StyledLink>
        </MenuLinks>
    </NavbarContainer>
)
}

const NavbarContainer = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 1rem;
    
    background-color: lightblue;

    @media only screen and (min-width: 600px) {
            
            flex-direction: row;
    }
`

const MenuLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    padding: 0 1rem;
    font-size: 1rem;
    transition: all 150ms ease-in;

    &:hover {
        color: #F8F0DF;
    }

    &.logo {
        font-size: 2rem;
        
    }

    &.logo:hover {
        color:black;
    }


    @media only screen and (min-width: 600px) {
        &.logo {
        margin-right: auto;
    }
    }

  
`

export default Nav