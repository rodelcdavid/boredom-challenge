import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"
import { ProgressContext } from "../context/Context"
import { useContext } from "react"

const Home = () => {
    const {currentDayProgress} = useContext(ProgressContext);

    const StartContinue = () => {
        if (currentDayProgress===0) {
            return (
                <StyledLink to='/challenges'>Start the challenge!</StyledLink>
            )
        } else {
            return (
                <StyledLink to='/challenges'>Continue the challenge!</StyledLink>
            )
        }
    }

    return (
        <MainWrapper>
        <h1 style={{fontSize:'3rem'}}>Get your brain to focus more.</h1>
        <p>Take back your attention span by embracing boredom.</p>

        <div style={{marginTop: '2rem'}}>

        <StyledLink to='/motivation'>Motivation</StyledLink>
        <StartContinue/>
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