import React from 'react';
import { AppBar, Tabs, Tab, CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';
import LocationDetails from '../LocationDetails/LocationDetails';

import useStyles from './styles';
  
const List = ( { locations } ) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h5">Places near you...</Typography>
            <Grid container spacing={3} className={classes.list}>
                {locations?.map((location, i) => (
                    <Grid item key={i} xs={12}>
                        <LocationDetails location={ location }/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}


export default List;