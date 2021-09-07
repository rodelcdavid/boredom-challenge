import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Motivation from './components/Motivation';
import Challenges from './components/Challenges';

function App() {
  return (
    <>
    <Router basename='/boredom-challenge'>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/motivation' component={Motivation}/>
        <Route path='/challenges' component={Challenges}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
