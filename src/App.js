import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Motivation from './components/Motivation';
import Challenges from './components/Challenges';
import DayChallenge from './components/day-challenge/DayChallenge';

function App() {

  return (
    <>
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
    </>
  );
}

export default App;
