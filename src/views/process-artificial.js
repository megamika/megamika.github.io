import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header1 from '../components/header_1'
import PlayButton from '../components/play-button'
import './process-artificial.css'

const ProcessArtificial = (props) => {
  return (
    <div className="process-artificial-container">
      <Helmet>
        <title>Process Artificial - Portfolio Website</title>
        <meta
          property="og:title"
          content="Process Artificial - Portfolio Website"
        />
      </Helmet>
      <Header></Header>
      <Header1></Header1>
      <iframe
        src="https://www.youtube.com/embed/WPhHpf_05bI"
        allowFullScreen
        className="process-artificial-video"
      ></iframe>
      <div className="process-artificial-playcontainer">
        <a
          href="https://megamika.itch.io/pugio2d"
          target="_blank"
          rel="noreferrer noopener"
          className="process-artificial-link"
        >
          <PlayButton className="process-artificial-playbutton"></PlayButton>
        </a>
      </div>
      <Header1 text="Screenshots"></Header1>
      <div className="process-artificial-screenshots">
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999794106127614023/unknown.png?width=1193&amp;height=671"
          className="process-artificial-image"
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999794127434698863/unknown.png?width=1193&amp;height=671"
          className="process-artificial-image01"
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999794146472636527/unknown.png?width=1193&amp;height=671"
          className="process-artificial-image02"
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999794166643036231/unknown.png?width=1193&amp;height=671"
          className="process-artificial-image03"
        />
      </div>
      <Header1 text="Level scripting"></Header1>
      <div className="process-artificial-grid">
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999794626636562463/unknown.png"
          className="process-artificial-image04"
        />
        <span className="process-artificial-text">
          <span>Problem</span>
          <br></br>
          <span>
            The game is in the metroidvania genre, so that required us to have
            some areas that could only be accessed after a certain condition has
            been met, or a certain location was reached.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>Solution</span>
          <br></br>
          <span>
            There is a system in the game that allows a level designer to pair
            an event in the game to be connected to another event without
            writing an extra script. Here are some examples
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>- Opening a door after an enemy has been killed</span>
          <br></br>
          <span>- Opening a latch after the lever has been pulled</span>
        </span>
      </div>
      <Header1 text="Ability unlocks"></Header1>
      <span className="process-artificial-text09">
        <span>
          The game features several upgrades to give the player a feeling of
          progression and change up the gameplay.
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span></span>
      </span>
      <div className="process-artificial-playerabilities">
        <div className="process-artificial-container1">
          <span className="process-artificial-text13">Sword</span>
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999795422467993662/unknown.png"
            className="process-artificial-image05"
          />
          <span className="process-artificial-text14">
            <span>
              The first item you receive in the game is just your sword. The
              goal was to have as little of a tutorial in the game as possible.
              The player would be taught how to play by restricting his
              abilities until he has proven that he has understood how to use
              his other abilities. The sword will only be granted to the player
              after doing some basic platforming.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </div>
        <div className="process-artificial-container2">
          <span className="process-artificial-text18">Air dashes</span>
          <img
            alt="image"
            src="https://i.gyazo.com/a6fb142e26b3b3bb89d4f05b5ed1842d.gif"
            className="process-artificial-image06"
          />
          <span className="process-artificial-text19">
            <span>
              This ability allows you to dash up to the areas you could not
              reach before. It was added as one of the ways we restrict some
              areas from being visited before the player has unlocked this
              ability.
            </span>
            <br></br>
            <span></span>
          </span>
        </div>
      </div>
      <Header1 text="Map"></Header1>
      <div className="process-artificial-grid1">
        <span className="process-artificial-text22">
          <span>
            By pressing TAB you can open up the map showing you the whole area
            and also the trail of where you have just explored. Pretty neat when
            you are stuck and not sure where to go next.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            The system was added at the very last week of development cause of
            the realization that the game&apos;s map would be too big to
            remember mentally.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
        </span>
        <img
          alt="image"
          src="https://i.gyazo.com/36eff2f37cd5544bcb29b770244e3dab.gif"
          className="process-artificial-image07"
        />
      </div>
      <Header1 text="Dynamic obstacles"></Header1>
      <div className="process-artificial-grid2">
        <span className="process-artificial-text31">
          <span>
            To offer variety to the levels, any obstacle could be made dynamic
            by adding some simple components. Any obstacle could be- Moved back
            and forth- Rotated periodically- Be toggled at an intervalThis
            solution added variety without the need to add more prefabs.
          </span>
          <br></br>
          <span></span>
        </span>
        <img
          alt="image"
          src="https://i.gyazo.com/c9bb510bf0c12068f0272cc2d163d992.gif"
          className="process-artificial-image08"
        />
      </div>
      <Header1 text="Emergent enemy behaviour"></Header1>
      <div className="process-artificial-grid3">
        <img
          alt="image"
          src="https://i.gyazo.com/2af30d06d617fa61d56eee88ea82c961.gif"
          className="process-artificial-image09"
        />
        <span className="process-artificial-text34">
          <span>
            Enemiy AI itself is very basic, they basically do one or 2 things on
            a loop, but together they often lead to unexpected behaviours.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            There is no real &quot;team&quot; system in the game so the player
            character and the enemy characters all interact in the same way with
            each other. I have planned to add a check to make sure the enemies
            cannot damage each other, but the way the enemies would hurt each
            other was very satisfying so it was kept that way.
          </span>
          <br></br>
          <span></span>
        </span>
      </div>
    </div>
  )
}

export default ProcessArtificial
