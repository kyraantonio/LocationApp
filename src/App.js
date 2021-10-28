import React, {useEffect, useState} from 'react';
import { CssBaseline, Grid, Tab, Tabs, Typography, Box} from '@material-ui/core';

import  { getLocationsData } from './api'

import SavedList from './SavedList/SavedList';
import BasicTabs from './components/BasicTabs/BasicTabs';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    const [locations, setLocation] = useState([]);
    const [savedLocations, setSavedLocation] = useState([]);

    const [coordinates, setCoordinates] = useState();
    const [bounds, setBounds] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        // navigator.geolocation.getCurrentPosition((props) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(async () => {
        console.log(coordinates,bounds);
        const data = await getLocationsData(bounds.sw, bounds.ne)
        setLocation(data);
            
    }, [coordinates, bounds]);

    // useEffect(() => {
    //     var values = [],
    //         keys = Object.keys(localStorage),
    //         i = keys.length;
    
    //     while ( i-- ) {
    //         values.push( JSON.parse(localStorage.getItem(keys[i])) );
    //     }
    //     setSavedLocation({'data': values});
    //     console.log(savedLocations);
    // }, []);
    const savedData = () => {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
    
        while ( i-- ) {
            values.push( JSON.parse(localStorage.getItem(keys[i])) );
        }
        return {'data': values};
    }
    
    return (
        
        <>
        <CssBaseline/>
        <Header />
        <Grid container spacing={3} style={{ width: '100%'}}>
            <Grid item xs={12} md={4} >
                <BasicTabs 
                    Item1 = {<List locations={ locations }/>}
                    Item2 = { <SavedList savedLocations={ savedData }/> }
                    ></BasicTabs>
                
            </Grid>
            <Grid item xs={12} md={8} >
                <Map
                    setCoordinates = {setCoordinates}
                    setBounds = { setBounds }
                    coordinates = { coordinates }
                />
            </Grid>
        </Grid>
        </>
        
    );
}

export default App;