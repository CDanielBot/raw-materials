import React from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import grey from '@material-ui/core/colors/grey'
import PropTypes from 'prop-types'

const styles = {
    wrapper: {
        padding: 8 * 2,
        paddingBottom: 8 * 4,
    },
    mainImage: {
        height: 8 * 20,
        width: 8 * 20,
        backgroundColor: 'grey',
    },
    headerItem: {
        flex: 1,
        padding: 8 * 2,
    },
    iconButton: {
        margin: '8px 4px',
    },
    icon: {
        fontSize: 18,
    },
    actionsContainer: {
        backgroundColor: grey[50],
        padding: '0 16px',
    }
}

MyProductCards.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired,

    handleDelete: PropTypes.func.isRequired,
}

export default function MyProductCards({ product, handleDelete, handleEdit }) {

    const onDelete = () => {
        handleDelete(product)
    }

    const onEdit = () => {
        handleEdit(product)
    }

    return (
        <Paper square>
            <Grid container>

                {/* CARD HEADER */}
                        <Grid item>
                            <div alt="something" style={styles.mainImage}></div>
                        </Grid>

                        <Grid item style={{ flex: 1 }}>

                            {/* CARD TOP BAR */}
                            <Grid container style={styles.actionsContainer} justify="space-between">
                                <Grid container alignItems="center" style={{ flex: 1 }}>
                                    <Typography variant="headline">
                                        {product.name}
                                    </Typography>
                                </Grid>

                                {/* TOP BAR ACTIONS */}
                                <Grid item>
                                    <IconButton style={styles.iconButton} onClick={onEdit}>
                                        <EditIcon style={styles.icon}/>
                                    </IconButton>
                                    <IconButton style={{ margin: '8px 0px 8px 4px' }} onClick={onDelete}>
                                        <DeleteIcon style={styles.icon}/>
                                    </IconButton>
                                </Grid>
                            </Grid>

                            {/* HEADER BRIEF INFO */}
                            <Grid container style={styles.headerItem}>
                                <Grid item xs={12}>
                                    <Typography variant="body1">
                                        {product.description}
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                {/* CARD HEADER */}

            </Grid>
        </Paper>
    )
}