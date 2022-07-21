import React from 'react'

import PropTypes from 'prop-types'

import './image-with-text.css'

const ImageWithText = (props) => {
  return (
    <div className="image-with-text-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="image-with-text-image"
      />
      <span className="image-with-text-text">{props.text}</span>
    </div>
  )
}

ImageWithText.defaultProps = {
  image_alt: 'image',
  text: 'Sprinting',
  image_src: 'https://i.gyazo.com/c90928791303eec4f5ec8fd91a4cf6b8.gif',
}

ImageWithText.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default ImageWithText
