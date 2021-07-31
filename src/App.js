import './App.css';
import {
  BrowserRouter as Router,Switch,Route
} from "react-router-dom";
import Home from "./components/Home/Home/Home"
import Appointment from './components/Appointment/Appointment/Appointment';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashnoard/Dashboard/Dashboard';
import AllAppointments from './components/Dashnoard/AllAppointments/AllAppointments/AllAppointments';
import InfoDashboard from './components/Dashnoard/InfoDashboard/InfoDashboard/InfoDashboard';
import AddDoctor from './components/Dashnoard/AddDoctor/AddDoctor/AddDoctor';
import PrivateRoute from '../src/components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/dashboard/appointment">
            <Dashboard/>
          </Route>
          <Route path="/dashboard/allAppointments">
            <AllAppointments/>
          </Route>
          <PrivateRoute path="/dashboard/infoDashboard">
            <InfoDashboard/>
          </PrivateRoute>
          <Route path="/dashboard/addDoctor">
            <AddDoctor/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
