import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const styles = {
    wrapper: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center'
    },
    secondWrapper: {
        maxWidth: 800,
        maxHeight: 300,
        // border: '1px solid black',
        marginTop: 100,
        paddingLeft: 20,
        paddingRight: 20
    }
}

function MyOffersPage({ children }) {
    return (
        <Grid container style={styles.wrapper}>
            <Grid container style={styles.secondWrapper}>
                <Grid item xs={12}>
                    <Typography variant="display2" style={styles.header}>
                            Offer requests
                    </Typography>
                    {children}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MyOffersPage;