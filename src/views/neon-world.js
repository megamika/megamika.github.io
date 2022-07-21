import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header1 from '../components/header_1'
import PlayButton from '../components/play-button'
import './neon-world.css'

const NeonWorld = (props) => {
  return (
    <div className="neon-world-container">
      <Helmet>
        <title>Neon World - Portfolio Website</title>
        <meta property="og:title" content="Neon World - Portfolio Website" />
      </Helmet>
      <div className="neon-world-container1">
        <Header></Header>
        <Header1></Header1>
        <iframe
          src="https://www.youtube.com/embed/_mGk2G58KoQ"
          allowFullScreen
          className="neon-world-video"
        ></iframe>
        <div className="neon-world-playcontainer">
          <a
            href="https://megamika.itch.io/neon-world"
            target="_blank"
            rel="noreferrer noopener"
            className="neon-world-link"
          >
            <PlayButton className="neon-world-playbutton"></PlayButton>
          </a>
        </div>
        <Header1 text="Screenshots"></Header1>
        <div className="neon-world-screenshots">
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999781661539586229/unknown.png?width=720&amp;height=405"
            className="neon-world-image"
          />
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999781708599664791/unknown.png?width=720&amp;height=405"
            className="neon-world-image01"
          />
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999781735627763794/unknown.png?width=720&amp;height=405"
            className="neon-world-image02"
          />
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999781761976381500/unknown.png?width=720&amp;height=405"
            className="neon-world-image03"
          />
        </div>
        <div className="neon-world-playerabilities">
          <div className="neon-world-container2">
            <span className="neon-world-text">Player movement</span>
            <img
              alt="image"
              src="https://i.gyazo.com/a792078f15e11e4dfacd7bef8f9dfdc8.gif"
              className="neon-world-image04"
            />
            <span className="neon-world-text01">
              <span>
                The movement in the game was initially supposed to be
                physics-based but ended up being more of a rigid
                &quot;handcrafted&quot; movement with hints of fake physics.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
            </span>
          </div>
          <div className="neon-world-container3">
            <span className="neon-world-text05">Air thrust</span>
            <img
              alt="image"
              src="https://i.gyazo.com/0ef2bdc1b004824974df7464c1070f7e.gif"
              className="neon-world-image05"
            />
            <span className="neon-world-text06">
              <span>
                The air thrust is the main feature of the game and where most of
                the fun was derived from. I came up with it during a
                brainstorming session, and my other game Space Juice inspired
                the idea.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
            </span>
          </div>
        </div>
        <Header1 text="Character unlocks"></Header1>
        <div className="neon-world-grid">
          <img
            alt="image"
            src="https://i.gyazo.com/7f25226bb0bd596d77d5f8cb022c3ff0.gif"
            className="neon-world-image06"
          />
          <span className="neon-world-text10">
            <span className="neon-world-text11">Problem</span>
            <br></br>
            <span>
              It was important for the player to have some kind of a motivation
              to keep playing and also to have a choice of picking the look they
              liked more.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span className="neon-world-text14">Solution</span>
            <br></br>
            <span>
              The solution to this is different characters you can unlock by
              finishing certain levels throughout the game.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </div>
        <Header1 text="Destructable iteams"></Header1>
        <div className="neon-world-grid1">
          <span className="neon-world-text18">
            <span className="neon-world-text19">Problem</span>
            <br></br>
            <span>
              There were a few explicit rewards in the game, such as improving
              your time in the levels or unlocking cosmetic skins. However,
              there wasn&apos;t much in terms of implicit rewards.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span className="neon-world-text22">Solution</span>
            <br></br>
            <span>
              The game features a simple but fairly effective and satisfying
              system for making destructible teams.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
          <img
            alt="image"
            src="https://i.gyazo.com/26a33018897536f985cf50d81af07849.gif"
            className="neon-world-image07"
          />
        </div>
        <Header1 text="Camera directing"></Header1>
        <div className="neon-world-grid2">
          <img
            alt="image"
            src="https://i.gyazo.com/a8517edcc16e52eea4ed3cc4573b6de2.gif"
            className="neon-world-image08"
          />
          <span className="neon-world-text26">
            <span className="neon-world-text27">Problem</span>
            <br></br>
            <span>
              Sometimes the levels required more platforms to be seen
              simultaneously, and the player would not be able to make some
              jumps without a leap of faith.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span className="neon-world-text30">Solution</span>
            <br></br>
            <span>
              A system that pans the camera out to showcase a predefined
              location and a camera size.
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
        <Header1 text="Level creation / management"></Header1>
        <span className="neon-world-text38">
          <span>
            This system allows a level designer to manage what level will be in
            which level category quickly. It automates the process of saving
            level progress, unlocking levels for the player, and updating the UI
            according to what levels the Level Designer has defined.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
        </span>
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999785364065632256/unknown.png"
          className="neon-world-image09"
        />
      </div>
    </div>
  )
}

export default NeonWorld
