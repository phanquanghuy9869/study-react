import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topics">Topic</Link>
            </li>
          </ul>
        </nav>
        <Switch> 
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> 
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h2>Home</h2>
}

const About = () => {
  return <h2>About</h2>
}

const Users = () => {
  return <h2>Users</h2>
}

const Topics = () => {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/state`}>State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic></Topic>
        </Route>
        <Route path={`${match.path}`}>
          <h3>Please select a topic</h3>
        </Route>
      </Switch>
    </div>
  )
}

const Topic = () => {
  let {topicId} = useParams();
  return <h3>Request topic: {topicId}</h3>
}

export default App;
