import React from 'react'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import UserNotification from '../../components/UserNotification';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
const styles = theme => ({
    menuBarArticle: {
        border: "0.5 solid " + theme.palette.background.primary.main,
        borderRadius: "5px",
        marginBottom: "20px"
    },
    menuTabs: {
        width: "100%"
    },
    menuBar: {
        backgroundColor: theme.palette.background.secondary.main,
        // width: '100%',
        borderRadius: "5px",
        borderBottomRightRadius: "0",
        borderBottomLeftRadius: "0",
        borderBottom: "none",
        boxShadow: "none  "
    },
    articleArea: {
        backgroundColor: theme.palette.background.secondary.main,

        borderRadius: "5px",
        borderTopRightRadius: "0",
        borderTopLeftRadius: "0",
        borderBottom: "none",
        padding: "10px"
    },
    articleText: {
        width: "100%",
        border: "0",
        resize: "none",
        backgroundColor: theme.palette.background.secondary.main
    },
    newPostBtn: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px"
    },
    newbtn: {
        borderRadius: "25px",
        // color: "#ffffff",
        backgroundColor: theme.palette.background.secondary.main,
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
        // color: "#ffffff"
    },

    notificationsHead: {
        backgroundColor: "rgba(0, 115, 177, 0.6)",
        borderRadius: "3px",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0"
        // padding: '5px 2px'
    },
    tabItemsCustom: {
        // border: "1px solid #c9c9c9",
        fontSize: "10px",
        minWidth: "20%",
    },
    bellIcon: {
        margin: "-1px 5px",
        padding: "0"
        // minWidth: '20%'
    },
    root: {
        // minWidth: '700px',
        minWidth: '100%'
    },
    file: {
        width: '100%',
    },
    main: {
        width: '100%',
        flex: 1,
    },
});


function TeamMessage(props) {
    const {classes} = props

    return (
        <div>
<div className={classes.newPostBtn}>
    <Button variant="contained" color="primary" className={classes.newbtn}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.lineIcon}
            width="3"
            height="13"
            viewBox="0 0 3 13"
        >
            <g>
                <g>
                    <path
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="20"
                        stroke-width="2"
                        d="M1.708 11.588V1.811"
                    />
                </g>
            </g>
        </svg>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.arrowUpIcon}
            width="12"
            height="8"
            viewBox="0 0 12 8"
        >
            <g>
                <g>
                    <path
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="20"
                        stroke-width="2"
                        d="M1 6.3v0l4.566-4.565v0l4.565 4.566v0"
                    />
                </g>
            </g>
        </svg>
        <span className={classes.btnTextNew}>New</span>
    </Button>
</div>
<div className={classes.notifications}>
    <div className={classes.notificationsContainer}>
        <Grid
            container
            wrap="nowrap"
            spacing={2}
            className={classes.notificationsHead}
        >
            <Grid item xs zeroMinWidth>
                <Typography noWrap>
                    <span>Notifications</span>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={classes.bellIcon}
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                        >
                            <g>
                                <g>
                                    <path
                                        fill="#fff"
                                        d="M11.608 8.895a.767.767 0 0 1 .211.534.786.786 0 0 1-.788.785H1.608a.786.786 0 0 1-.789-.785.767.767 0 0 1 .212-.534c.474-.51 1.362-1.276 1.362-3.788 0-1.908 1.338-3.435 3.141-3.81V.786a.786.786 0 1 1 1.57 0v.511c1.804.375 3.142 1.902 3.142 3.81 0 2.512.888 3.279 1.362 3.788zm-5.289 3.676c-.867 0-1.57-.703-1.57-1.571H7.89c0 .868-.703 1.571-1.57 1.571z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </span>
                </Typography>
            </Grid>
        </Grid>
    </div>
    {/* notification comes here */}
    <UserNotification
        notificationText='Initial Scan of the CT SCAN Model - Team meeting to start
discussion'
        commentCount='04'
        noteCount='03'
    />
</div>
</div>
    )
}

TeamMessage.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(TeamMessage);
