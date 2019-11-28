import React from 'react'
import PropTypes from 'prop-types'
import { AppBar } from '@material-ui/core'
import { Typography, Tabs, Tab } from '@material-ui/core'
import { connect } from 'react-redux'
import { TabsWrapper } from '../../components/MyProfile'
import { myProfileActions } from '../../../state/ducks/myprofile'
import MyOffersContainer from './MyOffersContainer'
import MyProductsContainer from './MyProductsContainer'
import ChatContainer from './ChatContainer'

function TabContainer({ children }) {
    return (
        // <Paper square>
        <Typography component="div" >
            {children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
    })),
}

class MyProfileContainer extends React.Component {

    constructor(props) {
        super(props)

        this.tabsMapping = {
            0: '/profile/products',
            1: '/profile/offers',
            2: '/profile/chat'
        }
    }

    handleChange = (tabIndex) => {
        const url = this.tabsMapping[tabIndex]
        this.props.history.push(url)
        this.props.changeTab(tabIndex)
    }

    handleOfferClick = (offerId) => {
        this.props.history.push(`/profile/chat/${offerId}`)
        this.props.changeToMessages(offerId, 2)
    }

    render() {
        const { tabIndex } = this.props
        return (
            <TabsWrapper>
                <AppBar position="static" color="default">
                    <Tabs value={tabIndex}
                        onChange={(event, value) => this.handleChange(value)}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                        centered
                    >
                        <Tab label='Products' />
                        <Tab label='Offers' />
                        <Tab label='Messages' />
                    </Tabs>
                    {tabIndex === 0 && <TabContainer><MyProductsContainer /></TabContainer>}
                    {tabIndex === 1 && <TabContainer><MyOffersContainer handleClick={this.handleOfferClick} /></TabContainer>}
                    {tabIndex === 2 && <TabContainer><ChatContainer /></TabContainer>}
                </AppBar>
            </TabsWrapper>
        )
    }
}

const mapStateToProps = state => ({
    tabIndex: state.myProfile.tabIndex,
})

export default connect(mapStateToProps, { ...myProfileActions })(MyProfileContainer)