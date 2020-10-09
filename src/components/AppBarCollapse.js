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
import { darkTheme, lightTheme, ThemeContext } from "./Theme";

const styles = theme => ({
	root: {
		// position: "absolute",
		right: 0
	},
	buttonBar: {
		[theme.breakpoints.down("xs")]: {
			display: "none"
		},
		// margin: "10px",
		// paddingLeft: "16px",
		// right: 0,
		// position: "relative",
		width: "100%",
		background: "transparent",
		// float: 'left'
		// marginRight: "60px",
	},
	icon: {
		// marginLeft: theme.spacing.unit * 2,
		padding: 0,
		fill: "blanchedalmond",
		flexDirection: "column",
		[theme.breakpoints.down("xs")]: {
			color: "#000000",
		},
		[theme.breakpoints.up("sm")]: {
			color: "#ffffff",
		},
		textAlign: 'center',
		width: '100%'
	},
	buttonColor: {
		fill: "blanchedalmond",
		// height: 40,
		// width: 30,
	},
	menuItemContainer: {
		float: 'left',
		marginRight: '15px'
	},
	activeIcon: {
		color: '#fff'
	},
	headerIcon: {
		color: theme.palette.primary.light,
		// fill::theme.palette.primary.main
		// color: '#ccc',
	},
	IconLabel: {
		// fontSize: '14px',
		color: theme.palette.primary.light,
		cursor: 'pointer'
	}
});


const AppBarCollapse = props => {
	const handleToggleNotification = () => {
		setNotificationOpen(!notificationOpen);
	};

	var themeContext = useContext(ThemeContext)

	const notificationButton = useRef();
	const [notificationOpen, setNotificationOpen] = useState(false);


	// var [darkMode, setDarkState] = useState(false);
	// useTheme(darkMode ? darkTheme:lightTheme)
	const theme = useTheme();

	var links = [
		{ label: "Home", icon: <HomeIcon className={props.classes.headerIcon} fillColor={theme.palette.primary.light} /> },
		{ label: "Community", icon: <CommunityIcon className={props.classes.headerIcon} fillColor={theme.palette.primary.light} /> },
		{ label: "Dashboard", icon: <DashboardIcon className={props.classes.headerIcon} fillColor={theme.palette.primary.light} /> },
		{ label: "Project", icon: <ProjectIcon className={props.classes.headerIcon} fillColor={theme.palette.primary.light} /> },
		{ label: "Calendar", icon: <CalendarIcon className={props.classes.headerIcon} fillColor={theme.palette.primary.light} /> },
	]

	return (
		<div className={props.classes.root}>
			<ButtonAppBarCollapse>
				<IconButton className={props.classes.icon} onClick="" buttonRef="">
					<Home className={props.classes.buttonColor} />
					<Typography className={props.classes.IconLabel}>Home</Typography>
				</IconButton>
				<IconButton className={props.classes.icon} onClick="" buttonRef="">
					<PeopleIcon className={props.classes.headerIcon} />
					<Typography className={props.classes.IconLabel}>Community</Typography>
				</IconButton>
				<IconButton className={props.classes.icon} onClick="" buttonRef="">
					<NoteAddIcon className={props.classes.headerIcon} />
					<Typography className={props.classes.IconLabel}>Dashboard</Typography>
				</IconButton>
				<IconButton className={props.classes.icon} onClick="" buttonRef="">
					<NotificationIcon className={props.classes.headerIcon} />
					<Typography className={props.classes.IconLabel}>Projects</Typography>
				</IconButton>
				<IconButton className={props.classes.icon} onClick="" buttonRef="">
					<DateRangeIcon className={props.classes.headerIcon} fill={theme.palette.primary.main} />
					<Typography className={props.classes.IconLabel}>Calendar</Typography>
				</IconButton>

				<div className={props.classes.menuItemContainer}>
					<Switch
						checked={themeContext.theme.dark}
						onChange={(val) => { themeContext.setTheme({ dark: val.target.checked }) }}
						name="checkedB"
						color="primary"
					/>
				</div>

			</ButtonAppBarCollapse>
			<div className={props.classes.buttonBar} id="appbar-collapse">
				{links.map((link) => (<div className={props.classes.menuItemContainer}>
					<IconButton size="medium" className={props.classes.icon} onClick="" buttonRef="">
						{link.icon}
					</IconButton>
					<Typography variant="body2" className={props.classes.IconLabel}>{link.label}</Typography>
				</div>))}
				<div className={props.classes.menuItemContainer}>
					<Switch
						checked={themeContext.theme.dark}
						onChange={(val) => { themeContext.setTheme({ dark: val.target.checked }) }}
						name="checkedB"
						color="primary"
					/>
				</div>
			</div>
		</div>
	);
};

export default withStyles(styles)(AppBarCollapse);
