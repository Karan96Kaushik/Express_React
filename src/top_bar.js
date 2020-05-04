import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
      flexGrow: 1,
      background: 'red'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);



class Top extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = props._onChange ? props._onChange : undefined

        this.state = {
            logs: []
        };

    }

    handleDomEvent = (event) => {
        let logs = this.state.logs.slice();

        logs.unshift(event.type)

        this.setState({ logs: logs })
    }
    render() {
        const { classes } = this.props;

        return ([
            <AppBar className={classes.root} position="static" color="inherit">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Photos
                    </Typography>
                </Toolbar>
            </AppBar>,
        ])
    }
}

export default withStyles(useStyles)(Top)

