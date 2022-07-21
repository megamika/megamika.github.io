import React from 'react'

import PropTypes from 'prop-types'

import './play-button.css'

const PlayButton = (props) => {
  return (
    <div className="play-button-play-button">
      <span className="play-button-text">{props.Text}</span>
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
