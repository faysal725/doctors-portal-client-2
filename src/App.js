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
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



export const UserContext = createContext();
export const LogoutContext = createContext()



function App() {
      const [loggedInUser, setLoggedInUser] = useState([])
  return (

   <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
   <Router>
      <Switch>
        <Route exact path="/">
              <Home></Home>
        </Route>
        <Route path="/appointment">
              <Appointment></Appointment>
        </Route>
        <PrivateRoute path="/dashboard/dashboardAll">
              <DashboardAll></DashboardAll>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/prescription">
              <Prescription></Prescription>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/appointment">
              <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/patients">
              <Patients></Patients>
        </PrivateRoute>
        <Route path="/login">
              <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
