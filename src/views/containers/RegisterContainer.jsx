import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel, Button, Typography, Paper } from '@material-ui/core/Stepper'
import { grey } from '@material-ui/core/colors'
import {
    RegisterAccountInformationStep, RegisterCompanyDetailsStep,
    RegisterPersonalDataStep, RegisterAccountCreatedStep
} from '../components/Register'
import { ProgressBar } from '../components/shared'
import { connect } from 'react-redux'
import { authActions } from '../../state/ducks/auth'
import { toastr } from 'react-redux-toastr'

const styles = theme => ({
    root: {
        maxWidth: 600,
        margin: '80px auto',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    stepperHeader: {
        backgroundColor: grey[100],
    },
})

function getSteps() {
    return ['Account Information', 'Company Details', 'Personal Data']
}

class RegisterContainer extends React.Component {
    state = {
        activeStep: 0,
        progress: 1,

        account: {
            fiscalCode: '',
            accountType: '',
            companyName: '',
            licenseNumber: '',
            yearFounded: '',
            address: '',
            firstName: '',
            email: '',
            password: '',
            confirmationPassword: '',
            phoneNumber: '',
        }
    }

    render() {
        const { classes } = this.props
        const steps = getSteps()
        const { activeStep } = this.state

        return (
            <Paper className={classes.root}>
                <Stepper activeStep={activeStep} className={classes.stepperHeader}>
                    {steps.map(label => {
                        const props = {}
                        const labelProps = {}
                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
                <ProgressBar progress={this.state.progress} />
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography component="div" className={classes.instructions}>
                                <RegisterAccountCreatedStep />
                            </Typography>
                        </div>
                    ) : (
                            <div>
                                <Typography component="div" className={classes.instructions}>
                                    {this.getStepContent(activeStep)}
                                </Typography>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>

                                    {activeStep === steps.length - 1 ? (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.createAccount}
                                            className={classes.button}
                                        >
                                            Create Account
                                        </Button>
                                    ) : (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={this.handleNext}
                                                className={classes.button}
                                            >
                                                Next
                                            </Button>
                                        )}
                                </div>
                            </div>
                        )}
                </div>
            </Paper>
        )
    }

    getStepContent = step => {
        switch (step) {
            case 0:
                return <RegisterAccountInformationStep
                    accountType={this.state.account.accountType}
                    fiscalCode={this.state.account.fiscalCode}
                    handleInput={this.handleInput} />
            case 1:
                return <RegisterCompanyDetailsStep
                    companyName={this.state.account.companyName}
                    licenseNumber={this.state.account.licenseNumber}
                    yearFounded={this.state.account.yearFounded}
                    address={this.state.account.address}
                    handleInput={this.handleInput} />
            case 2:
                return <RegisterPersonalDataStep
                    firstName={this.state.account.firstName}
                    lastName={this.state.account.lastName}
                    email={this.state.account.email}
                    password={this.state.account.password}
                    confirmationPassword={this.state.account.confirmationPassword}
                    phoneNumber={this.state.account.phoneNumber}
                    handleInput={this.handleInput} />
            default:
                return 'Unknown step'
        }
    }

    createAccount = async () => {
        try {
            await this.props.createAccount(this.state.account)
            this.handleNext()
            toastr.success('Succesful registration', 'You successfully registered to our system. You can login now')
            this.props.history.push('/login')
        } catch (error) {
            toastr.error(error ? error.data.message : 'Backend down')
        }
    }

    handleInput = event => {
        const { name, value } = event.target

        this.setState(prevState => ({
            ...prevState,
            account: {
                ...prevState.account,
                [name]: value
            }
        }))
    }

    handleNext = () => {
        const { activeStep, progress } = this.state
        this.setState({ activeStep: activeStep + 1, progress: progress + 33 })
    }

    handleBack = () => {
        const { activeStep, progress } = this.state
        this.setState({ activeStep: activeStep - 1, progress: progress - 33 })
    }
}

RegisterContainer.propTypes = {
    classes: PropTypes.object,
}

export default connect(undefined, { ...authActions })(withStyles(styles)(RegisterContainer))
