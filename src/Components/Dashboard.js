import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import CreateNewGoal from "./CreateNewGoal";

class Dashboard extends Component {
  render() {
    return (
      <div className="wrapper">
        <Typography variant="display1">Dashboard</Typography>
        <CreateNewGoal />
      </div>
    );
  }
}

export default Dashboard;
