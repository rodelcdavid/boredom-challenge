import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Motivation from './components/Motivation';
import Challenges from './components/Challenges';
import DayChallenge from './components/day-challenge/DayChallenge';
import StatusContext from './context/Status';
import { useEffect, useState } from 'react';
import {useHistory} from 'react-router'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.development';

function App() {


  const savedStatus = JSON.parse(localStorage.getItem('dayStatus')) || [];
 
  const [dayStatus, setDayStatus] = useState(savedStatus);
//   const history = useHistory();
// const doSomething = () => {
//     return (
//         alert("Failed")
//     )
// }





    const handleOnClick = (e) => {
      // console.log('target', e.target);
      //   console.log(e.target.getAttribute('day').substr(3));
        
       if(e.target.innerHTML === 'Failed') {
           //setstate daystatus, currentprogress => depending on attribute 'day'
           const index = Number(e.target.getAttribute('day').substr(3));
           dayStatus[index-1] = 'failed'
          localStorage.dayStatus = JSON.stringify(dayStatus)
           setDayStatus(dayStatus);
          //  doSomething();
           //send the state to the challenge page
       }
       if(e.target.innerHTML === 'Done') {
        const index = Number(e.target.getAttribute('day').substr(3));
        dayStatus[index-1] = 'done'
        localStorage.dayStatus = JSON.stringify(dayStatus)

        setDayStatus(dayStatus);

           //setstate daystatus, currentprogress
       }
        // e.preventDefault(); //prevent transition
        // doSomething();
    
        // // redirect after 1 second
        // window.setTimeout(() => {
        //    history.push('/challenges');
        // }, 1000)

        if(e.target.innerHTML === 'Reset') {
          localStorage.dayStatus = JSON.stringify([]); // or null
          setDayStatus([]);
        }
    };





  return (
    <StatusContext.Provider value ={{dayStatus, handleOnClick}}>
    <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/motivation' component={Motivation}/>
        <Route path='/challenges' exact component={Challenges}/>

        <Route path='/challenges/:day' component={DayChallenge}/>
        {/* <Route path='/day2' component={Days.Day2}/> */}
      </Switch>
    </Router>
    </StatusContext.Provider>
  );
}

export default App;
