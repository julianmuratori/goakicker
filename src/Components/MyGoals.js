import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import Goal from "./Goal";

const styles = theme => ({});

class MyGoals extends Component {
  render() {
    const { goals } = this.props;

    return (
      <div>
        <Typography variant="display1">My Goals</Typography>

        <Grid container spacing={24}>
          <Grid item xs={12}>
            {goals.map(i => {
              return <Goal goal={i} key={i} />;
            })}
          </Grid>
        </Grid>
      </div>
    );
  }
}

MyGoals.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyGoals);
