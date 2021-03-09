import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ThemeProvider, darkTheme, lightTheme, ThemeContext } from '../components/Theme';
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import ProfileCard from "../components/ProfileCard";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
// import * as d3 from d3
import NivoRadar from "../components/NivoRadar"

const styles = theme => ({
	root: {
		overflow: 'hidden',
		margin: theme.spacing.unit * 1,
		background: theme.palette.background.secondary.main,
		textAlign: 'center',
		// minWidth:'100%'
	},
	d3: {
		height: "500px",
		overflow: "visible"
		// padding:"50px",
		// margin:"50px",
	},
});

var tags = ["ReactJS", "NodeJS", "REST API", "GraphQL API", "MongoDB", "PostgreSQL", "Graph Databases", "AWS EC2", "AWS Lambda", "Docker", "IoT"]
var description = "Versatile full stack developer with 2.5 years of experience with web design, development and deployment. Working with various client and server side technologies"
var data = [
	{
		"category": "Experience (% of career)",
		"NodeJS": 60,
		"ReactJS": 10,
		"PostgreSQL": 60,
		"IoT": 100,
	},
	{
		"category": "Interest",
		"NodeJS": 100,
		"ReactJS": 75,
		"PostgreSQL": 100,
		"IoT": 50,
	},
	{
		"category": "Skill (Self)",
		"NodeJS": 70,
		"ReactJS": 20,
		"PostgreSQL": 60,
		"IoT": 50,
	}
]

const PageD3 = ({ classes }) => {

	var index = "category"
	var keys = Object.keys(data[0])
	keys.splice(keys.indexOf(index), 1)

	return (
		<div className={classes.d3}>
			<NivoRadar
				keys={keys}
				index={index}
				data={data}
			/>
		</div>
	)
};


PageD3.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(PageD3);
