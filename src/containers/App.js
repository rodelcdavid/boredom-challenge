import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from '../components/Nav';
import Home from '../pages/Home';
import Motivation from '../pages/Motivation';
import DayChallenge from '../pages/DayChallenge';
import Challenges from '../pages/Challenges/Challenges';
import {StatusProvider, ProgressProvider} from '../context/Context';



function App() {
    
  return (
    <StatusProvider>
    <ProgressProvider>
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/motivation' component={Motivation}/>
          <Route path='/challenges' exact component={Challenges}/>
          <Route path='/challenges/:day' component={DayChallenge}/>
        </Switch>
      </Router>
    </ProgressProvider>
    </StatusProvider>

  );
}

export default App;
