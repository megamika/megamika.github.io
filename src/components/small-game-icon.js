import React from 'react'

import PropTypes from 'prop-types'

import './small-game-icon.css'

const SmallGameIcon = (props) => {
  return (
    <div className={`small-game-icon-no-memory ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="small-game-icon-image"
      />
      <span className="small-game-icon-title">{props.Title}</span>
    </div>
  )
}

SmallGameIcon.defaultProps = {
  image_src: '/playground_assets/nomemory-300h.png',
  Title: 'Text',
  image_alt: 'image',
  rootClassName: '',
}

SmallGameIcon.propTypes = {
  image_src: PropTypes.string,
  Title: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SmallGameIcon
