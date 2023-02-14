import { h } from 'preact'

import PropTypes from 'prop-types'

import styles from './header1.css'

const Header1 = (props) => {
  return (
    <div class={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <span class={styles['text']}>{props.text}</span>
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
