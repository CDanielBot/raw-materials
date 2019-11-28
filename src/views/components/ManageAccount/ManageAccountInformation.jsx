import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const styles = {
    header: {
        textAlign: 'center',
        paddingBottom: 100
    },
    item: {
        padding: 10,
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        marginLeft: 24
    }
}

function ManageAccountInformation({ children }) {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="display2" style={styles.header}>
                    Manage Account
                </Typography>

                {children}

            </Grid>
        </Grid>
    )
}

export default ManageAccountInformation