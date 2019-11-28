import React from 'react'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { chatActions } from '../../../state/ducks/chat'
import { RoomPage } from '../../components/Chat'
import { withRouter } from 'react-router-dom'

class ChatContainer extends React.Component {

    async componentWillMount() {
        // somehow get messages from a room id
        try {
            chatActions.filterMessages()
        } catch (error) {
            toastr.error(error ? error.data.message : 'Backend down')
        }
    }

    render() {
        return (
            <div>
                <RoomPage>
                </RoomPage>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const offerId = state.myProfile.offerId
    const offer = state.chat.offers.find((offer) => {
        return offer.id === offerId
    })
    return {
        messages: offer ? offer.messages: [],
        user: state.auth.user,
    }
    
}


export default connect(mapStateToProps, { ...chatActions })(withRouter(ChatContainer))