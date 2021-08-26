import React from 'react';
import {Switch, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import Header from './component/Header';

import "./assets/css/style.css";

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;