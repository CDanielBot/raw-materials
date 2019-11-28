import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types'

ChangePasswordDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    password: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default function ChangePasswordDialog({ open, password, onChange, handleClose, handleSubmit }) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="old"
                        id="oldPassword"
                        label="Old Password"
                        value={password.old}
                        onChange={onChange}
                        type="password"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="new"
                        id="newPassword"
                        label="New Password"
                        value={password.new}
                        onChange={onChange}
                        type="password"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="newConfirmed"
                        id="newPasswordConfirm"
                        label="Confirm New Password"
                        value={password.newConfirmed}
                        onChange={onChange}
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
