import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import ProjectDetailsCard from "../components/ProjectDetailsCard2";
import Grid from "@material-ui/core/Grid";
import MainTabArea from "../components/MainTabArea2";
import CustomCard from "../components/CustomCard";
import CardList from "../components/CardList";
import ExpandableCardList from "../components/ExpandableCardList";
import CardLinkList from "../components/CardLinkList";
import AlertCardList from "../components/AlertCardList";
import Avatar from '@material-ui/core/Avatar';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams
} from "react-router-dom";
import { StartPostIcon, ProjectOwnerIcon, TeamMessageIcon, FeedIcon, NotificationIcon, TodoIcon } from "../components/CustomIcons";
import TeamMessage from "../views/team-messages/TeamMessage";
import Notification from "../views/notifications/notifications";
import ProjectView from "../views/project-view/ProjectView";
import VarialbleListView from "../views/project-view/VarialbleListView2";
import SampleProjects from "../sample_projects"

const styles = theme => ({
	count: {
		marginRight: "15px"
	},
	root: {
		// minWidth: '700px',
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
	summaryText: {
		fontSize: '12px',
		fontWeight: '500',
		color: 'rgba(0, 0, 0, 0.6)',
	},
	summaryCount: {
		fontSize: '12px',
		fontWeight: '500',
		color: '#0073b1',
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
});

const PageProject = ({ classes, props }) => {
	const { projectId } = useParams();

	// SAMPLE PROJECTS
	var icon = <Avatar className={classes.avatar} src="https://source.unsplash.com/random/256x256" />

	var Projects = SampleProjects

	var project = (() => {
		for (const iterator of Projects) {
			if (iterator.id == projectId)
				return iterator
		}
	})()

	console.log(project)
	// end SAMPLE PROJECTS


	
	var tabs = [
		{ label: "Managers", icon: <StartPostIcon fontSize="large" />, panel: <VarialbleListView Label="Managers" ListArray={project.managers} /> },
		{ label: "Version", icon: <ProjectOwnerIcon fontSize="large" />, panel: <VarialbleListView Label="Version" ListArray={project.versions} /> },
		{ label: "Team Members", icon: <TeamMessageIcon fontSize="large" />, panel: <VarialbleListView Label="Team Members" ListArray={project.team} /> },
		{ label: "Assessments", icon: <FeedIcon fontSize="large" />, panel: <div></div> },
		{ label: "Learning", icon: <NotificationIcon fontSize="large" />, panel: <Notification /> },
		{ label: "Resources", icon: <TodoIcon fontSize="large" />, panel: <div></div> },
		{ label: "Assets", icon: <TeamMessageIcon fontSize="large" />, panel: <TeamMessage /> },
		{ label: "Respond", icon: <ProjectOwnerIcon fontSize="large" />, panel: <ProjectView /> },
	]

	return (
		<Layout>
			<Grid container spacing={3}>
				<Grid item xs={12} md={3}>
					<aside className={classes.profile}>
						<Grid container xs="auto" spacing={1}>
							<Grid item xs={12} md={12} spacing={3}>
								<ProjectDetailsCard
									displayName={project.projectName}
									description="Lorem ipsum dolor sit descripton"
									avatarUrl="https://source.unsplash.com/collection/895539"
									profileUrl="/profile/paulnta"
									coverUrl="https://source.unsplash.com/collection/841904"
								// stats={project.stats}
								/>
							</Grid>
							<Grid item xs={12} md={12} spacing={1} id="test">
								<CustomCard customStyle={{ margin: '8px' }}>
									<CardLinkList
										linkText='Assign Manager'
									/>
									<CardLinkList
										linkText='Assign Client'
									/>
									<CardLinkList
										linkText='Assign SME'
									/>
									<CardLinkList
										linkText='Assign Mentor'
									/>
									<CardLinkList
										linkText='Assign Team Member'
									/>
									<CardLinkList
										linkText='Create Version'
									/>
									<CardLinkList
										linkText='Save Template'
									/>
								</CustomCard>
							</Grid>
						</Grid>
					</aside>
				</Grid>

				<Grid item xs={12} md={6}>
					<MainTabArea tabs={tabs} />
				</Grid>

				<Grid item xs={12} md={3}>
					<aside className={classes.rightSide}>
						<div className={classes.fieldWorkSummary}>
							<CustomCard cardTitle="Analytics">
								<CardList text="Members" count={project.stats.members} />
								<CardList text="Comments" count={project.stats.comments} />
								<CardList text="Content Items" count={project.stats.contentitems} />
								<CardList text="Creation Date" count={project.stats.creationDate} />
								<div className={classes.myWorkSummaryList}>
								</div>
								<div className={classes.expandListItems}>
								</div>
							</CustomCard>
							<CustomCard cardTitle="Projects Alerts" customStyle={{ marginTop: '10px' }}>
								<AlertCardList title='Content Item Created' text='Paul created a CI' />
								<AlertCardList title='Version Created' text='Paul created a version' />
								<AlertCardList title='Team Member Added' text='Jason was added to the project' />
							</CustomCard>
						</div>
					</aside>

				</Grid>


			</Grid>
		</Layout>
	)
};

PageProject.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(PageProject);
