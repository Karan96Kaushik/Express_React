import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormHelperText, useTheme } from '@material-ui/core';
import ProfileStats from './ProfileStats';
import DropDown from './dropDownMenu';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
	root: {
		overflow: 'hidden',
		margin: theme.spacing.unit * 1,
		background: theme.palette.background.secondary.main,
		textAlign: 'center',
		// minWidth:'100%'
	},
	header: {
		height: 100,
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
	link: {
		padding:"5px",
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
		margin: '10px',
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
		padding: '12px 16px',
		justifyContent: 'space-between',
		textAlign: 'center',
	},
	about: {
		fontSize: '12px',
		fontWeight: '400',
		// color: '#283e4a',
	}
});

const ProfileCard = ({ classes, coverUrl, displayName, stats, projectUrl }) => {
	const backgroundStyle = coverUrl
		? { backgroundImage: `url('${coverUrl}')` }
		: null;

	const theme = useTheme();

	var tags = ["Start Up", "Type", "SubType"]

	return (
		<Paper elevation={1} className={classes.root} spacing={3} style={{ margin: '0px 8px' }}>

			{/* <div className={classes.header} style={{ backgroundImage: `url('/assets/images/left-prof-bg@2x.jpg')` }} /> */}
			<div className={classes.content}>
			</div>

			<p className={classes.userName}> <Typography variant="h6" color="primary">{displayName}</Typography></p>

			<Link to={projectUrl} className={classes.link} variant="inherit">
				<Typography variant="subtitle2" color="secondary">
					{"< Project"}
				</Typography>
			</Link>
			<Typography className={classes.skillsetWrapper} color="secondary">

				{tags.map(attr => (
					<Link to="#" className={classes.skillset} variant="inherit">
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
				<Typography variant="caption" color="secondary" className={classes.about}>Lorem Ipsum Dolor Sit Amet...</Typography>
			</div>
			<Typography className={classes.editProfile} color="primary">
				<Link variant='inherit' to="#" className={classes.editProfileLink}>
					<span className={classes.editText}>Edit Profile</span>
					<span className={classes.editIcon}>
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g><g><path fill={theme.palette.primary.main} d="M9.838 2.246a.553.553 0 0 0 0-.784l-1.3-1.3a.553.553 0 0 0-.784 0L6.738 1.18 8.82 3.262zM0 7.917V10h2.083l6.144-6.144-2.083-2.083z" /></g></g></svg>
					</span>
				</Link>
			</Typography>
			{/* <ProfileStats
				posts={stats.posts}
				followers={stats.followers}
				following={stats.following}
			/> */}
			{/* <div className={classes.workInterest}>
								<p className={classes.work}>Product Development</p>
								<p className={classes.work}>Engineering Product</p>
							</div>
							<div className={classes.versions}>
								<p className={classes.head}>Total Versions</p>
								<p className={classes.count}>03</p>
							</div>
							<div className={classes.keywords}>
								<p className={classes.head}>Keywords</p>
								<p className={classes.count}>04</p>
							</div> */}
			{/* <div className={classes.premiumMembership}>
								<Typography className={classes.premiumAdvantages}>
									Access exclusive tools and insights
								</Typography>
								<Typography className={classes.premiumFees}>
									Try Premium free for 1 month
								</Typography>
							</div> */}
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