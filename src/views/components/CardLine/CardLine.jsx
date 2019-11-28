import React from 'react'
import { Card, Grid, Typography, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import PropTypes from 'prop-types'

const styles = {
    item: {
        padding: 10,
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        paddingTop: 12,
        paddingBottom: 12,
        marginLeft: 24
    }
}

CardLine.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    edit: PropTypes.bool,
    clickEdit: PropTypes.func
}

function CardLine({ label, value, edit = false, clickEdit }) {
    return (
        <Card square>
            <Grid container style={styles.item} >
                <Grid item xs={5} >
                    <Typography variant="subheading" style={styles.text}>
                        {label}
                    </Typography>
                </Grid>
                <Grid item xs={6} >
                    <Typography variant="subheading" >
                        {value}
                    </Typography>
                </Grid>
                {edit &&
                    <Grid item xs={1} >
                    <IconButton aria-label="Edit" onClick={clickEdit}>
                            <EditIcon />
                        </IconButton>
                    </Grid>
                }
            </Grid>
        </Card>
    )
}

export default CardLine