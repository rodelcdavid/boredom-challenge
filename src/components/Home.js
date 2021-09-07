import styled from "styled-components"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <MainWrapper>
        <h1>Get your brain to focus more.</h1>
        <p>Take back your attention span by embracing boredom.</p>

        <div style={{marginTop: '2rem'}}>

        <StyledLink to='/motivation'>Motivation</StyledLink>
        <StyledLink to='/challenges'>Start the challenge!</StyledLink>
        </div>
        </MainWrapper>
    )

}

const MainWrapper = styled.div`
    text-align: center;
    padding: 2rem;
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