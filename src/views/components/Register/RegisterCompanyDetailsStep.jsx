import React from 'react'
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

export default function RegisterCompanyDetailsStep(props) {

    const { companyName, licenseNumber, yearFounded, address, handleInput } = props

    return (
        <div>
            <TextField
                name="companyName"
                label="Company Name"
                onChange={handleInput}
                value={companyName}
                style={styles.textField}
            />
            <TextField
                name="licenseNumber"
                label="License Number"
                onChange={handleInput}
                value={licenseNumber}
                style={styles.textField}
            />
            <TextField
                name="yearFounded"
                label="Year of Establishment"
                onChange={handleInput}
                value={yearFounded}
                style={styles.textField}
            />
            <TextField
                fullWidth
                name="address"
                label="Address Line"
                onChange={handleInput}
                value={address}
                style={styles.textField}
            />
        </div>
    )
}