import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
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
            height: "120px",
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
    },
    root: {
        // minWidth: '700px',
        minWidth: '100%'
    },
    main: {
        width: '100%',
        flex: 1,
    },
});


function UserNotification(props) {
    const { classes } = props
    return (
        <div className={classes.root}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs zeroMinWidth className={classes.msgcontainer}>
                    <Typography noWrap className={classes.notificationContent}>
                        <div className={classes.notificationFromImage}>
                            <img src="../../public/assets/notifier.png" />
                        </div>
                        <div className={classes.notificationMessage}>
                            <div>
                                <p className={classes.notificationText}>
                                    {props.notificationText}
                                </p>
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={classes.noteIcon}
                                    width="15"
                                    height="14"
                                    viewBox="0 0 15 14"
                                >
                                    <g>
                                        <g>
                                            <path
                                                fill="#5ea7d0"
                                                d="M14.302 10.19V10h-4v4h.188c.2 0 .39-.078.531-.219l3.063-3.062a.748.748 0 0 0 .218-.528zM10.052 9h4.25V.75a.748.748 0 0 0-.75-.75h-12.5a.748.748 0 0 0-.75.75v12.5c0 .416.335.75.75.75h8.25V9.75c0-.412.338-.75.75-.75z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <span className={classes.count}>{props.noteCount}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={classes.commentIcon}
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                >
                                    <g>
                                        <g>
                                            <path
                                                fill="#0073b1"
                                                fill-opacity=".6"
                                                d="M14 9.333c0 .86-.696 1.556-1.556 1.556H3.111L0 14V1.556C0 .696.696 0 1.556 0h10.888C13.304 0 14 .696 14 1.556z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <span className={classes.count}>{props.commentCount}</span>
                            </div>
                        </div>
                        <div className={classes.moreToDo}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={classes.ellipsesIcon}
                                width="4"
                                height="4"
                                viewBox="0 0 4 4"
                            >
                                <g>
                                    <g>
                                        <path fill="#283e4a" d="M0 4V0h4v4z" />
                                    </g>
                                </g>
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={classes.ellipsesIcon}
                                width="4"
                                height="4"
                                viewBox="0 0 4 4"
                            >
                                <g>
                                    <g>
                                        <path fill="#283e4a" d="M0 4V0h4v4z" />
                                    </g>
                                </g>
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={classes.ellipsesIcon}
                                width="4"
                                height="4"
                                viewBox="0 0 4 4"
                            >
                                <g>
                                    <g>
                                        <path fill="#283e4a" d="M0 4V0h4v4z" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

UserNotification.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(UserNotification);
