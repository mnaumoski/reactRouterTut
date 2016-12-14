import React from 'react'
import { IndexLink } from 'react-router'

// import { Link } from 'react-router'
import NavLink from './NavLink'
// see the syntax below Link to=""
import Home from './Home'


export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><IndexLink to="/">Home</IndexLink></li>
        </ul>
        {this.props.children || <Home />}
      </div>)}
})

// use activeStyle on NavLink bc unlike a-tag, it knows that if active you can style it differently

