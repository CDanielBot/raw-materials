import React from 'react'
import { ManageAccountInformation, ManageAccountWrapper, ManageAccountPage } from '../components/ManageAccount'
import { authActions } from '../../state/ducks/auth'
import { connect } from 'react-redux'
import CardLine from '../components/CardLine/CardLine'
import ChangePasswordDialog from '../components/Dialogs/ChangePasswordDialog'
import { toastr } from 'react-redux-toastr'

// TODO: validation
// const passwordErrors = {
//     'invalidCurrentPassword': 'This is not your current password',
//     'lessThan6': 'Password can NOT have less than 6 characters',
//     'passwordConfirmationMismatch': 'Confirmation password does NOT match',
//     'newPasswordMatchesOldPassword': 'New Password has to be different from old password'
// }

class ManageAccountContainer extends React.Component {
    state = {
        emailConfig: {
            label: 'Email',
            value: this.props.auth.user.email,
            edit: false
        },
        passwordConfig: {
            label: 'Password',
            value: '******',
            edit: true,
            password: {
                old: '',
                new: '',
                newConfirmed: ''
            },
            showDialog: false
        }
    }

    // TODO: validation
    // validatePasswordOnLeave = (event) => {
    //     const field = event.target.name
    //     const value = event.target.value

    //     if (value.length === 0) {
    //         return
    //     }

    //     // Mock password of '123456'
    //     const currentUserPassword = '123456'

    //     let passwordError = Object.assign({}, this.state.passwordError)
    //     // Validate if current password has been typed correctly
    //     if (field === 'old' && value !== currentUserPassword) {
    //         passwordError[field] = passwordErrors.invalidCurrentPassword
    //         this.setState({ passwordError: passwordError })
    //         return
    //     }

    //     // Validate password to NOT have less than 6 characters
    //     if (value.length < 6) {
    //         passwordError[field] = passwordErrors.lessThan6
    //     }

    //     // Validate that newPassword is NOT the old password
    //     if (field === 'new' && value === this.state.password.old) {
    //         passwordError[field] = passwordErrors.newPasswordMatchesOldPassword
    //     }

    //     // Validate that newPassword and newConfirmPassword are the same
    //     if (field === 'newConfirmed' && value !== this.state.password.new) {
    //         passwordError[field] = passwordErrors.passwordConfirmationMismatch
    //     }

    //     this.setState({ passwordError: passwordError })
    //     console.log(this.state.password)
    // }

    handleUpdatePassword = async () => {
        // TODO implement enableSubmit in dialog
        // if (this.state.passwordError.old.length > 0 ||
        //     this.state.passwordError.new.length > 0 ||
        //     this.state.passwordError.newConfirmed.length > 0 ||
        //     this.state.password.newConfirmed.length === 0) {
        //     toastr.error('Rezolve errors before updating password')
        //     return
        // }

        // TODO make http call to update password

        try {
            await this.props.updateUser(this.props.auth.user.userId, this.props.auth.user.email, this.state.passwordConfig.password.old, this.state.passwordConfig.password.new)
            toastr.success(`Congrats! You've updated your password.`)
            this.handleClose()
        } catch (error) {
            toastr.error(error ? error.data.message : 'Backend down')
        }
    }

    handleClose = () => {
        this.setState({
            passwordConfig: {
                ...this.state.passwordConfig,
                password: {
                    old: '',
                    new: '',
                    newConfirmed: ''
                },
                showDialog: false
            }
        })
    }

    render() {
        return (
            <ManageAccountPage>
                <ManageAccountWrapper>
                    <ManageAccountInformation />

                    <CardLine
                        label={this.state.emailConfig.label}
                        value={this.state.emailConfig.value}
                        edit={this.state.emailConfig.edit} />

                    <CardLine
                        label={this.state.passwordConfig.label}
                        value={this.state.passwordConfig.value}
                        edit={this.state.passwordConfig.edit}
                        clickEdit={() => {
                            let passwordConfig = Object.assign({}, this.state.passwordConfig)
                            passwordConfig['showDialog'] = true
                            this.setState({ passwordConfig })
                        }} />
                        

                    <ChangePasswordDialog
                        open={this.state.passwordConfig.showDialog}
                        password={this.state.passwordConfig.password}
                        onChange={(event) => {
                            const field = event.target.name
                            let passwordConfig = Object.assign({}, this.state.passwordConfig)
                            passwordConfig.password[field] = event.target.value
                            this.setState({ passwordConfig })
                        }}
                        handleClose={this.handleClose}
                        handleSubmit={this.handleUpdatePassword} />

                </ManageAccountWrapper>
            </ManageAccountPage>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { ...authActions })(ManageAccountContainer)