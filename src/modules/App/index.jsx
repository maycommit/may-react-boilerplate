import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from 'modules/Main'
import Home from 'modules/Home'
import About from 'modules/About'
import Contact from 'modules/Contact'
import Styled from './styled'

const App = () => (
  <BrowserRouter>
    <Main>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Main>
  </BrowserRouter>
)

export default App