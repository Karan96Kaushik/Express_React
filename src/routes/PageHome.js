import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";
import Grid from "@material-ui/core/Grid";
import MainTabArea from "../components/MainTabArea2";
import CustomCard from "../components/CustomCard";
import CardList from "../components/CardList";
import ExpandableCardList from "../components/ExpandableCardList";
import CardLinkList from "../components/CardLinkList";
import AlertCardList from "../components/AlertCardList";
import { StartPostIcon, ProjectOwnerIcon, TeamMessageIcon, FeedIcon, NotificationIcon, TodoIcon } from "../components/CustomIcons";
import TeamMessage from "../views/team-messages/TeamMessage";
import Notification from "../views/notifications/notifications";
import ProjectView from "../views/project-view/ProjectView";
import VarialbleListView from "../views/project-view/VarialbleListView2";

const styles = theme => ({
	count: {
		marginRight: "15px"
	},
	root: {
		// minWidth: '700px',
		// background: theme.palette.background.secondary.main,
		minWidth: '100%'
	},
	summaryList: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	Listtitle: {
		fontSize: '15px',
		fontWeight: '500px',
		color: '#0073b1',
		display: 'flex',
		justifyContent: 'center',
	},
	expandListItems: {
		borderTop: '2px solid #efefef',
		padding: '10px 0 0 0',
		margin: '10px 0 0 0'
	},
	listItem: {
		display: 'flex',
		justifyContent: 'space-between',

	},
	expandListTitle: {
		fontSize: '14px',
		fontWeight: '400',
		color: '#283e4a',
	},
	newsCard: {
		marginTop: '10px'
	},
	newsTitle: {
		display: 'flex',
		justifyContent: 'center',
		fontSize: '15px',
		fontWeight: '400',
		color: '#0073b1'
	},
	newsContent: {
		fontWeight: '400',
		color: '#707070',
		fontSize: '14px'
	},
	projectToolCard: {
		marginTop: '10px'
	},
	projectToolTitle: {
		display: 'flex',
		justifyContent: 'center',
		fontSize: '15px',
		fontWeight: '400',
		color: '#0073b1'
	},
	projectToolContent: {
		fontWeight: '400',
		color: '#707070',
		fontSize: '14px'
	},
	aside: {
		width: '100%',
	},
	profile: {
		width: '100%',
	},
	rightSide: {
		width: '100%'
	},
	main: {
		width: '100%',
		flex: 1,
	},
	ryuk: {
        // minWidth: '700px',
        display:"flex",
        justifyContent:"center",
    },
});

const PageHome = ({ classes }) => {
	
	var tabs = [
        { label: "Start a post", icon: <StartPostIcon fontSize="large" />, panel:<div></div> },
        { label: "Project Owner", icon: <ProjectOwnerIcon fontSize="large" />, panel:<ProjectView /> },
        { label: "Team Messages", icon: <TeamMessageIcon fontSize="large" />, panel:<TeamMessage /> },
        { label: "Feed", icon: <FeedIcon fontSize="large" />, panel:<div></div> },
        { label: "Notification", icon: <NotificationIcon fontSize="large" />, panel:<Notification /> },
        { label: "Todo's", icon: <TodoIcon fontSize="large" />, panel:<div></div> },
	]
	
	return (
	<Layout>
		<Grid container spacing={3}>
			<Grid item xs={12} md={3}>
				<aside className={classes.profile}>
					<Grid container xs="auto" spacing={1}>
						<Grid item xs="auto" spacing={3}>
							<ProfileCard
								displayName="Paul Nta"
								username="paulnta"
								avatarUrl="https://source.unsplash.com/collection/895539"
								profileUrl="/profile/paulnta"
								coverUrl="https://source.unsplash.com/collection/841904"
								stats={{
									posts: 112,
									followers: 234,
									following: 22
								}}
							/>
						</Grid>
						<Grid item xs={12} md={12} spacing={1} id="test">
							<CustomCard customStyle={{ margin: '8px' }}>
								<CardLinkList
									linkText='Create Projects'
								/>
								<CardLinkList
									linkText='Invite Client'
								/>
								<CardLinkList
									linkText='Invite Manager'
								/>
								<CardLinkList
									linkText='Invite Mentor'
								/>
								<CardLinkList
									linkText='Invite Team Member'
								/>
							</CustomCard>
						</Grid>
					</Grid>
				</aside>
			</Grid>

			<Grid item xs={12} md={6}>
			<div className={classes.ryuk}>
				<img
					src="/react/giphy1.webp"
					style={{
						width: '12em', /* width of container */
					}}
				/>
				<br />
				<div>

				</div>
			</div>
			</Grid>

			<Grid item xs={12} md={3}>
				<aside className={classes.rightSide}>
					<div className={classes.fieldWorkSummary}>
						<CustomCard cardTitle="Analytics">
							<CardList text="Projects" count="05" />
							<CardList text="Connections" count="03" />
							<CardList text="Assigned Projects" count="02" />
							<CardList text="Content Items" count="09" />

							<div className={classes.myWorkSummaryList}>

							</div>

							<div className={classes.expandListItems}>

								<ExpandableCardList listTitle="My Projects" />
								<ExpandableCardList listTitle="Client Projects" />
								<ExpandableCardList listTitle="Team Members" />

							</div>
						</CustomCard>

						{/* <CustomCard cardTitle="Today's News" customStyle={{marginTop: '10px'}}>
							<Typography className={classes.newsContent}>
								Important notes, comments, recent tasks, comments and messages. Project notifications
								and updates are received and displayed here.
							</Typography>
						</CustomCard>

						<CustomCard cardTitle="Project Tools" customStyle={{marginTop: '10px'}}>
								<Typography className={classes.projectToolContent}>
									This section contains the information about distinct tools required
									to be used to work upon the project.
							</Typography>
						</CustomCard> */}

						<CustomCard cardTitle="User Alerts" customStyle={{ marginTop: '10px' }}>
							<AlertCardList title='Alert 1' text='User dashboard has been created' />
							<AlertCardList title='Alert 1' text='User dashboard has been created' />
							<AlertCardList title='Alert 1' text='User dashboard has been created' />
						</CustomCard>
					</div>
				</aside>

			</Grid>


		</Grid>
	</Layout>
)
};

PageHome.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(PageHome);
