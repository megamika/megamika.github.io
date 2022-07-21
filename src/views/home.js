import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import NoMemory from '../components/no-memory'
import SmallGameIcon from '../components/small-game-icon'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Website</title>
        <meta property="og:title" content="Portfolio Website" />
      </Helmet>
      <Header></Header>
      <div className="home-container1">
        <div className="home-nomemory">
          <Link to="/no-memory" className="home-navlink">
            <NoMemory
              text="No Memory"
              rootClassName="no-memory-root-class-name"
              className="home-nomemory1"
            ></NoMemory>
          </Link>
          <iframe
            src="https://www.youtube.com/embed/zuynDETSHUA"
            allowFullScreen
            className="home-iframe"
          ></iframe>
        </div>
        <div className="home-neonworld">
          <Link to="/neon-world" className="home-navlink1">
            <NoMemory
              text="Neon World"
              image_src="/playground_assets/neonworld-400w.png"
              rootClassName="no-memory-root-class-name1"
              className="home-neonworld1"
            ></NoMemory>
          </Link>
          <iframe
            src="https://www.youtube.com/embed/_mGk2G58KoQ"
            allowFullScreen
            className="home-iframe1"
          ></iframe>
        </div>
        <div className="home-dualinferno">
          <NoMemory
            text="Dual Inferno"
            image_src="/playground_assets/dualinferno-400w.png"
            rootClassName="no-memory-root-class-name2"
          ></NoMemory>
          <iframe
            src="https://www.youtube.com/embed/CDjsfYImWU8"
            allowFullScreen
            className="home-iframe2"
          ></iframe>
        </div>
        <div className="home-dualinferno2">
          <Link to="/process-artificial" className="home-navlink2">
            <NoMemory
              text="Process Artificial"
              image_src="/playground_assets/processartificial-400w.png"
              rootClassName="no-memory-root-class-name3"
              className="home-dualinferno3"
            ></NoMemory>
          </Link>
          <iframe
            src="https://www.youtube.com/embed/-6v6liLSXpQ"
            allowFullScreen
            className="home-iframe3"
          ></iframe>
        </div>
      </div>
      <div className="home-grid">
        <a
          href="https://megamika.itch.io/space-juice"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SmallGameIcon
            Title="Space Juice"
            image_src="/playground_assets/spacejuice-300h.png"
            className="home-spacejuice"
          ></SmallGameIcon>
        </a>
        <a
          href="https://megamika.itch.io/mushroom-clouds"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SmallGameIcon
            Title="Mushroom Clouds"
            image_src="/playground_assets/mushroomclouds-300h.png"
            className="home-mushroomclouds"
          ></SmallGameIcon>
        </a>
        <a
          href="https://megamika.itch.io/pugio"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SmallGameIcon
            Title="Pugio"
            image_src="/playground_assets/pugio-300h.png"
            className="home-pugio"
          ></SmallGameIcon>
        </a>
        <a
          href="https://megamika.itch.io/fruit-brawl"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SmallGameIcon
            Title="Fruit Brawl"
            image_src="/playground_assets/fruitbrawl-300h.png"
            className="home-fruitbrawl"
          ></SmallGameIcon>
        </a>
      </div>
    </div>
  )
}

export default Home
