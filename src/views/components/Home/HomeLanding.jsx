import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: 100
    },
    highlight: {
        color: '#6596bd',
        fontStyle: 'italic'
    }
}

function HomeLanding({ children }) {
    return (
        <Grid container>
            <Grid item xs={12} >
                <div style={styles.header} >
                    <Typography variant='display1'>Welcome to</Typography>
                    <Typography variant='display2' style={styles.highlight}>Know Your Supplier</Typography>
                    <Typography variant='caption'>where the buyer meets and knows his supplier</Typography>
                </div>

                {children}

            </Grid>
        </Grid>
    )
}

export default HomeLanding