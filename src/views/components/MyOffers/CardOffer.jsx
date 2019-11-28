import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Card, CardContent, CardActions, Button } from '@material-ui/core'

const styles = {
    card: {
        display: 'flex',
        marginBottom: 10
    },
    cover: {
        width: 151,
        height: 151,
        background: 'black'
    }
}

CardOffer.propTypes = {
    productName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    when: PropTypes.string.isRequired
}

function CardOffer({ id, productName, username, when, handleClick }) {
    return (
        <Card style={styles.card}>
            <CardContent>
                <Typography variant="headline">Asking offer for {productName}</Typography>
                <Typography variant="subheading" color="textSecondary">
                    {username}
                </Typography>
                <Typography variant="subheading" color="textSecondary">
                    {when}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => handleClick(id)}>
                    View
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardOffer