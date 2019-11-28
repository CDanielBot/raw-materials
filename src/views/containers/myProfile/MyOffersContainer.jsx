import React from 'react'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { offersActions } from '../../../state/ducks/offers'
import { MyOffersPage, CardOffer } from '../../components/MyOffers'

class MyOffersContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    async componentWillMount() {
        try {
            await this.props.filterOffers(this.props.user)
        } catch (error) {
            toastr.error(error ? error.data.message : 'Backend down')
        }
    }

    render() {

        // if (offers.isLoading)
        //     return <div>Data loading</div>

        return (
            <div>
                <MyOffersPage>
                    {this.props.offers.map((offer, index) =>
                        <CardOffer
                            key={index}
                            id={offer.id}
                            handleClick={(id) => this.props.handleClick(id)}
                            productName={offer.material.name}
                            username={offer.user.email}
                            when={offer.message.createdAt} />
                    )}
                </MyOffersPage>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    offers: state.chat.offers,
    user: state.auth.user,
})

export default connect(mapStateToProps, { ...offersActions })(MyOffersContainer)