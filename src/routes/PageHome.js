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
import { Link } from "react-router-dom";

const styles = theme => ({
	count: {
		marginRight: "15px"
	},
	root: {
		// minWidth: '700px',
		// background: theme.palette.background.secondary.main,
		// minWidth: '100%'
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
	
	var tags = ["ReactJS","NodeJS","REST API","GraphQL API","MongoDB","PostgreSQL","Graph Databases","AWS EC2","AWS Lambda","Docker","IoT"]
	var description = "Versatile full stack developer with 2.5 years of experience with web design, development and deployment. Working with various client and server side technologies"

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
			</Grid>

			<Grid item xs={12} md={6}>
			<div className={classes.ryuk}>
				<Link to={"/profile/"}>
				<picture>
				<source srcset="/react/giphy1.webp" type="image/webp" />
				<source srcset='\react\comic.png' type="image/jpeg" />
				<img
					src="/react/giphy1.webp"
					style={{
						width: '12em', /* width of container */
					}}
				/>
				</picture>
				</Link>
				<br />
				<div>

				</div>
			</div>
			</Grid>

		</Grid>
	</Layout>
)
};

PageHome.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(PageHome);
