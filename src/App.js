import React, { Component } from 'react';
import { RefreshTime,userEngagement,adDelivery,consumerMarketing} from './data';
import IndicatorCard from './IndicatorCard';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Header from './Header';
import './App.css';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 8,
    textAlign: 'center',
    color:'white',
    backgroundColor:'#1B203A'
  },
  heading:{
    fontSize: 22,
    color:'#96719f',
    padding:'15px 0 15px 15px',
    textAlign:'initial',
    fontWeight:'bold',
    borderBottom:'2px solid #96719f'
  }
})
function App(props){
    const { classes } = props;
    return (
      <div className="App">
      <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
       
       <Header time={RefreshTime}/>
       
        </Grid>
        <Grid item xs={4}>
         <div className={classes.heading}>User Engagement</div>
        {userEngagement.map(data=>
        <IndicatorCard name={data.name} statusByDate={data.statusByDate}/>)}
        </Grid>
        <Grid item xs={4}>
        <div className={classes.heading}>Ad Delivery</div>
        {adDelivery.map(data=>
        <IndicatorCard name={data.name} statusByDate={data.statusByDate}/>)}
        </Grid>
        <Grid item xs={4}>
        <div className={classes.heading}>Consumer Marketing</div>
        {consumerMarketing.map(data=>
        <IndicatorCard name={data.name} statusByDate={data.statusByDate}/>)}
        </Grid>
      </Grid>
    </div>
    </div>
    );
  }


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);