import { h } from 'preact'

import PropTypes from 'prop-types'

import styles from './header2.css'

const Header2 = (props) => {
  return (
    <div class={styles['container']}>
      <span class={styles['text']}>{props.Text}</span>
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
