import React from 'react';
import { Typography, Box, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';


import useStyles from './styles.js';

const LocationDetails = ({ location }) => {
    const classes = useStyles();
    function addToList (data) {
        console.log();
        if (localStorage.getItem(data.location_id)) {
            alert("Location already added in the List");
        } else {
            localStorage.setItem(data.location_id, JSON.stringify(data));
            const element = document.getElementById(data.location_id);
            element.classList.add("Mui-disabled", true);
            element.querySelector(".MuiButton-label").innerHTML = "SAVED";
        }
    };
    function AddButton({ data }) {
        if (localStorage.getItem(data.location_id) != null) {
            return <Button disabled className={classes.button}>Saved</Button>
        } else {
            return <Button 
                id = { data.location_id }
                variant="contained" 
                color="primary"
                onClick = { () => addToList(data) }
                >
                Add to List
            </Button>
        }
    }
    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 200 }}
                image={ location.photo ? location.photo.images.large.url : 'https://cdn-icons-png.flaticon.com/512/242/242452.png' }
                title={ location.name }
            />
            <CardContent>
                <Box display="flex" justifyContent="space-between">
                    <Typography gutterBottom variant="h5">{ location.name }</Typography>
                    <AddButton data={location}/>
                </Box>
                <Typography gutterBottom variant="subtitle">{ location.address }</Typography>
            </CardContent>
        </Card>
    );
}

export default LocationDetails;