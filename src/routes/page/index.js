import { h } from 'preact'

import { Helmet } from 'react-helmet'

import styles from './style.css'

const Page = (props) => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>Page - Mikael Zakoyan - Tech Design</title>
        <meta
          property="og:title"
          content="Page - Mikael Zakoyan - Tech Design"
        />
      </Helmet>
    </div>
  )
}

export default Page
