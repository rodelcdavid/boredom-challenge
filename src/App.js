import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Motivation from './components/Motivation';
import Challenges from './components/Challenges';
import DayChallenge from './components/day-challenge/DayChallenge';
import {StatusContext, ProgressContext} from './context/Context';
import { useEffect, useState } from 'react';

function App() {

  //move to context
  const defaultDayStatus = ['todo'].concat(Array(29).fill('locked'));
  const savedStatus = JSON.parse(localStorage.getItem('dayStatus')) || defaultDayStatus;

  const [dayStatus, setDayStatus] = useState(savedStatus);
  const [currentDayProgress, setCurrentDayProgress] = useState(0);

//componentdidmount
//move to challenges (when challenges mounted)
useEffect(() => {
  const date = new Date()
  console.log(date);
  const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  // const currentDate = new Date(2021, 8, 25);
  const startingDateString = JSON.parse(localStorage.getItem('startingDate'))
  const startingDate = new Date(startingDateString);


  if (startingDateString === null) {
    const tempProgress = 0;
    setCurrentDayProgress(tempProgress);
  } else {
    const tempProgress = Math.ceil((currentDate - startingDate)/(1000 * 60 * 60 * 24) + 1);
    setCurrentDayProgress(tempProgress);

 
    const savedStatus = JSON.parse(localStorage.getItem('dayStatus'))
    const tempDayStatus = savedStatus.map((item, i)=>{
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
}, [])

//move to DayChallenge
    const handleOnClickStatus = (e) => {
      const tempDayStatus = [...dayStatus]
      const index = Number(e.target.getAttribute('day').substr(3));

       if(e.target.innerHTML === 'Failed') {
          tempDayStatus[index-1] = 'failed'
          setDayStatus(tempDayStatus);       
       }
       if(e.target.innerHTML === 'Done') {
          tempDayStatus[index-1] = 'done'
          setDayStatus(tempDayStatus);
       }
    };


//move to challenges
    const handleOnClickReset = () => {
        setDayStatus(defaultDayStatus);
        
       localStorage.removeItem('startingDate')
       setCurrentDayProgress(0);
    }

//move to challenges
    const handleOnClickStart = () => {
      const date = new Date();
      const startingDate = new Date (date.getFullYear(), date.getMonth(), date.getDate())
      localStorage.startingDate = JSON.stringify(startingDate);
      setCurrentDayProgress(currentDayProgress+1);
    }


//move to challenges
    useEffect(() => {
      localStorage.dayStatus = JSON.stringify(dayStatus);
    }, [dayStatus])
    
    
  return (
    <StatusContext.Provider value ={{dayStatus, handleOnClickStatus, handleOnClickReset}}>
    <ProgressContext.Provider value = {{currentDayProgress, handleOnClickStart}}>

    <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/motivation' component={Motivation}/>
        <Route path='/challenges' exact component={Challenges}/>
        <Route path='/challenges/:day' component={DayChallenge}/>
      </Switch>
    </Router>
    </ProgressContext.Provider>
    </StatusContext.Provider>
  );
}

export default App;
