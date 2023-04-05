import "./App.css";
import { useEffect , useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import Dashboard from "./component/Admin/Dashboard.js";


function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      {isAuthenticated && <UserOptions user={user} />}
      <Switch>
        <Route exact path="/" component={LoginSignUp} />
        {/* <Route exact path="/admin/dashboard" component={Dashboard} /> */}
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
      </Switch>
    </Router>
  );
}

export default App;
