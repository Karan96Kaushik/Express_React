import React from 'react'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
	Link,
  } from "react-router-dom";


const styles = theme => ({
	projectListContainer: {
		padding: "5px 15px",
		background: theme.palette.background.primary.main,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '8px',
	},
	listHolder: {
		padding: '15px',
	},
	avatar: {
		display: 'inline-block',
		height: 35,
		width: 35,
		// border: `5px solid ${theme.palette.common.white}`,
		background: theme.palette.grey[200],
		zIndex: 999
	},
	avatarSec: {
		display: 'inline-block',
		height: 35,
		width: 35,
		background: theme.palette.grey[200],
		position: 'relative',
		left: '-10px'
	},
	headerContainer: {
		marginBottom: '15px',
		borderBottom: '1px solid #ccc'
	}
});


function ProjectListItems(props) {
	const { classes } = props

	return (
		// <div>
			<Grid container className={classes.projectListContainer}>
				<Grid item xs={5}>
					<Link to={props.projectLink}>
					<Typography variant="body2" color="primary">
						<StarIcon style={{
							fontSize: 10,
							marginRight: '15px'
						}} />
						{props.projectName}
					</Typography>
					</Link>
				</Grid>
				<Grid item xs={3}>
					<div>
						<Avatar className={classes.avatar} src="https://source.unsplash.com/collection/895539" />
						<Avatar className={classes.avatarSec} src="https://source.unsplash.com/user/erondu" />
						{/* <Avatar className={classes.avatar} src="https://source.unsplash.com/collection/895539" /> */}
					</div>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="body2">
						{props.projectEditedDate}
						<ArrowForwardIosIcon style={{
							fontSize: 10,
							marginLeft: '15px'
						}} />
					</Typography>
				</Grid>
			</Grid>
		// </div>
	)
}


ProjectListItems.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(ProjectListItems);