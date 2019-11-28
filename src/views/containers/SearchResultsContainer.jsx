import { materialActions } from '../../state/ducks/materials'
import CardMaterial from '../components/CardMaterial/CardMaterial'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import React from 'react'

class SearchResultsContainer extends React.Component {

    link = id => {
        if (this.props.isAuthenticated) {
            this.props.history.push(`/info/${id}`)
        } else {
            this.props.history.push(`/register`)
        }
    }

    render() {
        const { materials } = this.props
        return (
            <div>
                {materials.data.map(material =>
                    <CardMaterial
                        key={material.id}
                        link={this.link}
                        id={material.id}
                        cover={material.mainImage}
                        name={material.name}
                        price={material.price.value || material.price.high + ' - ' + material.price.low}
                        currency={material.price.currency} />
                )}
            </div>)
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.user.isAuthenticated,
    materials: state.materials
})

export default connect(mapStateToProps, { ...materialActions })(withRouter(SearchResultsContainer))