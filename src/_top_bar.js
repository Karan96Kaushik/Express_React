import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: 'white',
      textAlign: "left"
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar(props) {
  const classes = useStyles();
  var menu_onClick = props.menu_onClick;

  return (
    <div>
      <AppBar className={classes.root} position="static" color="inherit">
        <Toolbar>
          <IconButton onClick={menu_onClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Coffee Creme
          </Typography>
          <Button color="primary">Button</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}