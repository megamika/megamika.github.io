import { h } from 'preact'

import { Helmet } from 'react-helmet'

import Header from '../../components/header'
import Header1 from '../../components/header1'
import PlayButton from '../../components/play-button'
import styles from './style.css'

const Dualinferno = (props) => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>dualinferno - Mikael Zakoyan - Tech Design</title>
        <meta
          property="og:title"
          content="dualinferno - Mikael Zakoyan - Tech Design"
        />
      </Helmet>
      <Header rootClassName="root-class-name7"></Header>
      <Header1></Header1>
      <iframe
        src="https://www.youtube.com/embed/CDjsfYImWU8"
        allowFullScreen
        class={styles['video']}
      ></iframe>
      <div class={styles['playcontainer']}>
        <a
          href="https://janablaze.itch.io/locus"
          target="_blank"
          rel="noreferrer noopener"
          class={styles['link']}
        >
          <PlayButton class={styles['playbutton']}></PlayButton>
        </a>
      </div>
      <Header1 text="Screenshots"></Header1>
      <div class={styles['screenshots']}>
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999789648123527249/unknown.png?width=1193&amp;height=671"
          class={styles['image']}
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999789893922340944/unknown.png"
          class={styles['image01']}
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999789701080817674/unknown.png"
          class={styles['image02']}
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999789737697095680/unknown.png?width=1429&amp;height=671"
          class={styles['image03']}
        />
      </div>
      <div class={styles['playerabilities']}>
        <div class={styles['container1']}>
          <span class={styles['text']}>Snappy movement</span>
          <img
            alt="image"
            src="https://i.gyazo.com/1bcb0462e1799452c37f0bef311272b3.gif"
            class={styles['image04']}
          />
          <span class={styles['text01']}>
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
        <div class={styles['container2']}>
          <span class={styles['text07']}>Shape shifting</span>
          <img
            alt="image"
            src="https://i.gyazo.com/929a010c0db0237e4edbb914795ace0b.gif"
            class={styles['image05']}
          />
          <span class={styles['text08']}>
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
      <div class={styles['playerabilities1']}>
        <div class={styles['container3']}>
          <img
            alt="image"
            src="https://i.gyazo.com/c958b3bbfa8b7faced6ea5a594e05f80.gif"
            class={styles['image06']}
          />
          <span class={styles['text18']}>
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
        <div class={styles['container4']}>
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999790885246078996/unknown.png"
            class={styles['image07']}
          />
          <span class={styles['text22']}>
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
      <div class={styles['playerabilities2']}>
        <div class={styles['container5']}>
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999791236435161148/unknown.png"
            class={styles['image08']}
          />
          <span class={styles['text28']}>
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
        <div class={styles['container6']}>
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999791257566064670/unknown.png?width=829&amp;height=671"
            class={styles['image09']}
          />
          <span class={styles['text33']}>
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
          </span>
        </div>
      </div>
    </div>
  )
}

export default Dualinferno
