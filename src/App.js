import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
              <Home></Home>
        </Route>
        <Route path="/appointment">
              <Appointment></Appointment>
        </Route>
        <Route path="/login">
              <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
