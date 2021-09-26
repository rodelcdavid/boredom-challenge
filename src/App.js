import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/shared/Nav";
import { StatusProvider, ProgressProvider } from "./context/Context";
import { Home, Motivation, Challenges, DayChallenge } from "./components";

function App() {
  return (
    <StatusProvider>
      <ProgressProvider>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/motivation" component={Motivation} />
            <Route path="/challenges" exact component={Challenges} />
            <Route path="/challenges/:day" component={DayChallenge} />
          </Switch>
        </Router>
      </ProgressProvider>
    </StatusProvider>
  );
}

export default App;
