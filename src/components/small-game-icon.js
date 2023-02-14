import { h } from 'preact'

import PropTypes from 'prop-types'

import styles from './small-game-icon.css'

const SmallGameIcon = (props) => {
  return (
    <div class={` ${styles['no-memory']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        class={styles['image']}
      />
      <span class={styles['title']}>{props.Title}</span>
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
