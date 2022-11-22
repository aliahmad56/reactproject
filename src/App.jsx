import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Service";
import About from "./Contact";
import Service from "./About";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
import Login from "./Login";
import Registration from "./Registration";
import { Switch, Route } from "react-router-dom";
const App=() =>{
  return (
    <>
    
    
    
      {/* <Navbar /> */}
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Registration} />
      <Route exact path="/" component={Home} />
      <Route exact path="/servicee" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
    </Switch>

    {/* <Footer /> */}
    </>
  );
};
export default App;

