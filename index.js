import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
// import modules About and Repos
import About from './modules/About'
import Repos from './modules/Repos'

render(<App/>, document.getElementById('app'))

import {Router, Route, hashHistory} from 'react-router'
render((
  <Router history={hashHistory}>
    <Route path= "/" component={App} >
// add the routes paths
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Route>
  </Router>), document.getElementById('app'))
