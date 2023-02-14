import { h } from 'preact'

import PropTypes from 'prop-types'

import styles from './image-with-text.css'

const ImageWithText = (props) => {
  return (
    <div class={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        class={styles['image']}
      />
      <span class={styles['text']}>{props.text}</span>
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
