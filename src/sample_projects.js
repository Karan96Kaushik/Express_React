import Avatar from '@material-ui/core/Avatar';
import React from "react";
import { Link } from 'react-router-dom';
// import { Link } from '@material-ui/core';

// var icon = <Avatar className={classes.avatar} src="https://source.unsplash.com/random/256x256" />
var icon = <Avatar src="https://source.unsplash.com/random/256x256" />

var Projects = [
    {
        projectName: "Big1", projectDate: "12:53 / 21/05/16", projectLink: "/project/1234/", id: "1234", stats: {
            creationDate: "12:53 / 21/05/16",
            members: 7,
            contentitems: 234,
            comments: 220
        },
        managers: [[icon, "", "Droid1"], [icon, "", "Droid2"], [icon, "", "Droid3"]],
        team: [[icon, "Android1"], [icon, "Android2"], [icon, "Android2"]],
        versions:[[icon, "V11", "1234", <Link to="v/1234/">GO</Link>]]
    },
    {
        projectName: "Big1", projectDate: "12:53 / 21/05/17", projectLink: "/project/1235/", id: "1235", stats: {
            creationDate: "12:53 / 21/05/16",
            members: 7,
            contentitems: 234,
            comments: 220
        },
        managers: [[icon, "", "BDroid1"], [icon, "", "BDroid2"], [icon, "", "Droid3"]],
        team: [[icon, "CAndroid1"], [icon, "CAndroid2"], [icon, "Android2"]],
        versions:[[icon, "V21", "1235", <Link to="v/1235/">GO</Link>]]
    },
];

export default Projects;