import styled from "styled-components"
import { Link } from "react-router-dom"
import { ProgressContext } from "../context/Context"
import { useContext } from "react"
import { MainWrapper } from "../utils/MainWrapper"

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