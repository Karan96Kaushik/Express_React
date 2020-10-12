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
import MUIRichTextEditor from 'mui-rte'
import { Paper } from "@material-ui/core";

const styles = theme => ({
	count: {
		marginRight: "15px"
	},
	root: {
		overflow: 'visible',
		// margin: theme.spacing.unit * 1,
		background: theme.palette.background.secondary.main,
		// textAlign: 'center',
		color: theme.palette.secondary.dark,
		height: "auto",
		padding: "50px",
		paddingBottom: "150px",
		margin: "50px",
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
		display: "flex",
		justifyContent: "center",
	},
});

const PageHome = ({ classes }) => {

	var defVal = { "blocks": [{ "key": "ajct2", "text": "sdasadsda", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }], "entityMap": {} }

	var handleSave = (data) => {
		console.log(data)
	}
	return (
		<Layout>
			<Grid container spacing={3}>
				<Grid item xs={12} md={2}></Grid>
				<Grid item xs={12} md={8}>

					<Paper elevation={1} className={classes.root} spacing={3} style={{ margin: '0px 8px' }}>
						<MUIRichTextEditor defaultValue={JSON.stringify(defVal)} onSave={handleSave} label="Start typng..." />
					</Paper>

				</Grid>
				<Grid item xs={12} md={2}></Grid>
			</Grid>
		</Layout>
	)
};

PageHome.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(PageHome);
