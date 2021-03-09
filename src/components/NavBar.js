import React, { useContext } from 'react';
import clsx from 'clsx';
import { withStyles, useStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Top from './_top_bar';
import { NavBarContext } from "../myContext"
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { ThemeContext } from "./Theme";
import { Switch } from "@material-ui/core"

const styles = theme => ({
    // const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    paper: {
        background: theme.palette.background.primary
    },
    menuItemContainer: {
        float: 'left',
        marginRight: '15px'
    },
});

var AppBar = ({ classes, comps }) => {
    const list_comps = comps
    const NavContext = useContext(NavBarContext)
    // const classes = useStyles();
    var themeContext = useContext(ThemeContext)

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        NavContext.setNavOpen(open);
    };

    const list = (anchor, list_comps) => (
        <div
            role="presentation"
            onClick={toggleDrawer("", false)}
            onKeyDown={toggleDrawer("", false)}
        >
            <img
                style={{ padding: '10px' }}
                src="/react/journey.png"
                height='75px'
            />
            <Divider />
            <List >
                {list_comps.map((button, index) => (
                    <Link to={button._link}>
                        <ListItem button onClick={() => { toggleDrawer(anchor, true) }} key={button._text}>
                            <ListItemIcon> {<button._icon />}</ListItemIcon>
                            <Typography variant="button">{button._text}</Typography>

                            {/* <ListItemText primary={button._text} /> */}
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <div>
            <React.Fragment key={'bar'}>
                {/* <Top login={props.login} menu_onClick={toggleDrawer('bar', true)} /> */}
                <Drawer classes={{ paper: classes.paper }} anchor={'left'} open={NavContext.NavOpen} onClose={toggleDrawer('bar', false)}>
                    {list('bar', list_comps)}
                    <div className={classes.menuItemContainer}>
                        <Switch
                            checked={themeContext.theme.dark}
                            onChange={(val) => { themeContext.setTheme({ dark: val.target.checked }) }}
                            name="checkedB"
                            color="primary"
                        />
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    );
}

AppBar.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    children: PropTypes.node
};

export default withStyles(styles)(AppBar);