import React from 'react'

import PropTypes from 'prop-types'

import './header_2.css'

const Header2 = (props) => {
  return (
    <div className="header_2-container">
      <span className="header_2-text">{props.Text}</span>
    </div>
  )
}

Header2.defaultProps = {
  Text: 'Player',
}

Header2.propTypes = {
  Text: PropTypes.string,
}

export default Header2
