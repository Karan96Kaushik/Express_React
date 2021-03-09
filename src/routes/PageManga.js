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

import Btn from '../components/mui_button';
import Inp from '../components/mui_input';
import Combo from '../components/search';
import swal from 'sweetalert';
import { Paper, Typography } from "@material-ui/core";

const styles = theme => ({
    root: {
        overflow: 'visible',
        // margin: theme.spacing.unit * 1,
        background: theme.palette.background.secondary.main,
        textAlign: 'center',
        color: theme.palette.secondary.dark,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "auto",
        marginTop: "50px",
        padding: "50px",
        width: "75%",
    },
});

const PageProject = ({ classes, props }) => {

    var _value = ''

    var _changed = (state) => {
        _value = (state.target.value);
    }

    function _downlaod() {
        var data = {
            fname: _value
        }

        function serialize(obj) {
            var str = [];
            for (var p in obj)
                if (obj.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
            return str.join("&");
        }

        //swal('Downloading', data)

        fetch('http://creepyfuck.tech/down?' + serialize(data), {
            //fetch('http://cathedral.local/down?' + serialize(data), {
            method: 'POST',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                swal('Downloading', data[0])

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <Layout>
            <Grid container spacing={3}>

                <Grid item xs={12} md={3}></Grid>

                <Grid item xs={12} md={6}>
                    <Paper elevation={1} className={classes.root} spacing={3}>
                        <Typography variant="h4" color="primary">Manga Downloader</Typography>
                        <Inp
                            _onChange={_changed}
                            _label="Link"
                        />
                        <Btn
                            _onClick={_downlaod}
                            // _onFocus={_downlaod}
                            _text={'Download'}
                        />
                        <a href='http://creepyfuck.tech/Manga/'>
                            <img alt='Open Comics' src='/react/comic.png' style={{ margin: "20px" }} height='50px' />
                        </a>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={3}>
                </Grid>

            </Grid>
        </Layout>
    )
};

PageProject.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(PageProject);
