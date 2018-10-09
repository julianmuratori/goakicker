import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
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
  render() {
    const { classes } = this.props;

    return (
      <form action="" className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="display1" align="center" gutterBottom>
            Create New Goal
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="Goal Name"
                id="goal-name"
                fullWidth
                className={classes.formControl}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker fullWidth className={classes.formControl} />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="Category">Category</InputLabel>
                <Select>
                  <MenuItem value="">Category</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="Category">Priority Level</InputLabel>
                <Select>
                  <MenuItem value="">Priority Level</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth placeholder="Leave a short description" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
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
