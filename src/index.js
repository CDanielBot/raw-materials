import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import registerServiceWorker from './registerServiceWorker' // TODO: INVESTIGATE COMPONENT
import { Provider } from 'react-redux'
import { filter, searchSuggestions } from './state/ducks/materials/actions'
import configureStore from './state/store'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { RMTheme } from './styles/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import ReduxToastr from 'react-redux-toastr'

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

// TODO: Function can take REDUX_INITIAL_DATA, research reducks*
const store = configureStore()
// Load visitor flow materials to see
store.dispatch(filter(''))
store.dispatch(searchSuggestions(''))

const RootHTML = () => (
    <Provider store={store} >
        <MuiThemeProvider theme={RMTheme} >
            <Router>
                <App />
            </Router>

            <ReduxToastr
                timeOut={4000}
                newestOnTop
                position="top-center"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                preventDuplicates
                 />
        </MuiThemeProvider>
    </Provider>
)

ReactDOM.render(<RootHTML />, document.getElementById('root'))
// registerServiceWorker()
