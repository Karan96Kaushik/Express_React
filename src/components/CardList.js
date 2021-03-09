import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import MainTabArea from "./_MainTabArea.js.bkp";
import CustomCard from "../components/CustomCard";

const styles = theme => ({
    summaryList: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 0px'
    },
    summaryText: {
        fontSize: '12px',
        fontWeight: '500',
        // color: 'rgba(0, 0, 0, 0.6)',
    },
    summaryCount: {
        fontSize: '12px',
        fontWeight: '500',
        // color: '#0073b1',
    },
});

function CardList(props) {
    const { classes } = props
    console.log(props)
    return (
        <div className={classes.summaryList}>
            <Typography color="primary" className={classes.summaryText}>
                {props.text}
            </Typography>
            <Typography color="secondary" className={classes.summaryCount}>
                {props.count}
            </Typography>
        </div>
    )
}

CardList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardList);
