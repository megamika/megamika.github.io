import { h } from 'preact'

import PropTypes from 'prop-types'

import styles from './no-memory.css'

const NoMemory = (props) => {
  return (
    <div class={` ${styles['no-memory']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        class={styles['image']}
      />
      <span class={styles['title']}>{props.text}</span>
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
