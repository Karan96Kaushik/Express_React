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
    expandListItems: {
        borderTop: '2px solid #efefef',
        padding: '10px 0 0 0',
        margin: '10px 0 0 0'
      },
      listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 0px'
      },
      expandListTitle: {
        fontSize: '14px',
        fontWeight: '400',
        color: '#283e4a',
      },
});

function ExpandableCardList(props) {
    const { classes} = props;
    return (
        <div className={classes.listItem}>
            <Typography className={classes.expandListTitle}>
                {props.listTitle}
              </Typography>
            <Typography className={classes.expandIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11"><g><g><path fill="#283e4a" d="M10 7.214v2.5a.534.534 0 0 1-.536.536h-2.5a.536.536 0 0 1-.38-.915l.809-.808L5 6.134 2.606 8.529l.81.806a.536.536 0 0 1-.38.915h-2.5A.534.534 0 0 1 0 9.714v-2.5c0-.477.578-.716.915-.38l.808.809L4.117 5.25 1.723 2.855l-.808.81A.536.536 0 0 1 0 3.285v-2.5A.534.534 0 0 1 .536.25h2.5c.477 0 .716.578.38.915l-.809.808L5 4.366l2.394-2.395-.81-.806a.536.536 0 0 1 .38-.915h2.5A.534.534 0 0 1 10 .786v2.5a.536.536 0 0 1-.915.38l-.808-.809L5.883 5.25l2.394 2.395.808-.808c.337-.34.915-.1.915.377z" /></g></g></svg>
            </Typography>
        </div>

    )
}

ExpandableCardList.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(ExpandableCardList);
