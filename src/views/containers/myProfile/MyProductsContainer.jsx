
import React from 'react'
import { productsActions } from '../../../state/ducks/products'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import {
    MyProductCard, MyProductsWrapper,
    MyProductsAddFormDialog, MyProductEditDialog
} from '../../components/MyProducts'
import { MessageDialog } from '../../components/shared'
import AddIcon from '@material-ui/icons/Add'
import { Button, Grid } from '@material-ui/core'

class MyProductsContainer extends React.Component {

    state = {
        isOpenAddDialog: false,

        isOpenDeleteDialog: false,
        productToDelete: {
            id: null,
            name: null,
        },

        isOpenEditDialog: false,
        productToEdit: {},

    }

    async componentWillMount() {
        try {
            const { getProducts, user } = this.props
            await getProducts(user.userId)
        } catch (error) {
            console.log(error)
        }
    }

    render() {

        const { products } = this.props

        if (products.isLoading) return <div>Data loading</div>
        // Try this !
        // products.isLoading && return <div>Data loading</div>

        // TODO: CONDITIONAL FOR NO OFFERS ( NO OFFERS COMPONENT )
        if (products.count === 0) return <div>You have no offers at the moment</div>

        return (
            <MyProductsWrapper>
                {/* Actions */}
                <Grid item xs={12} style={{ marginBottom: 8 * 8 }}>
                    <Button variant="raised" color="primary" style={{ margin: 8, color: 'white' }} onClick={this.openAddDialog}>
                        <AddIcon style={{ marginRight: 8, color: 'white' }} />
                        Create Product
                    </Button>
                </Grid>

                {products.data.map(product =>
                    <Grid item xs={12} lg={6} key={product.id}>
                        <MyProductCard
                            product={product}
                            handleDelete={this.handleDeleteIconClick}
                            handleEdit={this.handleEditIconClick} />
                    </Grid>
                )}


                {/* Dialogs */}
                <MyProductsAddFormDialog
                    open={this.state.isOpenAddDialog}
                    handleSubmit={this.createProduct}
                    handleClose={this.closeAddDialog} />
                <MessageDialog
                    open={this.state.isOpenDeleteDialog}
                    handleClose={this.closeDeleteDialog}
                    handleSubmit={this.deleteProduct}
                    title="Warning!"
                    message={`Are you sure you want to delete product '${this.state.productToDelete.name}'?`}
                    confirmButtonText="Delete" />
                <MyProductEditDialog
                    product={this.state.productToEdit}
                    open={this.state.isOpenEditDialog}
                    scroll="paper"
                    handleClose={this.closeEditDialog}
                    handleSubmit={this.updateProduct}
                />
            </MyProductsWrapper>
        )
    }

    createProduct = async product => {
        const { user } = this.props

        const newProduct = {
            userId: user.userId,
            ...product,
        }

        await this.props.createProduct(newProduct, product.image)
        toastr.success('Product succesfuly created')
    }

    updateProduct = async updatedProduct => {
        await this.props.updateProduct(updatedProduct)
    }

    deleteProduct = async () => {
        await this.props.deleteProduct(this.state.productToDelete.id)
        this.closeDeleteDialog()
        this.setState({ productToDelete: { id: null, name: null } })
    }

    handleDeleteIconClick = product => {
        this.setState({ productToDelete: { id: product.id, name: product.name } })

        this.openDeleteDialog()
    }

    handleEditIconClick = product => {
        this.setState({ productToEdit: product })

        this.openEditDialog()
    }

    openAddDialog = () => this.setState({ isOpenAddDialog: true })
    closeAddDialog = () => this.setState({ isOpenAddDialog: false })

    openDeleteDialog = () => this.setState({ isOpenDeleteDialog: true })
    closeDeleteDialog = () => this.setState({ isOpenDeleteDialog: false })

    openEditDialog = () => this.setState({ isOpenEditDialog: true })
    closeEditDialog = () => this.setState({ isOpenEditDialog: false })
}

const mapStateToProps = state => ({
    products: state.products,
    user: state.auth.user,
})

export default connect(mapStateToProps, { ...productsActions })(MyProductsContainer)