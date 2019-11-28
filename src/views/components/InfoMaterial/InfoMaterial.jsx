import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const styles = {
    cover: {
        width: 151,
        height: 151,
    },
    display1: {
        marginTop: '20px'
    }
}

InfoMaterial.defaultProps = {
    cover: 'https://firebasestorage.googleapis.com/v0/b/raw-materials-5e631.appspot.com/o/materials%2FmainImages%2Fna.png?alt=media&token=748a6e06-6bd6-48c7-86ee-214cc2089cc5',
    overview: {},
    price: {},
    supplyAbility: {},
    companyInfo: { faq: {}, services: {} },
    location: {}
}

InfoMaterial.propTypes = {
    cover: PropTypes.string,
    name: PropTypes.string,
    shortDescription: PropTypes.string,
    description: PropTypes.string,
    minimumOrder: PropTypes.string,
    packaging: PropTypes.string,
    overview: PropTypes.object,
    price: PropTypes.object,
    supplyAbility: PropTypes.object,
    companyInfo: PropTypes.object,
    location: PropTypes.object
}

function InfoMaterial({ cover, name, description, shortDescription, minimumOrder, overview, packaging, price, supplyAbility, companyInfo, location }) {
    return (
        <div>
            <CardMedia
                style={styles.cover}
                image={cover}
                title={name} />
            <div>
                <CardContent>
                    {/* Name */}
                    <Typography variant="display2">{name}</Typography>

                    {/* General */}
                    <Typography variant="body1">Short Description: {shortDescription}</Typography>
                    <Typography variant="body1">Description: {description}</Typography>
                    <Typography variant="body1">MinimumOrder: {minimumOrder}</Typography>
                    <Typography variant="body1">Packaging: {packaging}</Typography>

                    {/* Overview */}
                    <Typography variant="display1" style={styles.display1}>Overview</Typography>
                    <Typography variant="body1">Temper: {overview.temper}</Typography>
                    <Typography variant="body1">Type: {overview.type}</Typography>

                    {/* Price */}
                    <Typography variant="display1" style={styles.display1}>Price</Typography>
                    <Typography variant="body1">Currency: {price.currency}</Typography>
                    {price.value ?
                        <Typography variant="body1">Value: {price.value}</Typography>
                        :
                        <div>
                            <Typography variant="body1">High: {price.high}</Typography>
                            <Typography variant="body1">Low: {price.low}</Typography>
                        </div>
                    }

                    {/* Supply Ability */}
                    <Typography variant="display1" style={styles.display1}>Supply Ability</Typography>
                    <Typography variant="body1">Period: {supplyAbility.period}</Typography>
                    <Typography variant="body1">Weight: {supplyAbility.weight}</Typography>
                    <Typography variant="body1">WeightType: {supplyAbility.weightType}</Typography>

                    {/* Company Information */}
                    <Typography variant="display1" style={styles.display1}>Company Information</Typography>
                    <Typography variant="body1">Certification: {companyInfo.certification}</Typography>
                    <Typography variant="body1">Description: {companyInfo.description}</Typography>
                    <Typography variant="title">Faq</Typography>
                    <Typography variant="body1">CustomizedOrders: {companyInfo.faq.customizedOrders}</Typography>
                    <Typography variant="body1">FreeSamples: {companyInfo.faq.freeSamples}</Typography>
                    <Typography variant="body1">Manufacturer: {companyInfo.faq.manufacturer}</Typography>
                    <Typography variant="body1">MinimumQuantity: {companyInfo.faq.minimumQuantity}</Typography>
                    <Typography variant="body1">PaymentType: {companyInfo.faq.paymentType}</Typography>
                    <Typography variant="title">Services</Typography>
                    <Typography variant="body1">Description: {companyInfo.services.descriptions}</Typography>

                    {/* Location */}
                    <Typography variant="display1" style={styles.display1}>Location</Typography>
                    <Typography variant="body1">Address: {location.address}</Typography>
                    <Typography variant="body1">Latitude: {location.latitude}</Typography>
                    <Typography variant="body1">Longitude: {location.longitude}</Typography>
                </CardContent>
            </div>
        </div>
    )
}

export default InfoMaterial