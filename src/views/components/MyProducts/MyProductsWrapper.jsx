import React from 'react'
import { Grid } from '@material-ui/core'

const styles = {
    wrapper: {
        padding: 8 * 2,
        paddingTop: 8 * 2,
        paddingBottom: 8 * 4,
    }
}

export default function MyProductsWrapper({ children }) {
    return (
            <Grid container style={styles.wrapper} spacing={16}>
                {children}
            </Grid>
    )
}