import React from 'react'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

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
    const { classes, dataArray } = props

	return (
			<Grid container className={classes.projectListContainer}>
				    {dataArray.map(field => (
                        <Grid item xs={3}>
                        <Typography variant="body2" color="secondary">
                            {field}
                        </Typography>
                    </Grid>
                    ))}
			</Grid>
	)
}


ProjectListItems.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(ProjectListItems);