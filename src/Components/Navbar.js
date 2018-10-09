import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../Styles/Navbar.css";

const Navbar = props => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />
          <Typography variant="title" color="inherit" className="Navbar--title">
            Goalkicker
          </Typography>
          <Button color="inherit">My Goals</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
