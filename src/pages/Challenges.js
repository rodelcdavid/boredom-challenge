import styled from "styled-components"
import { Link } from "react-router-dom"
import {StatusContext, ProgressContext } from "../context/Context";
import { useCallback, useContext, useEffect } from "react";

const Challenges = () => {
const {dayStatus, setDayStatus, defaultDayStatus} = useContext(StatusContext)
const {currentDayProgress, setCurrentDayProgress} = useContext(ProgressContext)

//Challenges componentdidmount
//TODO: solve the useffect warning without disabling eslint
useEffect(() => {
   
    const date = new Date()
    // const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const currentDate = new Date(2021, 8, 25);
    const startingDateString = JSON.parse(localStorage.getItem('startingDate'))
    const startingDate = new Date(startingDateString);
  
  
    if (startingDateString === null) {
      const tempProgress = 0;
      setCurrentDayProgress(tempProgress);
    } else {
      const tempProgress = Math.ceil((currentDate - startingDate)/(1000 * 60 * 60 * 24) + 1);
      setCurrentDayProgress(tempProgress);
  
   

      //Status
      
   
      const tempDayStatus = dayStatus.map((item, i)=>{
          if (((i+1)<=tempProgress) && item!=='failed' && item!=='done') {
            return "todo";
          } else if ((i+1)>tempProgress) { // just to make sure if they go back in date it will lock future
            return "locked";
          } else {
            return item;
          }
      })
      setDayStatus(tempDayStatus);
    }
    // eslint-disable-next-line
  }, [])



//Reset Button
   const handleOnClickReset = () => {
        setDayStatus(defaultDayStatus);
        
       localStorage.removeItem('startingDate')
       setCurrentDayProgress(0);
    }


//Start Challenge
    const handleOnClickStart = () => {
        const date = new Date();
        const startingDate = new Date (date.getFullYear(), date.getMonth(), date.getDate())
        localStorage.startingDate = JSON.stringify(startingDate);
        setCurrentDayProgress(currentDayProgress+1);
      }

//save to localstorage everytime daystatus change
      useEffect(() => {
        localStorage.dayStatus = JSON.stringify(dayStatus);
      }, [dayStatus])


//why is this always rerendering
    const DaysArray = useCallback(() => {
        const daysArray = []
        for (let i=1; i<=30; i++) {
            daysArray.push(<Challenge
                className={`animate__animated animate__zoomIn ${dayStatus[i-1]}`}
                currentdayprogress = {currentDayProgress}
                index = {i}
                delay={Math.random() * 1}
                key={i}
                to={`/challenges/day${i}`}
                >{i}</Challenge>)
        }    
        return daysArray
    }, [currentDayProgress, dayStatus]);

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
    /* border: solid 2px black; */
    border-radius: 10px;
    cursor: pointer;
    transition: all 150ms ease-in;
    background-color: lightblue;/* TODO: change this bg color */
    position: relative;
    border: ${({index, currentdayprogress})=>{
        if ((index)===currentdayprogress){
            return 'solid 4px green'
        } else {
            return 'solid 2px black'
        }
    }};

    &:hover {
        box-shadow: 0 0 10px darkgreen;
    }
    
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
`

export default Challenges