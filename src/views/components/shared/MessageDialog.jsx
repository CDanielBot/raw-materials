import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import PropTypes from 'prop-types'

MessageDialog.propTypes = {
    warning: PropTypes.bool,
    title: PropTypes.string,
    message: PropTypes.string.isRequired,
    cancelButtonText: PropTypes.string,
    confirmButtonText: PropTypes.string,

    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default function MessageDialog(props) {
        const { title, message, cancelButtonText, confirmButtonText, warning } = props
        const { open, handleClose, handleSubmit } = props

        return (
            <Dialog
                open={open}
                onClose={handleClose}
            >
                {title && <DialogTitle>{title}</DialogTitle>}
                <DialogContent>
                    <DialogContentText style={ warning && { color: 'red' } }>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        {cancelButtonText ? cancelButtonText : 'Cancel'}
                    </Button>
                    <Button onClick={handleSubmit} color="primary" autoFocus>
                        {confirmButtonText ? confirmButtonText : 'Confirm'}
                    </Button>
                </DialogActions>
            </Dialog>
        )
}