import React from 'react';
import { Grid } from '@material-ui/core'

const styles = {
    wrapper: {
        maxWidth: 800,
        maxHeight: 300,
        // border: '1px solid black',
        marginTop: 100,
        paddingLeft: 20,
        paddingRight: 20
    }
}

function ManageAccountWrapper({ children }) {
    return (
        <Grid container style={styles.wrapper}>
            <Grid item xs={12}>                
                {children}
            </Grid>
        </Grid>
    )
}

export default ManageAccountWrapper;