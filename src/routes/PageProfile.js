import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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
const styles = theme => ({
  post: {
    marginBottom: theme.spacing.unit * 2
  },
  menuBarArticle: {
    border: "1px solid #c1c1c1",
    borderRadius: "5px",
    marginBottom: "20px"
  },
  menuTabs: {
    width: "100%"
  },
  menuBar: {
    backgroundColor: "#ffffff",
    // width: '100%',
    borderRadius: "5px",
    borderBottomRightRadius: "0",
    borderBottomLeftRadius: "0",
    borderBottom: "none",
    boxShadow: "none  "
  },
  articleArea: {
    backgroundColor: "#f3f6f8",

    borderRadius: "5px",
    borderTopRightRadius: "0",
    borderTopLeftRadius: "0",
    borderBottom: "none",
    padding: "10px"
  },
  articleText: {
    width : "100%",
    border: "0",
    resize: "none",
    backgroundColor: "#f3f6f8"
  },
  newPostBtn: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px"
  },
  newbtn: {
    borderRadius: "25px",
    color: "#ffffff",
    backgroundColor: "#0073b1",
    fontSize: "16px",
    fontWeight: "500",
    width: "7.5rem",
    height: "32px",
    boxShadow: "none",
    position: "relative"
  },
  btnTextNew: {
    lineHeight: "3px"
  },
  lineIcon: {
    position: "absolute",
    left: "32px",
    top: "10px"
  },
  arrowUpIcon: {
    position: "absolute",
    top: "8px",
    left: "28px"
  },
  notificationsContainer: {
    borderRadius: "3px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#ffffff"
  },

  notificationsHead: {
    backgroundColor: "rgba(0, 115, 177, 0.6)",
    borderRadius: "3px",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0"
    // padding: '5px 2px'
  },
  addNote: {
    borderRight: "1px solid #c9c9c9",
    padding: "0",
    minWidth: "20%",
    [theme.breakpoints.down("xs")]: {
    fontSize : "10px",
    },
  },
  projectOwner: {
    borderRight: "1px solid #c9c9c9",
    padding: "0",
    minWidth: "20%",
    [theme.breakpoints.down("xs")]: {
      fontSize : "10px",
    },
  },
  feed: {
    borderRight: "1px solid #c9c9c9",
    padding: "0",
    minWidth: "20%",
    [theme.breakpoints.down("xs")]: {
      fontSize : "10px",
      },
  },

  teamMessage: {
    borderRight: "1px solid #c9c9c9",
    padding: "0",
    minWidth: "20%",
    [theme.breakpoints.down("xs")]: {
      fontSize : "10px",
      },
  },
  notify: {
    minWidth: "20%",
    padding: "0",
    [theme.breakpoints.down("xs")]: {
      fontSize : "10px",
      },
  },
  bellIcon: {
    margin: "-1px 5px",
    padding: "0"
    // minWidth: '20%'
  },
  msgcontainer: {
    padding: "0px!important",
    borderLeft: "1px solid #c9c9c9",
    borderRight: "1px solid #c9c9c9",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px"
  },
  notificationContent: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      height : "120px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "95px",
    },
    backgroundColor: "#ebf5ff",
    color: "#2e2e2e",
    fontSize: "15px",
    fontWeight: "500",
    padding: "16px 15px",
    justifyContent: "space-between",
    marginBottom: "8px",
    borderBottom: "1px solid #c9c9c9",
    whiteSpace: "normal"
  },

  notificationMessage: {
    flex: "8",
    marginLeft: "30px"
  },
  notificationText: {
    margin: "0px",
    marginBottom: "10px"
    // wordWrap: 'break-word'
  },
  ellipsesIcon: {
    marginRight: "3px"
  },
  count: {
    marginRight: "15px"
  },
  noteIcon: {
    marginRight: "5px"
  },
  commentIcon: {
    marginRight: "5px"
  }
});

const PageProfile = ({ classes }) => (
  <Layout>
    <ProfileCard
        displayName="Paul Nta"
        username="paulnta"
        avatarUrl="https://source.unsplash.com/collection/895539"
        profileUrl="/profile/paulnta"
        coverUrl="https://source.unsplash.com/collection/841904"
        stats={{
          posts: 112,
          followers: 234,
          following: 22
        }}
      />
  </Layout>
);


PageProfile.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(PageProfile);
