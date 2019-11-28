import React from 'react'
import { connect } from 'react-redux'
import { InfoMaterialPage, InfoMaterialWrapper, InfoMaterial } from '../components/InfoMaterial'

class InfoContainer extends React.Component {

    render() {
        const { mainImage, name, description, minimumOrder, overview, packaging, price, shortDescription, supplyAbility, companyInfo, location } = this.props.material
        return (
            <InfoMaterialPage>
                <InfoMaterialWrapper>
                    <InfoMaterial
                        cover={mainImage}
                        name={name}
                        description={description}
                        minimumOrder={minimumOrder}
                        overview={overview}
                        packaging={packaging}
                        price={price}
                        shortDescription={shortDescription}
                        supplyAbility={supplyAbility}
                        companyInfo={companyInfo}
                        location={location}
                    />
                </InfoMaterialWrapper>
            </InfoMaterialPage>
        )
    }
}

function getMaterialById(materials, id) {
    const material = materials.filter(material => material.id === id);
    if (material.length) return material[0] // since filter returns an array, have to grab the first.
    return null
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const { materials } = state
    let material = {}
    if (id && materials.count > 0) {
        material = getMaterialById(materials.data, id)
    }

    return {
        material: material
    }
}

export default connect(mapStateToProps, {})(InfoContainer)