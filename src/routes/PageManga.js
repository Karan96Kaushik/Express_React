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

const styles = theme => ({
    count: {
        marginRight: "15px"
    },
    root: {
        // minWidth: '700px',
        textAlign: 'center',
        minWidth: '100%',
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
    ryuk: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection:"column",
        height:"300px",
        // flexDirection:"row",
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

                <Grid item xs={12} md={3}>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div>
                        <div className={classes.ryuk}>
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
                                <div>
                                    <img alt='Open Comics' src='/react/comic.png' height='50px' />
                                </div>
                            </a>

                        </div>

                        <br />
                    </div>
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
