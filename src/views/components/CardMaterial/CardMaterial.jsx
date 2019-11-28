import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
    card: {
        display: 'flex',
        marginBottom: 10
    },
    cover: {
        width: 151,
        height: 151,
    },
    button: {
        margin: 5
    }
}

CardMaterial.defaultProps = {
    cover: 'https://firebasestorage.googleapis.com/v0/b/raw-materials-5e631.appspot.com/o/materials%2FmainImages%2Fna.png?alt=media&token=748a6e06-6bd6-48c7-86ee-214cc2089cc5'
}

CardMaterial.propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.func.isRequired,
    cover: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}

function CardMaterial({ id, link, cover, name, price, currency }) {

    return (
        <Card style={styles.card}>
            <CardMedia
                style={styles.cover}
                image={cover}
                title={name}
            />
            <CardContent>
                <Typography variant="headline">{name}</Typography>
                <Typography variant="subheading" color="textSecondary">
                    {price} {currency}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => link(id)} style={styles.button}>
                    View details
                    </Button>
                <Button variant="contained" color="primary" style={styles.button}>
                    Ask Offer
                    </Button>
            </CardContent>
        </Card>
    )
}

export default CardMaterial