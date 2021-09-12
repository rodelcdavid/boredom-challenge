import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react";

const Challenges = () => {


const dayStatus = ['current'].concat(Array(29).fill('locked'));

// const [dayStatus, setDayStatus] = useState(defaultDayStatus)
    const generateDays = () => {
        const daysArray = []
        for (let i=1; i<=30; i++) {
            daysArray.push(<Challenge
                className='animate__animated animate__zoomIn'
                delay={Math.random() * 1}
                key={i}
                status={dayStatus[i-1]}
                to={`/challenges/day${i}`}
                >{i}</Challenge>)
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




export const Challenge = styled(Link).attrs( props => ({
    style: {
        animationDelay: `${props.delay}s`
    }
})

)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    color: black;
    text-decoration: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 150ms ease-in;
    background-color: ${({status}) => {
        switch (status) {
            case 'failed':
                return 'red'
            case 'done':
                return 'lightgreen'
            case 'current':
                return 'lightblue'
            default:
                return 'lightsalmon'
        }
    }};
   
    &:hover {
        box-shadow: 0 0 10px darkgreen;
    }
   
`

export default Challenges