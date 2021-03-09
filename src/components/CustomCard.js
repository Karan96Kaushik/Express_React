import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    root: {
        background: theme.palette.background.secondary.main,
    },
    newsCard: {
        marginTop: '10px'
    },
    Listtitle: {
        fontSize: '15px',
        fontWeight: '500px',
        // color: '#0073b1',
        display: 'flex',
        justifyContent: 'center',
    },
});

function CustomCard(props) {
    const { classes } = props;
    return (
        <Card variant="outlined" style={props.customStyle} className={classes.root}>
            <CardContent>
                <Typography color="primary" className={classes.Listtitle} gutterBottom>
                    {(props.cardTitle) ? props.cardTitle : null}
                </Typography>
                {props.children}
            </CardContent>
        </Card>
    )
}

CustomCard.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(CustomCard);