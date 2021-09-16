import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Motivation from './components/Motivation';
import Challenges from './components/Challenges';
import DayChallenge from './components/day-challenge/DayChallenge';
import StatusContext from './context/Status';
import { useEffect, useState } from 'react';

function App() {


  const savedStatus = JSON.parse(localStorage.getItem('dayStatus')) || [];
 
  const [dayStatus, setDayStatus] = useState(savedStatus);

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

    const handleOnClickReset = () => {
        setDayStatus([]);
    }

    useEffect(() => {
      localStorage.dayStatus = JSON.stringify(dayStatus);
    }, [dayStatus])
    
    
  return (
    <StatusContext.Provider value ={{dayStatus, handleOnClickStatus, handleOnClickReset}}>
    <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/motivation' component={Motivation}/>
        <Route path='/challenges' exact component={Challenges}/>

        <Route path='/challenges/:day' component={DayChallenge}/>
      </Switch>
    </Router>
    </StatusContext.Provider>
  );
}

export default App;
