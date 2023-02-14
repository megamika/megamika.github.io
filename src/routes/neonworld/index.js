import { h } from 'preact'

import { Helmet } from 'react-helmet'

import Header from '../../components/header'
import Header1 from '../../components/header1'
import PlayButton from '../../components/play-button'
import styles from './style.css'

const Neonworld = (props) => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>neonworld - Mikael Zakoyan - Tech Design</title>
        <meta
          property="og:title"
          content="neonworld - Mikael Zakoyan - Tech Design"
        />
      </Helmet>
      <div class={styles['container1']}>
        <Header rootClassName="root-class-name2"></Header>
        <Header1></Header1>
        <iframe
          src="https://www.youtube.com/embed/_mGk2G58KoQ"
          allowFullScreen
          class={styles['video']}
        ></iframe>
        <div class={styles['playcontainer']}>
          <a
            href="https://megamika.itch.io/neon-world"
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
            src="https://media.discordapp.net/attachments/767823889723818007/999781661539586229/unknown.png?width=720&amp;height=405"
            class={styles['image']}
          />
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999781708599664791/unknown.png?width=720&amp;height=405"
            class={styles['image01']}
          />
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999781735627763794/unknown.png?width=720&amp;height=405"
            class={styles['image02']}
          />
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999781761976381500/unknown.png?width=720&amp;height=405"
            class={styles['image03']}
          />
        </div>
        <div class={styles['playerabilities']}>
          <div class={styles['container2']}>
            <span class={styles['text']}>Player movement</span>
            <img
              alt="image"
              src="https://i.gyazo.com/a792078f15e11e4dfacd7bef8f9dfdc8.gif"
              class={styles['image04']}
            />
            <span class={styles['text01']}>
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
          <div class={styles['container3']}>
            <span class={styles['text05']}>Air thrust</span>
            <img
              alt="image"
              src="https://i.gyazo.com/0ef2bdc1b004824974df7464c1070f7e.gif"
              class={styles['image05']}
            />
            <span class={styles['text06']}>
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
        <div class={styles['grid']}>
          <img
            alt="image"
            src="https://i.gyazo.com/7f25226bb0bd596d77d5f8cb022c3ff0.gif"
            class={styles['image06']}
          />
          <span class={styles['text10']}>
            <span class={styles['text11']}>Problem</span>
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
            <span class={styles['text14']}>Solution</span>
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
        <div class={styles['grid1']}>
          <span class={styles['text18']}>
            <span class={styles['text19']}>Problem</span>
            <br></br>
            <span>
              There were a few explicit rewards in the game, such as improving
              your time in the levels or unlocking cosmetic skins. However,
              there wasn&apos;t much in terms of implicit rewards.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span class={styles['text22']}>Solution</span>
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
            class={styles['image07']}
          />
        </div>
        <Header1 text="Camera directing"></Header1>
        <div class={styles['grid2']}>
          <img
            alt="image"
            src="https://i.gyazo.com/a8517edcc16e52eea4ed3cc4573b6de2.gif"
            class={styles['image08']}
          />
          <span class={styles['text26']}>
            <span class={styles['text27']}>Problem</span>
            <br></br>
            <span>
              Sometimes the levels required more platforms to be seen
              simultaneously, and the player would not be able to make some
              jumps without a leap of faith.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span class={styles['text30']}>Solution</span>
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
        <span class={styles['text38']}>
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
          class={styles['image09']}
        />
      </div>
    </div>
  )
}

export default Neonworld
