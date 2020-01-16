import React from 'react';
import { Grid } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';


export default function Loading() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <CircularProgress />
            </Grid>
        </Grid>
    );
}