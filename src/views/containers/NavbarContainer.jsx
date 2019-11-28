import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { connect } from 'react-redux'
import { authActions } from '../../state/ducks/auth'
import { AccountButton } from '../components/Navbar'
import { withRouter } from 'react-router-dom'
import { toastr } from 'react-redux-toastr'

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  flex: {
    flexGrow: 1,
    cursor: 'pointer'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbar: {
    height: 96,
    width: '90%',
    maxWidth: 1000,
    margin: '0 auto',
  }
}

class NavbarContainer extends React.Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {

    const { classes, auth } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex} onClick={() => this.props.history.push('/home')}>
              Know your supplier
            </Typography>

            <AccountButton
              {...auth.user}
              handleMyProfilePressed={this.handleMyProfilePressed}
              handleAccountSettingsPressed={this.handleAccountSettingsPressed}
              handleSignOutPressed={this.handleSignOutPressed}
            />

          </Toolbar>
        </AppBar>
      </div>
    )
  }

  handleMyProfilePressed = () => {
    this.props.history.push('/profile/products')
  }

  handleAccountSettingsPressed = () => {
    this.props.history.push('/manage-account')
  }


  handleSignOutPressed = async () => {
    try {
      await this.props.signOut();
      this.props.history.push('/home')
    } catch (error) {
      toastr.error(error ? error.data.message : 'Backend down')
    }
  }

}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { ...authActions })(withRouter(withStyles(styles)(NavbarContainer)))