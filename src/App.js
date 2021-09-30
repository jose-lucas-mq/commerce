import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { Home } from './pages/home'

import { GlobalStyle } from './components/GlobalStyle'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>

    </Switch>
  </BrowserRouter>
)

export { App }