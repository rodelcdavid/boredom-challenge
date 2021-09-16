import styled from "styled-components"
import { Link } from "react-router-dom"
import StatusContext from "../context/Status";

const Challenges = () => {

    const DaysArray = ({dayStatus}) => {
        const daysArray = []
        for (let i=1; i<=30; i++) {
            daysArray.push(<Challenge
                className={`animate__animated animate__zoomIn ${dayStatus[i-1]}`}
                delay={Math.random() * 1}
                key={i}
                to={`/challenges/day${i}`}
                >{i}</Challenge>)
        }    
        return daysArray
    }

    return (
        <>
        <h1 style={{textAlign: "center", marginTop: "2rem"}}>Challenges</h1>
        <ChallengeGrid>
        <StatusContext.Consumer>
            {({dayStatus, handleOnClickReset}) => (
            <>
            <DaysArray dayStatus = {dayStatus}/>
            <button onClick={handleOnClickReset}>Reset</button>
            </>
            )}
        </StatusContext.Consumer>
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
                return 'lightblue'
        }
    }};
    position: relative;


    &.done, &.failed {
        pointer-events: none;
       
    }

    /* TODO: refactor if statement */
    .done&::after {
        content: "";
        background-image: url("https://cdn-icons-png.flaticon.com/512/190/190411.png");
        background-size: 30px 30px;
        position: absolute;
        top: 11px;
        left: 11px;
        color: green;
        width: 30px;
        height: 30px;
    }

    .failed&::after {
        content: "";
        background-image: url("https://cdn-icons-png.flaticon.com/512/753/753345.png");
        background-size: 30px 30px;
        position: absolute;
        top: 11px;
        left: 11px;
        color: green;
        width: 30px;
        height: 30px;
        
    }
   
    &:hover {
        box-shadow: 0 0 10px darkgreen;
    }
   
`

export default Challenges