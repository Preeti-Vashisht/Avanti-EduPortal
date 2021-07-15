import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./containers/Home";
import StudyMaterial from "./containers/Study-Material";
import ClassRecordings from "./containers/Class-Recordings";
import Signin from "./containers/signin";
import PrivateRoute from "./Components/HOC/PrivateRoute";
import { useSelector, useDispatch } from "react-redux";
import { isUserLoggedIn } from "./actions/auth.actions";
import Subjects from "./containers/Subjects";
import Assignment from "./containers/Assignment";
import CheckGrades from "./containers/CheckGrades";

function App() {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <PrivateRoute path="/assignments" component={Subjects} />
          <PrivateRoute path="/view-assignment" component={Assignment} />
          <PrivateRoute path="/check-marks" component={CheckGrades} />
          <PrivateRoute path="/class-recordings" component={ClassRecordings} />
          <PrivateRoute path="/study-material" component={StudyMaterial} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
