import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Motivation from './components/Motivation';
import Challenges from './components/Challenges';
import Day1 from './components/Day1';
import Day2 from './components/Day2';

function App() {

  return (
    <>
    <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/motivation' component={Motivation}/>
        <Route path='/challenges' component={Challenges}/>

        <Route path='/day1' component={Day1}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
