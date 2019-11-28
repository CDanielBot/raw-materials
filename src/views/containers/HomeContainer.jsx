import React from 'react'
import { HomePage, HomeWrapper, HomeLanding, SearchBar } from "../components/Home"
import SearchResultsContainer from './SearchResultsContainer'
import { connect } from 'react-redux'
// import Typography from '@material-ui/core/Typography'


// const styles = {
//     center: {
//         textAlign: 'center'
//     }
// }

// const Message = (props) => {
//     return (
//         <Typography variant='display1' style={styles.center}>{props.text}</Typography>
//     )
// }
class HomeContainer extends React.Component {

    render() {
        // if (materials.isLoading) return <Message text="Data loading" />
        // if (materials.count === 0) return <Message text="No data" />

        return (
            <div>
                <HomePage>
                    <HomeWrapper>
                        <HomeLanding>
                            <SearchBar />
                            <SearchResultsContainer />
                        </HomeLanding>
                    </HomeWrapper>
                </HomePage>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    materials: state.materials
})

export default connect(mapStateToProps)(HomeContainer)
