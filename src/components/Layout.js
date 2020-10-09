import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    minWidth: '100%'
  },
  wrapper: {
    padding: theme.spacing.unit * 3,
    display: 'flex',
    marginTop: '50px',
    maxWidth: theme.layout.contentMaxWidth,
    margin: "0 auto"
  },

});

const Layout = ({ classes, children }) => (
  <div className={classes.root}>
    <main className={classes.wrapper}>
      <div style={{marginTop: '20px',width: '100%'}}>
        {children}
      </div>
    </main>
  </div>
);

Layout.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
  aside: PropTypes.node,
};

export default withStyles(styles)(Layout);
