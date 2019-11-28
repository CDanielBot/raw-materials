import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import {
    Button, ClickAwayListener, Grow, Paper, Popper,
    MenuItem, MenuList, ListItemIcon, ListItemText
} from '@material-ui/core'
import { SettingsSharp, ExitToApp, AccountCircle, Storage } from '@material-ui/icons'

const styles = theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
})

class AccountButton extends React.Component {

    static propTypes = {
        email: PropTypes.string.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        handleAccountSettingsPressed: PropTypes.func.isRequired,
        handleMyProfilePressed: PropTypes.func.isRequired,

        classes: PropTypes.object.isRequired,
    }

    state = {
        open: false,
    }

    render() {
        const { open } = this.state
        const { classes, email, isAuthenticated } = this.props
        const { handleAccountSettingsPressed, handleSignOutPressed, handleMyProfilePressed } = this.props

        if (!isAuthenticated)
            return <Button onClick={() => this.redirectTo('/login')}>Login</Button>

        return (
            <div className={classes.root}>
                <Button
                    buttonRef={node => {
                        this.anchorEl = node
                    }}
                    aria-owns={open ? 'menu-list-grow' : null}
                    aria-haspopup="true"
                    onClick={this.handleToggle}
                    className={classes.button}
                    size="small"
                >
                    <AccountCircle className={classes.leftIcon} />
                    {this.extractUsernameFromEmail(email)}
                </Button>

                <Popper open={open} anchorEl={this.anchorEl} transition disablePortal placement="bottom-end">
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{ transformOrigin: placement === 'bottom-end' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <MenuList>
                                        <MenuItem onClick={(event) => {
                                            handleMyProfilePressed()
                                            this.handleClose(event)
                                        }}>
                                            <ListItemIcon>
                                                <Storage />
                                            </ListItemIcon>
                                            <ListItemText inset primary="My Profile" />
                                        </MenuItem>

                                        <MenuItem onClick={(event) => {
                                            handleAccountSettingsPressed();
                                            this.handleClose(event)
                                        }}>
                                            <ListItemIcon>
                                                <SettingsSharp />
                                            </ListItemIcon>
                                            <ListItemText inset primary="Account Settings" />
                                        </MenuItem>

                                        <MenuItem onClick={(event) => {
                                            handleSignOutPressed();
                                            this.handleClose(event)
                                        }}>
                                            <ListItemIcon>
                                                <ExitToApp />
                                            </ListItemIcon>
                                            <ListItemText inset primary="Sign out" />
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>

            </div>
        )
    }

    redirectTo = path => {
        this.props.history.push(path)
    }

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }))
    }

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return
        }

        this.setState({ open: false })
    }

    extractUsernameFromEmail = email => email.slice(0, email.indexOf("@"))
}

export default withRouter(withStyles(styles)(AccountButton))