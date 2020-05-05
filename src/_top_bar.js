import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import Diag from './diag'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			background: '#d9d9d9',
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
	const [open, setOpen] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState('');

	var menu_onClick = props.menu_onClick;

	var handleClose = (value) => {
		setOpen(false);
	    setSelectedValue(value);
	}

	return (
		<div>
			<AppBar className={classes.root} position="static" color="inherit">
				<Toolbar>
					<IconButton onClick={menu_onClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						L, DO YOU KNOW?
        			</Typography>
					<Button onClick={() => {setOpen(true)}} style={{color: 'black'}} color="primary">Login</Button>
				</Toolbar>
			</AppBar>
			<Diag open={open} selectedValue={selectedValue} onClose={handleClose} />
		</div>
	);
}