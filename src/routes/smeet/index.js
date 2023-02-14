import { h } from 'preact'

import { Helmet } from 'react-helmet'

import Header from '../../components/header'
import PlayButton from '../../components/play-button'
import Header1 from '../../components/header1'
import styles from './style.css'

const Smeet = (props) => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>smeet - Mikael Zakoyan - Tech Design</title>
        <meta
          property="og:title"
          content="smeet - Mikael Zakoyan - Tech Design"
        />
      </Helmet>
      <Header rootClassName="root-class-name6"></Header>
      <div class={styles['playcontainer']}>
        <a
          href="https://www.smeet.com/en"
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
          src="https://media.discordapp.net/attachments/767823889723818007/1051261965097521182/image.png"
          class={styles['image']}
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/1051262054931107900/image.png"
          class={styles['image01']}
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/1051262132219564103/image.png"
          class={styles['image02']}
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/1051262243439919154/image.png"
          class={styles['image03']}
        />
      </div>
      <Header1
        text="Primary responsibilities"
        rootClassName="root-class-name5"
      ></Header1>
      <span class={styles['text']}>
        <span>
          At sMeet my role was to help out with game design and economy design
          for the game. Every week the game would need a new batch of content,
          my role was to make balancing sheets as well as be present at content
          meeting by contributing my ideas and create a flowchart of one of the
          weekly rooms in the game.
        </span>
        <span>
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </span>
      <Header1
        text="Secondary responsibilities"
        rootClassName="root-class-name6"
      ></Header1>
      <span class={styles['text03']}>
        <span>
          • Creating sheets that will then be checked and put live by QA
        </span>
        <br></br>
        <span>
          • Coming up with the text for the items and rooms in the game
        </span>
        <br></br>
        <span>
          • Analyzing the sales of the released content and adjusting game
          design based on that
        </span>
        <br></br>
        <span>
          • Analyzing retention and popularity of the game and investigating the
          holes and dips in data
        </span>
        <br></br>
        <span>
          • Optimizing workflows by making tools that speed up the development
          process
        </span>
        <br></br>
        <span>
          • Writing documentation and an onboarding document for future interns
        </span>
        <br></br>
        <span>
          • Onboarding another game design intern and working together on the
          problems
        </span>
      </span>
      <Header1
        text="Sanguinary Sanctum"
        rootClassName="root-class-name7"
      ></Header1>
      <img
        alt="image"
        src="https://media.discordapp.net/attachments/767823889723818007/1051263167478648953/image.png?width=1059&amp;height=651"
        class={styles['image04']}
      />
      <span class={styles['text17']}>
        Each room has a certain story or an objective related to it. For this
        room we had an idea of awakening a greedy fat vampire.
      </span>
      <span class={styles['text18']}>
        Your goal was to collect the blood of 3 different vampire families and
        feed it to a greedy vampire. Exactly how to do it was dicused in the
        content meeting. My role was to contribute ideas and formulate a
        flowchart describing the flow of the room.
      </span>
      <img
        alt="image"
        src="https://iili.io/HnL77Ev.png"
        class={styles['image05']}
      />
      <span class={styles['text19']}>
        After the flowchart is done I would have to then decide how many of each
        item and what rewards the players would recive. This would have to be
        done very carefully as if the item is too strong or too useless it might
        either have a hit on the sales or break the game&apos;s economy.
      </span>
      <span class={styles['text20']}>
        Here&apos;s what a typical balancing sheet for a room would look like.
      </span>
      <img
        alt="image"
        src="https://media.discordapp.net/attachments/767823889723818007/1051264709770367046/image.png?width=1248&amp;height=518"
        class={styles['image06']}
      />
      <span class={styles['text21']}>
        We had 3 tiers of users Normal, Deluxe and Super Deluxe each with
        different spending amounts. The room had to be designed to meet the
        needs of each type of user, I would also have to make sure it takes a
        certain time to complete a room.
      </span>
      <span class={styles['text22']}>
        There was also a ratio used to determine how good a reward is compared
        to the amount of coins you had to spend to get it.
      </span>
      <span class={styles['fireball']}>Groupchallenge specials</span>
      <span class={styles['text23']}>
        Usually with each big room released we do a groupchallenge in which
        different groups in the game compete to see who can collect the most of
        a specific item in the game.
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <span class={styles['text24']}>
        This room had 2 obvious iteams that would be a good fit for the
        groupchallenge, the Cursed Blood and the Evil Essense.
      </span>
      <span class={styles['text25']}>
        Evil Esense can be rewarded from every item in the room so it would
        motivate players to complete the room. Cursed blood is only achieved
        towards the end of the room so you need to play the rest of the room to
        get that item.
      </span>
      <span class={styles['text26']}>
        I felt like this room was gonna be a banger so I suggested to use both
        items as a groupchallenge and make it 3 parts instead of usual 2 (the
        last groupchallenge is just an in game currency). That ended up being a
        really good decision as the player engagement and sales went up
        significantly compared to the earlier rooms.
      </span>
      <span class={styles['fireball1']}>The Abernathy Estate</span>
      <img
        alt="image"
        src="https://media.discordapp.net/attachments/767823889723818007/1051265295714619442/image.png"
        class={styles['image07']}
      />
      <span class={styles['text27']}>
        For this room an objective is to ressurrect a ghost cat in a haunted
        mansion, to do that you need to find pieces of his collar, make a collar
        as well as create a revival stone along with using ghost mice and ghost
        locations to revive the cat.
      </span>
      <span class={styles['text28']}>
        This room was being released alongside with halloween so it was supposed
        to be a special room, because of that the flowchart had a lot of extra
        depth to it.
      </span>
      <img
        alt="image"
        src="https://iili.io/HnL75CJ.png"
        class={styles['image08']}
      />
      <span class={styles['text29']}>
        For the balancing of this room I had to ensure that each player would
        get good rewards out of it so the ratios could be increased from the
        norm. I also had to do some manipulation with the rewards ensuring that
        the items that are priced higher give out more rewards.
      </span>
      <img
        alt="image"
        src="https://media.discordapp.net/attachments/767823889723818007/1051265745893478410/image.png?width=1248&amp;height=530"
        class={styles['image09']}
      />
      <div class={styles['container1']}></div>
    </div>
  )
}

export default Smeet
