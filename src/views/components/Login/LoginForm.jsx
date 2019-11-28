import React from 'react'
import { Paper, Grid, Typography, TextField, Button } from '@material-ui/core'
import teal from '@material-ui/core/colors/teal'
import EmailIcon from '@material-ui/icons/Email'
import LockIcon from '@material-ui/icons/Lock'
import InputAdornment from '@material-ui/core/InputAdornment'
import PropTypes from 'prop-types'

const styles = {
    header: {
        backgroundColor: teal[400],
        textAlign: 'center',
        textColor: 'white',
        paddingTop: 20,
        paddingBottom: 20
    },
    headline: { color: 'white' },
    contentContainer: {
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 30,
        marginRight: 30,
    },
    emailContainer: { display: 'flex' },
    footer: {
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30
    },
    textField: {
        marginBottom: 30,
    },
}

LoginForm.defaultProps = {
    title: 'Login here'
}

LoginForm.propTypes = {
    title: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired,
}

function LoginForm({ title, handleSubmit, handleInput }) {

    const keyPress = event => {
        if (event.keyCode === 13)
            handleSubmit()
    }

    return (
        <Paper square>
            <Grid container style={styles.container}>
                <Grid item xs={12} style={styles.header}>
                    <Typography variant="headline" style={styles.headline}>
                        {title}
                    </Typography>
                </Grid>
                <Grid container style={styles.contentContainer}>

                    <Grid item xs={12}>
                        <TextField 
                            fullWidth
                            name="email"
                            label="Email"
                            style={styles.textField}
                            onKeyDown={keyPress}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon style={styles.icon} />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            onKeyDown={keyPress}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon style={styles.icon} />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={handleInput}
                        />
                    </Grid>
                </Grid>

                <Grid container style={styles.footer}>
                    <Button
                        variant="raised"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default LoginForm