import { h } from 'preact'

import PropTypes from 'prop-types'

import styles from './play-button.css'

const PlayButton = (props) => {
  return (
    <div class={styles['play-button']}>
      <span class={styles['text']}>{props.Text}</span>
    </div>
  )
}

PlayButton.defaultProps = {
  Text: 'Play',
}

PlayButton.propTypes = {
  Text: PropTypes.string,
}

export default PlayButton
