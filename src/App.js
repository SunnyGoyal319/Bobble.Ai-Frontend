import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';

import Login from "./Components/login.component";
import SignUp from "./Components/signup.component";
import Facebook from "./Components/Facebook";

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Bobble.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     

      <div className="auth-wrapper">
        <div className="auth-inner">
        <div></div>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
          <div id="google">
        <GoogleLogin
        clientId="196930537623-fat0ldludrki8t6fgm7r35l07ea8ls4l.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}/>
        </div>
        <div id="facebook"><Facebook/></div>
        </div>
      </div>  
    </div></Router>
  );
}

export default App;