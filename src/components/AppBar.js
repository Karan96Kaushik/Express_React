import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTheme, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import Toolbar from "@material-ui/core/Toolbar";
import AppBarBase from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import NotificationIcon from "@material-ui/icons/Notifications";
import Home from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AppsIcon from "@material-ui/icons/Apps";
import GridOnIcon from "@material-ui/icons/GridOn";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import AppBarCollapse from "./AppBarCollapse";

import InputSearch from "./InputSearch";
import ActivityListItem from "./ActivityListItem";

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	navigation: {},
	appBar: {
		background: theme.palette.background.primary.dark
	},
	toolbar: {
		width: "100%",
		maxWidth: theme.layout.contentMaxWidth,
		margin: "0 auto"
	},
	flex: {
		flexGrow: 1
	},
	search: {
		marginLeft: theme.spacing.unit * 4,
		background: theme.palette.grey[200],
		width: 250
	},

	headerIcon: {
		height: 40,
		width: 30
	},
	icon: {
		height: "40px",
		// width: "10px"
	},
	IconLabel: {
		position: "absolute",
		bottom: "0",
		color: "#f5f5f5",
		fontSize: "14px",
		fontWeight: "400"
	},
	buttonColor: {
		color: "#ffffff",
		fontSize: "30px",
	}
});

const AppBar = ({ classes }) => {
	const [notificationOpen, setNotificationOpen] = useState(false);
	const notificationButton = useRef();

	// const theme = useTheme();

	const handleToggleNotification = () => {
		setNotificationOpen(!notificationOpen);
	};

	return (
		<AppBarBase className={classes.appBar} position="fixed">
			<Toolbar className={classes.toolbar}>
				<Typography variant="h6" color="inherit">
					<IconButton
						// className={classes.icon}
						onClick={handleToggleNotification}
						buttonRef={notificationButton}
						size="small"
					>
						{/* <AcUnitRoundedIcon className={classes.buttonColor} /> */}
						<img src='\react\comic.png' className={classes.icon} alt="icon" ></img>
					</IconButton>
				</Typography>

				<div className={classes.flex} />
				<AppBarCollapse />
				<Popover
					open={notificationOpen}
					anchorEl={notificationButton.current}
					onClose={handleToggleNotification}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
				>
					{/* <List>
						<ActivityListItem
							title="Anna commented your post"
							subtitle="1 hour ago"
							avatarUrl="https://source.unsplash.com/b1Hg7QI-zcc/150x150"
						/>
						<ActivityListItem
							title="Anna started following you"
							subtitle="2 days ago"
							avatarUrl="https://source.unsplash.com/b1Hg7QI-zcc/150x150"
						/>
						<ActivityListItem
							title="James liked your post"
							subtitle="3 days ago"
							avatarUrl="https://source.unsplash.com/d2MSDujJl2g/150x150"
						/>
						<ActivityListItem
							title="James started following you"
							subtitle="1 week ago"
							avatarUrl="https://source.unsplash.com/d2MSDujJl2g/150x150"
						/>
					</List> */}
				<Avatar className={classes.icon} src="/assets/images/ava.jpeg" />
				<Avatar className={classes.icon} src="/assets/images/ava.jpeg" />
				<Avatar className={classes.icon} src="/assets/images/ava.jpeg" />
				<Avatar className={classes.icon} src="/assets/images/ava.jpeg" />
				<Avatar className={classes.icon} src="/assets/images/ava.jpeg" />
				<Avatar className={classes.icon} src="/assets/images/ava.jpeg" />

				</Popover>
				<Avatar className={classes.icon} src="/assets/images/ava.jpeg" />
			</Toolbar>
		</AppBarBase>
	);
};

AppBar.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string),
	children: PropTypes.node
};

export default withStyles(styles)(AppBar);
