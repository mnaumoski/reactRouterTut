import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
// import modules About and Repos
import About from './modules/About'
import Repos from './modules/Repos'
// import Repo
import Repo from './modules/Repo'
// importing router, route and hash
import {Router, Route, browserHistory, IndexRoute} from 'react-router'


// and the Home component
import Home from './modules/Home'

// render App component in the div with id of app
// render(<App/>, document.getElementById('app'))
// render the paths
render((
  <Router history={browserHistory}>
    <Route path= "/" component={App} >
        <IndexRoute component={Home}/>
        <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/about" component={About}/>
    </Route>
  </Router>
  ), document.getElementById('app'))
