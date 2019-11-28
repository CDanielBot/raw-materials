import React from 'react';
import { Grid } from '@material-ui/core';

const styles = {
    wrapper: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center'
    }
}

function RegisterPage({ children }) {
    return (
        <Grid container style={styles.wrapper}>
            {children}
        </Grid>
    )
}

export default RegisterPage;