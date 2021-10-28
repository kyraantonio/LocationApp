import React from 'react';
import { Grid, Typography, Box, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';

import useStyles from './styles';

const SavedList = ( { location } ) => {
    const classes = useStyles();

    return (
        <div>Records</div>
        // <Card elevation={6}>
        //     <CardMedia
        //         style={{ height: 200 }}
        //         image={ location.photo ? location.photo.images.large.url : 'https://cdn-icons-png.flaticon.com/512/242/242452.png' }
        //         title={ location.name }
        //     />
        //     <CardContent>
        //         <Box display="flex" justifyContent="space-between">
        //             <Typography gutterBottom variant="h5">test</Typography>
        //             <Button 
        //                 id = { ''}
        //                 variant="outlined" 
        //                 color="secondary"
        //                 onClick = { '' }
        //                 >
        //                 Remove
        //             </Button>
        //         </Box>
        //         <Typography gutterBottom variant="subtitle">''</Typography>
        //     </CardContent>
        // </Card>
    );
}

export default SavedList;