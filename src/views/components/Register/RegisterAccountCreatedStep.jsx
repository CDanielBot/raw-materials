import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom'

const styles = {
    container: {
        padding: 8 * 2,
    },
    item: {
        display: 'flex',
    },
}

export default withRouter(function RegisterAccountCreatedStep({ history }) {

    const redirect = () => {
        history.push('/home')
    }

    return (
        <Grid container style={styles.container} justify="center">
            <Grid item>
                <Typography variant="headline">Account Successfully created</Typography>
                <Typography variant="body1">Click the button bellow to visit the home page</Typography>
                <Button onClick={redirect} variant="raised" color="primary">
                    Get Started
                </Button>
            </Grid>
        </Grid>
    )
})