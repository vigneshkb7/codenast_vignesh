import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Indicator from './Indicator';
const styles = {
  card: {
    minWidth: 400,
    margin:15,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    color:'white',
    backgroundColor:'#2B3043',
    padding:10,
    textAlign:'initial',
    fontWeight:'bold'
  },
  content:{
   backgroundColor:'#151A25',
   padding:'15px 15px 40px 15px'
  },
  status:{
   backgroundColor:'#141C29'
  },
  pos: {
    padding:'0 !important'
  },
};

function IndicatorCard({classes,name,statusByDate}) {
return (
    <Card className={classes.card}>
      <CardContent className={classes.pos}>
        <Typography className={classes.title} color="textSecondary">
         {name}
        </Typography>
        <Typography className={classes.content} >
        {statusByDate.map(data=><Indicator status={data.status} date={data.date}/>)}
        </Typography>
      </CardContent>
    </Card>
  );
}

IndicatorCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndicatorCard);
