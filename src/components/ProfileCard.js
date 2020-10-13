import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { FormHelperText, useTheme } from '@material-ui/core';

const styles = theme => ({
	root: {
		overflow: 'hidden',
		margin: theme.spacing.unit * 1,
		background: theme.palette.background.secondary.main,
		textAlign: 'center',
	},
	header: {
		height: 120,
		background: theme.palette.background.primary.main,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	},
	content: {
		position: 'relative',
		// display: 'flex',
		height: '40px',
		bottom: 35
		// padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
	},
	avatar: {
		// position: 'absolute',
		//top: -26,
		//left: 68,
		display: 'inline-block',
		height: 72,
		width: 72,
		border: `5px solid ${theme.palette.common.white}`,
		background: theme.palette.background.primary.main,
	},
	userFields: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',

	},
	actionItems: {
		padding: '17px 15px',
		// width: '215'
	},
	linkText: {
		fontSize: 12,
		fontWeight: 400,
		// color: '#283e4a',
	},
	addIcon: {
		fontSize: '12px',
		marginTop: '5px',
	},
	button: {
		height: 30,
		minWidth: 80,
		marginLeft: 60,
		margin: '0, 10',
	},
	editText: {
		// color: '#0073b1',
		// fontFamily: 'Helvetica Neue',
		fontSize: 14,
		fontWeight: 400
	},
	editIcon: {
		marginLeft: '5px',
	},
	userName: {
		fontSize: 16,
		fontWeight: 500,
		// color: '#000000',
		textTransform: 'uppercase',
		margin: '0',
		lineHeight: '20px',
	},
	orgDetails: {
		display: 'flex',
		padding: '15px 10px',

	},
	orgContent: {
		marginLeft: '5px',
	},
	orgHead: {
		margin: '0',
		textAlign: 'left',
		fontSize: 12,
		fontWeight: 500,
	},
	orgName: {
		margin: '0',
		textAlign: 'left',
		fontSize: 12,
		fontWeight: 400,
		// color: 'rgba(0, 0, 0, 0.6)',
	},
	skillsetWrapper: {
		margin: '0',
		textAlign: 'left',
		padding: ' 0 12px',
	},
	skillset: {
		// background: theme.palette.grey[200],
		background: theme.palette.background.primary.main,
		padding: '2px 5px',
		borderRadius: '2px',
		marginRight: '3px',
		display: 'inline-block',
		marginBottom: '5px'
	},
	skillsetText: {
		// color: '#333333',
		fontSize: '11px',
		fontWeight: '400'
	},
	workInterest: {
		fontSize: 11,
		fontWeight: 400,
		// color: 'rgba(0, 0, 0, 0.6)',
		padding: '0 15px'
	},
	work: {
		margin: '0',
		textAlign: 'left',
		margin: '10px 0 20px 0'
	},
	versions: {
		display: 'flex',
		padding: '10px 15px',
		justifyContent: 'space-between'
	},
	keywords: {
		display: 'flex',
		padding: '10px 15px',
		justifyContent: 'space-between'
	},
	head: {
		margin: '0',
		fontSize: 11,
		fontWeight: 500,
		// color: '#283e4a',
	},
	count: {
		margin: '0',
		fontSize: 11,
		fontWeight: 500,
		// color: '#0073b1',
	},
	aboutText: {
		textAlign: 'left',
		padding: '50px 20px',
		justifyContent: 'space-between',
		textAlign: 'center',
	},
});

const ProfileCard = ({ classes, displayName, tags, username, avatarUrl, description, profileUrl, coverUrl, stats }) => {
	const backgroundStyle = coverUrl ? { backgroundImage: `url('${coverUrl}')` } : null;
	const theme = useTheme();

	return (
		<Paper elevation={1} spacing={3} className={classes.root}>

			<div className={classes.header} style={{ backgroundImage: `url('/assets/images/red_glow.jpg')` }} />
			<div className={classes.content}>
				<Avatar className={classes.avatar} src={avatarUrl} />
			</div>

			<p className={classes.userName}><Link to={profileUrl}> <Typography variant="h6" color="primary">{displayName}</Typography> </Link> </p>
			{/* <DropDown /> */}
			<div className={classes.orgDetails}>
				<div>

					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="29" viewBox="0 0 25 29"><g><g><path fill={theme.palette.primary.main} d="M17.821 6.506a.673.673 0 0 1-.673.673h-2.243a.673.673 0 0 1-.673-.673V4.262c0-.371.301-.673.673-.673h2.243c.372 0 .673.302.673.673zm0 5.384a.673.673 0 0 1-.673.672h-2.243a.673.673 0 0 1-.673-.672V9.646c0-.371.301-.673.673-.673h2.243c.372 0 .673.302.673.673zm0 5.383a.673.673 0 0 1-.673.673h-2.243a.673.673 0 0 1-.673-.673V15.03c0-.372.301-.673.673-.673h2.243c.372 0 .673.301.673.673zm-3.589 9.647h-3.59v-4.711c0-.372.302-.673.674-.673h2.243c.372 0 .673.301.673.673zM9.97 17.946H7.727a.673.673 0 0 1-.673-.673V15.03c0-.372.3-.673.673-.673H9.97c.372 0 .673.301.673.673v2.243a.673.673 0 0 1-.673.673zm-2.916-8.3c0-.371.3-.673.673-.673H9.97c.372 0 .673.302.673.673v2.243a.673.673 0 0 1-.673.673H7.727a.673.673 0 0 1-.673-.672zm0-5.384c0-.371.3-.673.673-.673H9.97c.372 0 .673.302.673.673v2.244a.673.673 0 0 1-.673.673H7.727a.673.673 0 0 1-.673-.673zM23.205 26.92V1.346C23.205.603 22.603 0 21.86 0H3.016C2.272 0 1.67.603 1.67 1.346V26.92H.548a.673.673 0 0 0-.673.673v1.121H25v-1.121a.673.673 0 0 0-.673-.673z" /></g></g></svg>

				</div>
				<Typography color="primary">
					<div className={classes.orgContent}>
						<p className={classes.orgHead}>Organisation</p>
						<p className={classes.orgName}>SGS Weather (Aug 2018 - Present)</p>
					</div>
				</Typography>
			</div>
			<Typography className={classes.skillsetWrapper} color="secondary">

				{tags.map(attr => (
					<Link href="#" className={classes.skillset} variant="inherit">
						<span className={classes.skillsetText}>
							<Typography variant="inherit" color="secondary">
								{attr}
							</Typography>
						</span>
					</Link>
				))}

			</Typography>
			<div className={classes.aboutText}>
				{/* <Typography variant="h6">{posts}</Typography> */}
				<Typography variant="body1" color="secondary" className={classes.about}>{description}</Typography>
			</div>
		</Paper>
	);
};

ProfileCard.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string),
	displayName: PropTypes.string,
	username: PropTypes.string,
	avatarUrl: PropTypes.string,
	coverUrl: PropTypes.string,
	profileUrl: PropTypes.string,
	stats: PropTypes.shape({
		posts: PropTypes.number,
		followers: PropTypes.number,
		following: PropTypes.number,
	})
};

export default withStyles(styles)(ProfileCard);