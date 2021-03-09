import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import NivoRadar from "./NivoRadar"
import { Paper } from "@material-ui/core";

const styles = theme => ({
    root: {
		overflow: 'visible',
		// margin: theme.spacing.unit * 1,
		background: theme.palette.background.secondary.main,
		// textAlign: 'center',
		color:theme.palette.secondary.dark,
	},
	d3: {
		height: "650px",
		// paddingTop:"50px",
		// paddingBottom:"50px",
		margin:"20px",
		overflow: "visible"
	},
});

var tags = ["ReactJS", "NodeJS", "REST API", "GraphQL API", "MongoDB", "PostgreSQL", "Graph Databases", "AWS EC2", "AWS Lambda", "Docker", "IoT"]
var description = "Versatile full stack developer with 2.5 years of experience with web design, development and deployment. Working with various client and server side technologies"
var data = [
	{
		"category": "Experience (% of career)",
		"NodeJS": 100,
		"ReactJS": 20,
		"PostgreSQL": 80,
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
		"category": "Skill (Self Rated)",
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
		<Paper elevation={1} className={classes.root} spacing={3} style={{ margin: '0px 8px' }}>
			<div className={classes.d3}>
				<NivoRadar
					keys={keys}
					index={index}
					data={data}
				/>
			</div>
        </Paper>
	)
};


PageD3.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(PageD3);
