import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import ListingsPage from './components/ListingsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/test">
          <ListingsPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
