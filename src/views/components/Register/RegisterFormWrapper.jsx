import React from 'react';
import { Grid } from '@material-ui/core'

const styles = {
    wrapper: {
        maxWidth: 400,
        marginTop: 100,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'table',
    }
}

function RegisterFormWrapper({children}) {
    return (
        <Grid container style={styles.wrapper}>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    )
}

export default RegisterFormWrapper