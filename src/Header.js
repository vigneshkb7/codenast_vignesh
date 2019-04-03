import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
   
  },
  header:{
    color:'white',
    backgroundColor:'#1B203A'
}

};

function Header({ classes,time}) {
return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static" color="default">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            CODE NAST 

          </Typography>
          </Toolbar>

      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
