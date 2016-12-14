// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

// the spread operator is three dots and 
export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})