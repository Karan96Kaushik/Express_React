import React from 'react'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ProjectListItems from '../../components/ProjectListItems';
import SampleProjects from "../../sample_projects"

const styles = theme => ({
	appBar: {
		backgroundColor: theme.palette.background.secondary.main,
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
	const { classes } = props

	var Projects = SampleProjects;

	return (
		<div>
			<Grid
				className={classes.tabContainerInner}
				container
				spacing={2}
			>
				<AppBar position="static" className={classes.appBar}>
					<Toolbar className={classes.appTool}>
						<Typography color="primary" variant="subtitle1" className={classes.titleName}>
							My Projects
						</Typography>
					</Toolbar>
				</AppBar>
				<Grid
					container
					className={classes.listHolder}
				>
					{/* <Grid
						container
						className={classes.headerContainer}
					>
						<Grid item xs={2}>
							<Typography variant="caption" style={{fontSize: 9}}>
								All Projects
						</Typography>
						</Grid>
						<Grid item xs={3}>
							<Typography variant="caption" style={{fontSize: 8}}>
								Sort By: <span style={{fontWeight: 'bold'}}>Alphabetical(A-Z)</span>
							</Typography>
						</Grid>
						<Grid item xs={3}>
							<Typography variant="caption" style={{fontSize: 9}}>
								Team Members
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography variant="caption" style={{fontSize: 9}}>
								Last Edited
							</Typography>
						</Grid>
					</Grid> */}

					<div className={classes.listContainer}>
						{Projects.map(project => (
							<ProjectListItems
								projectName={project.projectName}
								projectEditedDate={project.projectDate}
								projectLink={project.projectLink}
							/>
						))}
						{/* <ProjectListItems 
							projectName = "Big Bite Creactive"
							projectEditedDate = "12:53 / 21/05/16"
							/>
						<ProjectListItems 
							projectName = "Big Bite Creactive1"
							projectEditedDate = "12:53 / 21/05/16"
							/>
						<ProjectListItems 
							projectName = "Big Bite Creactive2"
							projectEditedDate = "12:53 / 21/05/16"
						/> */}
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
