import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { toastr } from 'react-redux-toastr'

export default class MyProductsAddFormDialog extends React.Component {

  static default

  state = {
    image: null,
    name: '',
    price: null,
    description: '',
  }

  render() {
    const { open, handleClose } = this.props

    return (
      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a new product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the form bellow in order to create a new product in your list
          </DialogContentText>

          <input
            accept="image/*"
            id="raised-button-file"
            type="file"
            onChange={this.handleImageChange}
          />
          <label htmlFor="raised-button-file" />

          <TextField
            onKeyDown={this.keyPress}
            autoFocus
            margin="dense"
            name="name"
            label="Product Name"
            fullWidth
            onChange={this.handleInput}
          />

          <TextField
            margin="dense"
            name="price"
            label="Price"
            type="number"
            onChange={this.handleInput}
          />
          <TextField
            name="description"
            label="Description"
            fullWidth
            onChange={this.handleInput}
            multiline
            rows={6}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  handleInput = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleImageChange = event =>
    this.setState({ image: event.target.files[0] })

  keyPress = event => {
    if (event.keyCode === 13)
      this.handleSubmit()
  }

  handleSubmit = () => {
    if (this.state.name.length < 3) {
      toastr.error('Name must be at least 4 characters long')
      return
    }

    this.props.handleSubmit(this.state)
    this.resetState()
    this.props.handleClose()
  }

  resetState = () => {
    this.setState({
      name: '',
      image: null,
    })
  }
}