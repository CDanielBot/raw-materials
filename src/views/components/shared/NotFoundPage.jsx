import React from 'react'
import { Grid, Typography, Button, Paper } from '@material-ui/core';

const styles = {
    container: {
        width: '100%',
        marginTop: 80,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        padding: 32,
        maxWidth: 700,
        width: '100%',
        textAlign: 'center',
    },
    title: {
        fontSize: 200,
        fontWeight: 600,
    }
}

function NotFound() {
    return (
        <Grid container style={styles.container}>
            <Paper style={styles.wrapper}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Typography variant='display4' style={styles.title}>404</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='title' gutterBottom>Oops, the page you're lookin for Disappeared</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button href='/home'>
                            Back to home
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default NotFound;