import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { SignIn } from './pages/signin'

import { GlobalStyle } from './components/GlobalStyle'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      
      <Route exact path="/autenticacao">
        <SignIn />
      </Route>

    </Switch>
  </BrowserRouter>
)

export { App }