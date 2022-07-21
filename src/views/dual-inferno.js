import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header1 from '../components/header_1'
import PlayButton from '../components/play-button'
import './dual-inferno.css'

const DualInferno = (props) => {
  return (
    <div className="dual-inferno-container">
      <Helmet>
        <title>Dual Inferno - Portfolio Website</title>
        <meta property="og:title" content="Dual Inferno - Portfolio Website" />
      </Helmet>
      <Header></Header>
      <Header1></Header1>
      <iframe
        src="https://www.youtube.com/embed/CDjsfYImWU8"
        allowFullScreen
        className="dual-inferno-video"
      ></iframe>
      <div className="dual-inferno-playcontainer">
        <a
          href="https://janablaze.itch.io/locus"
          target="_blank"
          rel="noreferrer noopener"
          className="dual-inferno-link"
        >
          <PlayButton className="dual-inferno-playbutton"></PlayButton>
        </a>
      </div>
      <Header1 text="Screenshots"></Header1>
      <div className="dual-inferno-screenshots">
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999789648123527249/unknown.png?width=1193&amp;height=671"
          className="dual-inferno-image"
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999789893922340944/unknown.png"
          className="dual-inferno-image01"
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999789701080817674/unknown.png"
          className="dual-inferno-image02"
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999789737697095680/unknown.png?width=1429&amp;height=671"
          className="dual-inferno-image03"
        />
      </div>
      <div className="dual-inferno-playerabilities">
        <div className="dual-inferno-container1">
          <span className="dual-inferno-text">Snappy movement</span>
          <img
            alt="image"
            src="https://i.gyazo.com/1bcb0462e1799452c37f0bef311272b3.gif"
            className="dual-inferno-image04"
          />
          <span className="dual-inferno-text01">
            <span>
              The movement in the game was intentionally made to be very snappy
              and simple to fit with the pixel art stylistic of the game and the
              animation style.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </div>
        <div className="dual-inferno-container2">
          <span className="dual-inferno-text07">Shape shifting</span>
          <img
            alt="image"
            src="https://i.gyazo.com/929a010c0db0237e4edbb914795ace0b.gif"
            className="dual-inferno-image05"
          />
          <span className="dual-inferno-text08">
            <span>
              The game&apos;s standout feature is the ability to shift your form
              by destroying little terminals in the level.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>Shifting your form would do several things</span>
            <br></br>
            <span>- Allow you to attack your enemies</span>
            <br></br>
            <span>- Make you move faster</span>
            <br></br>
            <span>- Add ability to wall jump</span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </div>
      </div>
      <Header1 text="AI"></Header1>
      <div className="dual-inferno-playerabilities1">
        <div className="dual-inferno-container3">
          <img
            alt="image"
            src="https://i.gyazo.com/c958b3bbfa8b7faced6ea5a594e05f80.gif"
            className="dual-inferno-image06"
          />
          <span className="dual-inferno-text18">
            <span>
              Although there is only one enemy in the game, the AI for that
              enemy is made to be modular and extendable to several types.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </div>
        <div className="dual-inferno-container4">
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999790885246078996/unknown.png"
            className="dual-inferno-image07"
          />
          <span className="dual-inferno-text22">
            <span>
              The game has the main &quot;brain&quot; script and a visual
              scripting solution to manipulate their final behaviour and what
              the enemy would do.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </div>
      </div>
      <Header1 text="Cutscene maker"></Header1>
      <div className="dual-inferno-playerabilities2">
        <div className="dual-inferno-container5">
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999791236435161148/unknown.png"
            className="dual-inferno-image08"
          />
          <span className="dual-inferno-text28">
            <span>
              The game has a story that is delivered through cutscenes. In our
              team, we had a person responsible for making those cutscenes and
              the story for them
            </span>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </div>
        <div className="dual-inferno-container6">
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999791257566064670/unknown.png?width=829&amp;height=671"
            className="dual-inferno-image09"
          />
          <span className="dual-inferno-text33">
            <span>
              Making a visually readable system where the artist/writer could
              make cutscenes in the editor without touching code was a
              convenient way to speed up the process without needing to go back
              and forth.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <span></span>
            <span></span>
            <br></br>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default DualInferno
