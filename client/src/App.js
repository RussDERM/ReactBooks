import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// * React Imports
// import NavbarComp from "./components/Navbar/Navbar";
// import Fourohfour from "./pages/Fourohfour";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

// *Styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // <span>Hola!</span>
    <>
      <Container>
        {/* <NavbarComp /> */}
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
            </Switch>
          </div>
        </Router>
      </Container>
    </>
  );
}

export default App;
