import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    // display: 'flex',
    padding: '12px 16px',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  aboutText: {
    textAlign: 'left'
  },
  about: {
    fontSize: '12px',
    fontWeight: '400',
    color: '#283e4a',
  }
});

const ProfileStats = ({ classes, className, stats }) => (
  <div className={cx(classes.root, className)}>
    <div className={classes.aboutText}>
      {/* <Typography variant="h6">{posts}</Typography> */}
      <Typography variant="caption" color="textSecondary" className={classes.about}>Lorem ipsum dolor sit description</Typography>
    </div>
    {/* <div> */}
      {/* <Typography variant="h6">{followers}</Typography> */}
      {/* <Typography variant="caption" color="textSecondary">"Experienced web designer with a demonstrated history of working in the information technologyu & services industry"</Typography> */}
    {/* </div> */}
    {/* <div> */}
      {/* <Typography variant="h6">{following}</Typography> */}
      {/* <Typography variant="caption" color="textSecondary">"Experienced web designer with a demonstrated history of working in the information technologyu & services industry"</Typography> */}
    {/* </div> */}
  </div>
);

ProfileStats.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  posts: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number,
};

export default withStyles(styles)(ProfileStats);
