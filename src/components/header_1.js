import React from 'react'

import PropTypes from 'prop-types'

import './header_1.css'

const Header1 = (props) => {
  return (
    <div className={`header_1-container ${props.rootClassName} `}>
      <span className="header_1-text">{props.text}</span>
    </div>
  )
}

Header1.defaultProps = {
  rootClassName: '',
  text: 'Tech Reel',
}

Header1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Header1
