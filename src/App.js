import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Homes/Home/Home';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Review from './Components/Homes/ReviewData/Review/Review';
import Login from './Components/Login/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
// import AddServices from './Components/Services/addServices/AddServices';
import NotMatch from './Components/NotMatch/NotMatch';
import AddReview from './Components/Homes/ReviewData/AddReview/AddReview';
import AddServices from './Components/Services/addServices/AddService';
import Order from './Components/OrderData/Order/Order';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <Router>
        <Switch>
          <PrivateRoute path="/review">
            <Review/>
          </PrivateRoute>
          <Route  exact path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/dashboard/addServices">
          {/* <Dashboard></Dashboard> */}
            <AddServices/>
          </Route>
          <Route path="/dashboard/addReview">
            <AddReview/>
          </Route>
          <Route path="/dashboard/order">
            <Order/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="*">
            <NotMatch/>
          </Route>
        </Switch>
      </Router>


       </UserContext.Provider>
      
    </div>
  );
}

export default App;
