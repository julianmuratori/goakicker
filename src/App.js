import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

// components
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";

// styles
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Navbar />
        <Dashboard />
      </MuiThemeProvider>
    );
  }
}

export default App;
