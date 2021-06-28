import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/signin";
import PrivateRoute from "./Components/HOC/PrivateRoute";
import { useSelector, useDispatch } from "react-redux";
import { isUserLoggedIn } from "./actions/auth.actions";
import Assignment from "./Components/Assignments";

function App() {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (!auth.authenticate) {
  //     dispatch(isUserLoggedIn());
  //   }
  // }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/assignments" component={Assignment} />
        <Route
          path="/class-recordings"
          component={() => {
            return <hi>assignments</hi>;
          }}
        />
        <Route
          path="/study-material"
          component={() => {
            return <hi>assignments</hi>;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
