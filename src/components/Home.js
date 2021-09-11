import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <MainWrapper>
        <h1 style={{fontSize:'3rem'}}>Get your brain to focus more.</h1>
        <p>Take back your attention span by embracing boredom.</p>

        <div style={{marginTop: '2rem'}}>

        <StyledLink to='/motivation'>Motivation</StyledLink>
        <StyledLink to='/challenges'>Start the challenge!</StyledLink>
        </div>
        </MainWrapper>
    )

}

const fadeInContent = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const MainWrapper = styled.div`
    text-align: center;
    padding: 2rem;
    animation: 1s ${fadeInContent} ease-in;

    /* & h1 {
        width: 50%;
        margin: 0 auto;
    } */
`

const StyledLink = styled(Link)`
    display: block;
    color: black;
    text-decoration: none;
    padding: 1rem 2rem;

    &:hover {
        color: lightblue;
    }
`

export default Home