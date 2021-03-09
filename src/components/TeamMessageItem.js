import React from 'react'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    avatar: {
        display : 'inline-block',
        height: 72,
        width: 72,
        border: `5px solid ${theme.palette.common.white}`,
        background: theme.palette.grey[200],
      },
});


function TeamMessageItem(props) {
    const {classes} = props
    return (
        <Grid container>
            <Grid item xs={2}>
                <div className={classes.teamListItem}>
                    <Avatar className={classes.avatar} src={props.imgUrl} />
                </div>
            </Grid>
            <Grid item xs={9}>
                <div className={classes.teamListItem}>
                    <Typography variant="subtitle2">
                       {props.name}
                    </Typography>
                    <Typography variant="caption">
                        {props.message}
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={1}>
                <Typography variant="caption" display="block" gutterBottom>
                    {props.date}
                </Typography>
            </Grid>
        </Grid>
    )
}

TeamMessageItem.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(TeamMessageItem);
