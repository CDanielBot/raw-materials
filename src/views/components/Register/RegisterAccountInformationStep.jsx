import React from 'react'
import Radio from '@material-ui/core/Radio'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const styles = {
    textField: {
        minWidth: 200,
    },
    item: {
        display: 'flex',
        alignItems: 'center',
    },
}

export default function RegisterAccountInformationStep({ accountType, fiscalCode, handleInput }) {
    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField
                    name="fiscalCode"
                    label="Fiscal Registration Code"
                    onChange={handleInput}
                    value={fiscalCode}
                    style={styles.textField}
                />
            </Grid>
            <Grid item style={styles.item}>
                <Typography variant="body2">
                    Supplier:
                </Typography>
                <Radio
                    checked={accountType === 'supplier'}
                    onChange={handleInput}
                    name="accountType"
                    value="supplier"
                />
            </Grid>
            <Grid item style={styles.item}>
                <Typography variant="body2">
                    Buyer:
                </Typography>
                <Radio
                    checked={accountType === 'buyer'}
                    onChange={handleInput}
                    name="accountType"
                    value="buyer"
                />
            </Grid>
        </Grid>
    )
}