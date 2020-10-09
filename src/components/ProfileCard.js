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

const ProfileCard = ({ classes, displayName, username, avatarUrl, profileUrl, coverUrl, stats }) => {
	const backgroundStyle = coverUrl
		? { backgroundImage: `url('${coverUrl}')` }
		: null;

	const theme = useTheme();

	var tags = ["Web Developer", "Content Writer", "CEO", "Digital Marketing", "Marketing"]

	return (
		<Paper elevation={1} className={classes.root} spacing={3} style={{ margin: '0px 8px' }}>

			<div className={classes.header} style={{ backgroundImage: `url('/assets/images/left-prof-bg@2x.jpg')` }} />
			<div className={classes.content}>
				{/* <Link to={profileUrl}> */}
				<Avatar className={classes.avatar} src={avatarUrl} />
				{/* </Link> */}

				{/* <div className={classes.userFields}>
								<Typography variant="h6">
									<Link to={profileUrl}>{displayName}</Link>
								</Typography>
								<Typography variant="body2" color="textSecondary">
									<Link to={profileUrl}>@{username}</Link>
								</Typography>
							</div> */}
			</div>
			{/* <Button className={classes.button} size="small" variant="contained" color="primary">
								Add Contanct
						</Button> */}
			
			<p className={classes.userName}> <Typography variant="h6" color="primary">{displayName}</Typography></p>
			{/* <DropDown /> */}
			<div className={classes.orgDetails}>
				<div>

					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="29" viewBox="0 0 25 29"><g><g><path fill={theme.palette.primary.main} d="M17.821 6.506a.673.673 0 0 1-.673.673h-2.243a.673.673 0 0 1-.673-.673V4.262c0-.371.301-.673.673-.673h2.243c.372 0 .673.302.673.673zm0 5.384a.673.673 0 0 1-.673.672h-2.243a.673.673 0 0 1-.673-.672V9.646c0-.371.301-.673.673-.673h2.243c.372 0 .673.302.673.673zm0 5.383a.673.673 0 0 1-.673.673h-2.243a.673.673 0 0 1-.673-.673V15.03c0-.372.301-.673.673-.673h2.243c.372 0 .673.301.673.673zm-3.589 9.647h-3.59v-4.711c0-.372.302-.673.674-.673h2.243c.372 0 .673.301.673.673zM9.97 17.946H7.727a.673.673 0 0 1-.673-.673V15.03c0-.372.3-.673.673-.673H9.97c.372 0 .673.301.673.673v2.243a.673.673 0 0 1-.673.673zm-2.916-8.3c0-.371.3-.673.673-.673H9.97c.372 0 .673.302.673.673v2.243a.673.673 0 0 1-.673.673H7.727a.673.673 0 0 1-.673-.672zm0-5.384c0-.371.3-.673.673-.673H9.97c.372 0 .673.302.673.673v2.244a.673.673 0 0 1-.673.673H7.727a.673.673 0 0 1-.673-.673zM23.205 26.92V1.346C23.205.603 22.603 0 21.86 0H3.016C2.272 0 1.67.603 1.67 1.346V26.92H.548a.673.673 0 0 0-.673.673v1.121H25v-1.121a.673.673 0 0 0-.673-.673z" /></g></g></svg>

				</div>
				<Typography color="primary">
					<div className={classes.orgContent}>
						<p className={classes.orgHead}>Organisation</p>
						<p className={classes.orgName}>Ikriya Learning LLC, Orlando</p>
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
				<Typography variant="caption" color="secondary" className={classes.about}>"Experienced web designer with a demonstrated history of working in the information technologyu & services industry"</Typography>
			</div>
			<Typography className={classes.editProfile} color="primary">
				<Link variant='inherit' href="#" className={classes.editProfileLink}>
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