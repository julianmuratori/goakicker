import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

const styles = theme => ({
  root: {
    display: "flex"
  },
  name: {
    flexGrow: 1
  },
  goaldetails: {
    minWidth: "250px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  goalDate: {
    width: "100%"
  }
});

class Goal extends Component {
  render() {
    const { goal, classes } = this.props;
    return (
      <Card>
        <CardContent className={classes.root}>
          <Typography gutterBottom className={classes.name}>
            {goal.goalName}
          </Typography>
          <div className={classes.goaldetails}>
            <Typography className={classes.goalDate}>
              {goal.goalDate}
            </Typography>
            <Typography>{goal.goalCategory}</Typography>
            <Typography>{goal.goalPriority}</Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
}

Goal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Goal);
