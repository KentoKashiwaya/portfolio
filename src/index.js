import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./component/Header"
import Top from "./component/Top";
import About from "./component/About";
import Skil from "./component/Skil";
import Work from "./component/Work";
import Contact from "./component/Contact";


import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Header/>
    <Route exact path={"/"} component={Top} />
    <Route path={"/about"} component={About} />
    <Route path={"/skil"} component={Skil} />
    <Route path={"/work"} component={Work} />
    <Route path={"/contact"} component={Contact} />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
