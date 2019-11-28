import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const styles = {
    textField: {
        minWidth: 200,
    },
    item: {
        display: 'flex',
        alignItems: 'center',
    },
}

export default function PersonalDataStep(props) {

    const { firstName, lastName, email, password, confirmationPassword, phoneNumber, handleInput } = props

    return (
        <Grid container>
            <Grid item>
                <TextField
                    name="firstName"
                    label="First Name"
                    onChange={handleInput}
                    value={firstName}
                    style={styles.textField}
                />
            </Grid>
            <Grid item>
                <TextField
                    name="lastName"
                    label="Last Name"
                    onChange={handleInput}
                    value={lastName}
                    style={styles.textField}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    name="email"
                    label="Email"
                    onChange={handleInput}
                    value={email}
                    style={styles.textField}
                />
            </Grid>

            <Grid item>
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handleInput}
                    value={password}
                    style={styles.textField}
                />
            </Grid>
            <Grid item>
                <TextField
                    name="confirmationPassword"
                    label="Confirm Password"
                    type="password"
                    onChange={handleInput}
                    value={confirmationPassword}
                    style={styles.textField}
                />
            </Grid>

            <Grid item>
                <TextField
                    name="phoneNumber"
                    label="Phone Number"
                    onChange={handleInput}
                    value={phoneNumber}
                    style={styles.textField}
                />
            </Grid>
        </Grid>
    )
}