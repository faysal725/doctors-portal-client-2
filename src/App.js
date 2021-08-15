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
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Patients from './components/Dashboard/Patients/Patients';
import DashboardAll from './components/Dashboard/DashboardAll/DashboardAll';
import Prescription from './components/Dashboard/Prescription/Prescription';


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
        <Route path="/dashboard/dashboardAll">
              <DashboardAll></DashboardAll>
        </Route>
        <Route path="/dashboard/prescription">
              <Prescription></Prescription>
        </Route>
        <Route path="/dashboard/appointment">
              <Dashboard></Dashboard>
        </Route>
        <Route path="/dashboard/patients">
              <Patients></Patients>
        </Route>
        <Route path="/login">
              <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
