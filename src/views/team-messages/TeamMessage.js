import React from 'react'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { CaretDownIcon } from '../../components/CustomIcons'
import TeamMessageItem from '../../components/TeamMessageItem';

const styles = theme => ({
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
    bellIcon: {
        margin: "-1px 5px",
        padding: "0"
    },
    headIcon:{
        margin: "-1px 5px",
        padding: "0",
        verticalAlign: 'middle'
    },
    headButton: {
        float: 'right',
        background: '#0073B1',
        border: 'none',
        padding: '5px 20px',
        color: '#fff',
    },
    headSearchContainer:{
        margin: '8px 0px'
    },
    headSearch: {
        width: '100%',
        padding: '10px'
    },
    teamHeadTitle: {
    paddingLeft: '10px',
    color: '#66ABD0',
    },
    headTitle: {
        position: 'relative',
        top: '-5px',
    }
});


function TeamMessage(props) {
    const {classes} = props

    return (
        <div className={classes.notifications}>
            <div className={classes.notificationsContainer}>
                <Grid
                    container
                    spacing={2}
                    className={classes.notificationsHead}
                >
                    <Grid item xs={6}>
                        <span className={classes.headTitle}>
                            Time
                            <CaretDownIcon style={{marginLeft: '7px'}} />
                        </span>
                    </Grid>
                    <Grid item xs={6}>
                            <button className={classes.headButton}>New</button>
                    </Grid>
                </Grid>
                <Grid
                    container
                    wrap="nowrap"
                    spacing={2}
                >
                     <Grid item xs={12} style={{padding: 0}}>
                        <input className={classes.headSearch} type='text' placeholder="search messages or Team" />
                     </Grid>

                </Grid>
            </div>

            <Grid
                container
                spacing={2}
                style={{ backgroundColor: '#EBF5FF'}}
            >
                <Grid item xs={12}>
                    <p className={classes.teamHeadTitle}>FAVOURITES</p>
                </Grid>
                <TeamMessageItem 
                imgUrl='https://source.unsplash.com/collection/895539'
                name="Matt Mathew"
                message='Lorem ipsum dolor sit amet, consectetur adipisicing elit'
                date='fri'
                />
            </Grid>
        </div>

    )
}

TeamMessage.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(TeamMessage);
