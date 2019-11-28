import React from 'react'
import { withRouter, Switch } from 'react-router-dom'
import { NavigationRoute, routes } from './routes'

class App extends React.Component {
  render() {
    return (
      <Switch>
        {routes.map((route) => (
          <NavigationRoute key={route.path} {...route} />
        ))}
      </Switch>

    );
  }
}

export default withRouter(App)
