import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

const styles = theme => ({
  root: {
    display: "flex"
  }
});

class Goal extends Component {
  render() {
    const { goal, classes } = this.props;
    return (
      <Card>
        <CardContent className={classes.root}>
          <Typography gutterBottom>{goal.goalName}</Typography>

          <Typography>{goal.goalCategory}</Typography>
          <Typography>{goal.goalDate}</Typography>
          <Typography>{goal.goalPriority}</Typography>
        </CardContent>
      </Card>
    );
  }
}

Goal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Goal);
