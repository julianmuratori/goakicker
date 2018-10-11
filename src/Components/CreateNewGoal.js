import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
// import moment from "moment";
import {
  Typography,
  Paper,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
  Grid
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
/* eslint-disable */
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
// pick utils
// import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import MomentUtils from "material-ui-pickers/utils/moment-utils";
import DatePicker from "material-ui-pickers/DatePicker";
import moment from "moment";

const styles = theme => ({
  root: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  formControl: {
    minWidth: 120
  },
  paper: {
    padding: theme.spacing.unit * 2
  }
});

class CreateNewGoal extends Component {
  state = {
    goalName: null,
    goalDate: null,
    goalCategory: "",
    goalPriority: "",
    goalDesc: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDateChange = date => {
    // formats the date via momentjs
    const formattedDate = date.format();
    this.setState({ goalDate: formattedDate });
  };

  handleSubmit = e => {
    const { submitGoal } = this.props;
    e.preventDefault();
    const goal = this.state;
    submitGoal(goal);
  };

  render() {
    const { classes } = this.props;
    const { goalDate, goalPriority, goalCategory } = this.state;

    return (
      <form action="" className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="display1" align="center" gutterBottom>
            Create New Goal
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                placeholder="Goal Name"
                name="goalName"
                onChange={this.handleChange}
                fullWidth
                className={classes.formControl}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                  required
                  placeholder="Pick a Due Date"
                  fullWidth
                  className={classes.formControl}
                  onChange={this.handleDateChange}
                  value={goalDate}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="category">Category</InputLabel>
                <Select
                  required
                  name="goalCategory"
                  onChange={this.handleChange}
                  value={goalCategory}
                >
                  <MenuItem value="financial">Financial</MenuItem>
                  <MenuItem value="career">Career</MenuItem>
                  <MenuItem value="friends">Friends</MenuItem>
                  <MenuItem value="travel">Travel</MenuItem>
                  <MenuItem value="health">Health</MenuItem>
                  <MenuItem value="family">Family</MenuItem>
                  <MenuItem value="education">Education</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="Category">Priority Level</InputLabel>
                <Select
                  required
                  onChange={this.handleChange}
                  name="goalPriority"
                  value={goalPriority}
                >
                  <MenuItem value="" disabled>
                    Priority Level
                  </MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                name="goalDesc"
                fullWidth
                placeholder="Leave a short description"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={this.handleSubmit}
              >
                Add <AddIcon />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    );
  }
}

CreateNewGoal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateNewGoal);
