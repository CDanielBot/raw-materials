import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

class MyProductEditDialog extends React.Component {

    state = {
        ...this.props
    }

    componentWillReceiveProps(newProps) {
        this.setState({ ...newProps.product })
    }

    render() {
        const { open, scroll, handleClose } = this.props
        const { product } = this.props

        return (
            <Dialog
                open={open}
                scroll={scroll}
            >
                <DialogTitle>Edit {product.name}</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField
                            name="name"
                            label="Name"
                            onChange={this.handleInput}
                            value={this.state.name}
                            margin="normal"
                        />
                        <TextField
                            name="description"
                            label="Description"
                            fullWidth
                            onChange={this.handleInput}
                            value={this.state.description}
                            multiline
                            rows={6}
                            margin="normal"
                        />
                    </form>
                </DialogContent>

                {/* Actions */}
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSubmit} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state)
        this.props.handleClose()
    }

    handleInput = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

}

export default MyProductEditDialog