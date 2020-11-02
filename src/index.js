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
    <Route exact path={"/portfolio"} component={Top} />
    <Route path={"/portfolio/about"} component={About} />
    <Route path={"/portfolio/skil"} component={Skil} />
    <Route path={"/portfolio/work"} component={Work} />
    <Route path={"/portfolio/contact"} component={Contact} />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
