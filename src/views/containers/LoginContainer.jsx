import React from 'react'
import { LoginPage, LoginFormWrapper, LoginForm } from '../components/Login'
import { connect } from 'react-redux'
import { authActions } from '../../state/ducks/auth'
import { toastr } from 'react-redux-toastr'
import PropTypes from 'prop-types'

class LoginContainer extends React.Component {

    static propTypes = {
        auth: PropTypes.shape({
            user: PropTypes.shape({
                email: PropTypes.string,
                password: PropTypes.string,
                isAuthenticated: PropTypes.bool,
            })
        })
    }

    state = {
        email: '',
        password: '',
    }

    render() {
        return (
            <LoginPage>
                <LoginFormWrapper>
                    <LoginForm
                        email={this.state.email}
                        password={this.state.password}
                        handleSubmit={this.authenticate}
                        handleInput={this.handleInput}
                    />
                </LoginFormWrapper>
            </LoginPage>
        )
    }

    authenticate = async () => {
        // TODO: PERFORM VALIDATIONS
        
        try {
            await this.props.authenticate(this.state.email, this.state.password)
            this.props.history.push('/home')
        } catch (error) {
            toastr.error(error ? error.data.message : 'Backend down')
        }
    }

   handleInput = event => {
       const name = event.target.name
       const value = event.target.value

       this.setState({ [name]: value })
   }

}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { ...authActions })(LoginContainer)