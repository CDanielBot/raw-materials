import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { NavbarContainer } from '../views/containers'
import { connect } from 'react-redux'

class NavigationRoute extends React.Component {

  static propTypes = {
    hideNav: PropTypes.bool,
    requiresAuthentication: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    component: PropTypes.func.isRequired,

  }

  render() {
    const { hideNav, requiresAuthentication, isAuthenticated } = this.props

    if (requiresAuthentication && !isAuthenticated)
      return <Redirect to='/login'></Redirect>

    return (
      <div>
        {hideNav ? null : <NavbarContainer />}
        <Route {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.user.isAuthenticated
})

export default connect(mapStateToProps)(NavigationRoute)