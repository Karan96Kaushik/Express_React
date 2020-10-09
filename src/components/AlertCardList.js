import React from "react";
import PropTypes from "prop-types";
import { withStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AlertCircleIcon } from './CustomIcons'

const styles = theme => ({
	// Alert card classes
	alertIcon: {
		verticalAlign: 'middle',
		display: 'inline-block',
		paddingTop: '16px',
		width: '25px',
		height: '40px',
	},
	alertText: {
		display: 'block',
		fontSize: '12px',
		position: 'relative',
		top: '-10px',
		left: '32px',
	},
	alertTitle: {
		// color: '#66ABD0'
	}
})

function AlertCardList(props) {
	const { classes } = props
	const theme = useTheme();

	return (
		<div className={classes.summaryList}>
			<Typography color="primary">
				<AlertCircleIcon fillColor={theme.palette.primary.main} className={classes.alertIcon} />
				<span className={classes.alertTitle}>{props.title}</span>
				<Typography color="secondary">
					<span className={classes.alertText}>{props.text}</span>
				</Typography>
			</Typography>

		</div>
	)
}

AlertCardList.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(AlertCardList);
