import React from 'react'

import PropTypes from 'prop-types'

import './no-memory.css'

const NoMemory = (props) => {
  return (
    <div className={`no-memory-no-memory ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="no-memory-image"
      />
      <span className="no-memory-title">{props.text}</span>
    </div>
  )
}

NoMemory.defaultProps = {
  image_alt: 'image',
  text: 'Text',
  image_src: '/playground_assets/nomemory-400w.png',
  rootClassName: '',
}

NoMemory.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NoMemory
