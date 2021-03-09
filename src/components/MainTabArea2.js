import React from "react";
import PropTypes from "prop-types";
import { withStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
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


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            color="primary"
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function MainTabArea({ classes,tabs }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = useTheme()

    return (
        <div className={classes.main}>
            <div className={classes.menuBarArticle}>
                <AppBar position="static" className={classes.menuBar}>
                    <Tabs
                        value={value} onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        className={classes.menuTabs}
                        variant="scrollable"
                        scrollButtons="off"
                        fillColor={theme.palette.primary.main}
                        aria-label="simple tabs example"
                    >
                        {tabs.map((tab, index) => (
                            <Tab
                                {...a11yProps(index)}
                                label={tab.label}
                                className={classes.tabItemsCustom}
                                icon={tab.icon}
                            />
                        ))}
                    </Tabs>
                </AppBar>

                {/* <PostCard
      className={classes.post}
      title="Burrata Black Bean Burgers"
      subtitle="@Sandra posted 3 days ago"
      // imageUrl="https://source.unsplash.com/sWq83ZbZb6U/1600x900"
      avatarUrl="https://source.unsplash.com/EGVccebWodM/150x150"
      body="These vegetarian burgers are delicious! Your carnivorous friends will be impressed. My favorite way to serve is on a whole-wheat bun with garlic-lemon mayonnaise, fresh raw spinach, sliced tomato, and caramelized onions!"
    /> */}
                <div className={classes.articleArea}>
                    <form>
                        <textarea
                            className={classes.articleText}
                            placeholder="Write article here..."
                        ></textarea>
                    </form>
                </div>
            </div>
            {tabs.map((tab, index) => (
                <TabPanel value={value} index={index}>
                    {tab.panel}
                </TabPanel>
            ))}
        </div>
    )
}

MainTabArea.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(MainTabArea);
