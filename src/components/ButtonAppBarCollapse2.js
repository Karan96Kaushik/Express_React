import React, { useState, useRef, useContext } from "react";
import { Button, MenuItem, useTheme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";

import NotificationIcon from "@material-ui/icons/Notifications";
import Home from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AppsIcon from "@material-ui/icons/Apps";
import GridOnIcon from "@material-ui/icons/GridOn";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { DashboardIcon, ProjectIcon, CalendarIcon, CommunityIcon, HomeIcon } from "./CustomIcons";
import { Switch } from "@material-ui/core"
import { ThemeContext } from "./Theme";
import {NavBarContext} from "../myContext"
import { Menu } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from 'classnames';

const styles = theme => ({
    root:{
        backgroundColor:theme.palette.background.primary.dark
      },
      buttonCollapse: {
        [theme.breakpoints.up("sm")]: {
          display: "none"
        },
        margin: "5px",
        boxShadow: "none",
        marginRight: "10px",
      },
      MenuButton : {
        // color : "red",
        color : theme.palette.background.primary.light,
        fontSize : "35px",
      },
});


const AppBarCollapse = ({classes, children}) => {

	var themeContext = useContext(ThemeContext)
    const NavContext = useContext(NavBarContext)

	const [state, setState] = useState(null);

    var open = Boolean(state)

    var handleMenu = event => {
        setState(event.currentTarget);
      };
    var  handleClose = () => {
        setState(null);
      };


	return (
        <div className={classes.buttonCollapse}>
          {/* <IconButton onClick={handleMenu}>
            <MenuIcon className={classes.MenuButton} />
          </IconButton> */}

          <Menu
           PaperProps={{ className: classNames(classes.root) }}
            // classes={{classes}}
            // style={{backgroundColor: 'red', color: 'white'}}
            id="menu-appbar"
            anchorEl={state}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={open}
            onClose={handleClose}
          >
            {children}
          </Menu>
        </div>
      );
};

export default withStyles(styles)(AppBarCollapse);
