import { h } from 'preact'

import PropTypes from 'prop-types'

import styles from './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav class={` ${styles['nav']} ${styles[props.rootClassName]} `}>
      <span class={styles['text']}>{props.text}</span>
      <span class={styles['text1']}>{props.text1}</span>
      <span class={styles['text2']}>{props.text2}</span>
      <span class={styles['text3']}>{props.text3}</span>
      <span class={styles['text4']}>{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text4: 'Blog',
  text3: 'Team',
  text: 'About',
  text2: 'Pricing',
  rootClassName: '',
  text1: 'Features',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
