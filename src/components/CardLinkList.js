import React from 'react'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';


const styles = theme => ({
    userFields: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',

    },
    linkText: {
        fontSize: 12,
        fontWeight: 400,
        // color: '#283e4a',
    },
    addIcon: {
        fontSize: '18px',
        marginTop: '5px',
    },
});
function CardLinkList(props) {
    const { classes } = props
    return (
        <div className={classes.userFields}>
            <Typography color="primary" variant="subtitle1">
                <Link variant="inherit" href="#" className={classes.linkText}>
                    {props.linkText}
                  </Link>
            </Typography>
            <AddIcon className="fa fa-plus-circle" className={classes.addIcon}></AddIcon>
        </div>
    )
}

CardLinkList.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(CardLinkList);