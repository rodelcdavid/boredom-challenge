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


  const savedStatus = JSON.parse(localStorage.getItem('dayStatus')) || [];
  const savedProgress = JSON.parse(localStorage.getItem('progress')) || 0;

  const [dayStatus, setDayStatus] = useState(savedStatus);
  const [progress, setProgress] = useState(savedProgress);

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

       const tempProgress = progress + 1;
       setProgress(tempProgress);
    };

    const handleOnClickReset = () => {
        setDayStatus([]);
        setProgress(0);
    }

    const handleOnClickStart = () => {
      setProgress(progress+1)
    }


    useEffect(() => {
      localStorage.dayStatus = JSON.stringify(dayStatus);
      localStorage.progress = JSON.stringify(progress);
    }, [dayStatus, progress])
    
    
  return (
    <StatusContext.Provider value ={{dayStatus, handleOnClickStatus, handleOnClickReset}}>
    <ProgressContext.Provider value = {{progress, handleOnClickStart}}>

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
