import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Motivation from './components/Motivation';
import Challenges from './components/Challenges';

function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Switch>
        <Route path='/boredom-challenge' exact component={Home}/>
        <Route path='/boredom-challenge/motivation' component={Motivation}/>
        <Route path='/boredom-challenge/challenges' component={Challenges}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
