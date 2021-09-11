import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"
import { MainWrapper } from "./Home"
const Challenges = () => {


    const generateDays = () => {
        const daysArray = []
        for (let i=1; i<=30; i++) {
            daysArray.push(<Challenge className='animate__animated animate__zoomIn' delay={Math.random() * 1} key={i} to={`/challenges/day${i}`}>{i}</Challenge>)
        }
        return daysArray
    }

    return (
        <>
        <h1 style={{textAlign: "center", marginTop: "2rem"}}>Challenges</h1>
        <ChallengeGrid>
            {generateDays()}
        </ChallengeGrid>
        </>
    )
}

const ChallengeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 50px);
    grid-template-rows: repeat(6, 50px);
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`




const Challenge = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-align: center;
    padding: 0.9rem 0; */
    width: 50px;
    height: 50px;
    color: black;
   
    
    text-decoration: none;
   
    background-color: lightsalmon;
    border-radius: 10px;
    cursor: pointer;
    transition: all 150ms ease-in;
    animation-delay: ${({delay}) => delay}s;
    

    &:hover {
      
        box-shadow: 0 0 10px darkgreen;

    }
   
`

export default Challenges