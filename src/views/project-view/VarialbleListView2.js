import React from 'react'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import VarListItem from '../../components/VarListItems2';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
	appBar: {
		backgroundColor: theme.palette.background.secondary.dark,
		height: '50px'
	},
	tabContainerInner: {
		// border: '1px solid black',
		background: theme.palette.background.secondary.main,
	},
	listContainer: {
		width: '100%'
	},
	appTool: {
		minHeight: '50px'
	},
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
	headerContainer: {
		marginBottom: '15px',
		borderBottom: '1px solid #ccc'
	},
	titleName: {
		zIndex: -20,
	}
});


function ProjectView(props) {
    const { classes, Label="", ListArray=[] } = props
    
    // TEST DATA FOR VARIABLE LIST VIEW
    var icon = 	<Avatar className={classes.avatar} src="https://source.unsplash.com/random/256x256" />


	var _ListArray = [
		[icon,"Helly","Hello","Heyyyyyy"],
		[icon,"Helly","Hello","Heyyyyyy"],
		[icon,"Helly","Hello","Heyyyyyy"],
	]
    // end TEST DATA FOR VARIABLE LIST VIEW

	return (
		<div>
			<Grid
				className={classes.tabContainerInner}
				container
				spacing={2}
			>
				<AppBar position="static" className={classes.appBar}>
					<Toolbar className={classes.appTool}>
						<Typography variant="subtitle1" color="primary" className={classes.titleName}>
							{Label}
						</Typography>
					</Toolbar>
				</AppBar>
				<Grid
					container
					className={classes.listHolder}
				>
					<div className={classes.listContainer}>
						{ListArray.map(item => (
							<VarListItem
								dataArray={item}
							/>
						))}
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

ProjectView.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(ProjectView);
