import React from 'react'
import { Grid } from '@material-ui/core'

const styles = {
    wrapper: {
        maxWidth: 1000,
        marginTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'table'
    }
}

function HomeWrapper({ children }) {
    return (
        <Grid container style={styles.wrapper}>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    )
}

export default HomeWrapper