import React from 'react'
import { Grid } from '@material-ui/core';

const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    container: {
        maxWidth: 1532,
        margin: 'auto',
        marginTop: 100,
    },
    item: {
        marginLeft: 16,
        marginRight: 16,
    }
}

export default function TabsWrapper({ children }) {
    return (
        <Grid container style={styles.wrapper}>
            <Grid container style={styles.container}>
                <Grid item xs={12} style={styles.item}>
                    {children}
                </Grid>
            </Grid>
        </Grid>
    )
}