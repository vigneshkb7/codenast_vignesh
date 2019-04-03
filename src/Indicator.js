import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  display:{
   display:'inline-block',
   padding:5
  },
  indicator:{
    width:31,
    height:31,
    borderRadius:31
  },
  dot:{
    color:'white',
    paddingTop:35
  }
};

function dynamicColor(status){
  switch(status) {
    case 'Complete':
      return { backgroundColor:'#55C447'}
    case 'PartialLoad':
      return { backgroundColor:'#F4BB48'}
    case 'QualityAlert':
      return { backgroundColor:'#F1DA38'}
    case 'NoLoad':
      return { backgroundColor:'#DD5759'}
    default:
      return { backgroundColor:'transparent',border:'1px solid white'}
  }
}
function Indicator({classes,status,date }) {
return (
<div className={classes.display}>
<div className={classes.indicator} style={dynamicColor(status)}>
<div className={classes.dot}>{date}</div>
</div>
</div>
  );
}

Indicator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Indicator);
