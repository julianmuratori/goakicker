import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import CreateNewGoal from "./CreateNewGoal";
import MyGoals from "./MyGoals";
import moment from "moment";

class Dashboard extends Component {
  state = {
    goals: []
  };

  submitGoal = goal => {
    const { goals } = this.state;
    goals.push(goal);
    this.setState({ goals });
  };
  render() {
    return (
      <div className="wrapper">
        <Typography variant="display1">Dashboard</Typography>
        <CreateNewGoal submitGoal={this.submitGoal} />
        <MyGoals goals={this.state.goals} />
      </div>
    );
  }
}

export default Dashboard;
