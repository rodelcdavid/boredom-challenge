import styled from "styled-components"
import { Link } from "react-router-dom"
import {StatusContext, ProgressContext } from "../context/Context";
import { useContext } from "react";

const Challenges = () => {
const {dayStatus, handleOnClickReset} = useContext(StatusContext)
const {currentDayProgress, handleOnClickStart} = useContext(ProgressContext)


//why is this always rerendering
    const DaysArray = () => {
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

   const displayDayProgress = (currentDayProgress > 30) ? 30 : currentDayProgress;
    
    if (currentDayProgress > 0) {
        return (
            <>
       
            <h1 style={{textAlign: "center", marginTop: "2rem"}}>Challenges</h1>
            <p style= {{textAlign:'center'}}>Current Day: {displayDayProgress}/30</p>
         
            <ChallengeGrid>            
            
                <DaysArray/>
                
            </ChallengeGrid>
            <button style={{display: 'block', margin: '0 auto', width: '100px'}} onClick={handleOnClickReset}>Reset</button>
            </>
        )
    } else {
        return (
            <div style = {{display:'flex', justifyContent:'center', alignItems:'center', height:'200px'}}>
            <button onClick = {handleOnClickStart}>Start the Challenge</button>
            </div>
        )
    }
        
        

    

    
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
    font-weight: bolder;
    text-decoration: none;
    border: solid 2px black;
    border-radius: 10px;
    cursor: pointer;
    transition: all 150ms ease-in;

    /* TODO: change this bg color */
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


    /* &.done, &.failed {
        pointer-events: none;
       
    } */

    /* TODO: refactor if statement */
    .done&::after {
        content: "";
        background-image: url("https://cdn-icons-png.flaticon.com/512/190/190411.png");
        background-size: 30px 30px;
        position: absolute;
        top: 11px;
        left: 11px;
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
        width: 30px;
        height: 30px;
    }

    .locked&::after{
        content: "";
        background-image: url("https://cdn-icons-png.flaticon.com/512/2913/2913133.png");
        background-size: 20px 20px;
    position: absolute;
    top: -5px;
    left: 35px;
    width: 20px;
    height: 20px;
    }
   
    &:hover {
        box-shadow: 0 0 10px darkgreen;
    }
   
`

export default Challenges