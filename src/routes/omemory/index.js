import { h } from 'preact'

import { Helmet } from 'react-helmet'

import Header from '../../components/header'
import Header1 from '../../components/header1'
import PlayButton from '../../components/play-button'
import Header2 from '../../components/header2'
import ImageWithText from '../../components/image-with-text'
import styles from './style.css'

const Omemory = (props) => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>omemory - Mikael Zakoyan - Tech Design</title>
        <meta
          property="og:title"
          content="omemory - Mikael Zakoyan - Tech Design"
        />
      </Helmet>
      <Header rootClassName="root-class-name"></Header>
      <Header1></Header1>
      <iframe
        src="https://www.youtube.com/embed/zuynDETSHUA"
        allowFullScreen
        class={styles['video']}
      ></iframe>
      <div class={styles['playcontainer']}>
        <a
          href="https://megamika.itch.io/no-memory"
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
          src="https://img.itch.zone/aW1hZ2UvMTUwNDY5MS85Mzc2NTkwLnBuZw==/original/JhvuSo.png"
          class={styles['image']}
        />
        <img
          alt="image"
          src="https://img.itch.zone/aW1hZ2UvMTUwNDY5MS85Mzc2NTkyLnBuZw==/original/XGSZNn.png"
          class={styles['image01']}
        />
        <img
          alt="image"
          src="https://img.itch.zone/aW1hZ2UvMTUwNDY5MS85Mzc2NTk0LnBuZw==/original/njCCWB.png"
          class={styles['image02']}
        />
        <img
          alt="image"
          src="https://img.itch.zone/aW1hZ2UvMTUwNDY5MS85Mzc2NTkzLnBuZw==/original/DKtbjK.png"
          class={styles['image03']}
        />
      </div>
      <Header1 text="Entities"></Header1>
      <Header2></Header2>
      <img
        alt="image"
        src="https://i.gyazo.com/c00889e58f51fe67f0ae031ada2116fb.gif"
        class={styles['playergif']}
      />
      <span class={styles['playertext']}>
        The player character has several abilities.
      </span>
      <div class={styles['playerabilities']}>
        <ImageWithText></ImageWithText>
        <ImageWithText
          text="Spinning attack"
          image_src="https://i.gyazo.com/41ebf4c20c8b0de0eb40dce8753ad105.gif"
        ></ImageWithText>
        <ImageWithText
          text="3 hit combo"
          image_src="https://i.gyazo.com/6c9e78641d2eac6fa2b289febe790255.gif"
        ></ImageWithText>
        <ImageWithText
          text="A fireball"
          image_src="https://i.gyazo.com/138c054ff1cd443fdd677c45604a773d.gif"
        ></ImageWithText>
      </div>
      <ImageWithText
        text="AOE attack"
        image_src="https://i.gyazo.com/31a802634dcfd088d15f91d13df0d0b9.gif"
      ></ImageWithText>
      <span class={styles['text']}>
        All of these abilities come together to create a fun combat loop that
        keeps the player engaged. On top of that the player also has a stamina
        to manage.
      </span>
      <Header2 Text="Enemies"></Header2>
      <div class={styles['grid']}>
        <div class={styles['container1']}>
          <img
            alt="image"
            src="https://cdn.discordapp.com/attachments/767823889723818007/999756447510433822/Enemy1_img.png"
            class={styles['image04']}
          />
          <span class={styles['text01']}>
            <span class={styles['text02']}>Close range</span>
            <span>. Can use his fists to attack the player</span>
          </span>
        </div>
        <div class={styles['container2']}>
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/999757648415162430/unknown.png"
            class={styles['image05']}
          />
          <span class={styles['text04']}>
            <span class={styles['text05']}>Ranged</span>
            <span>
              . Runs away when the player gets too close. Uses homing
              projectiles to attack the player
            </span>
          </span>
        </div>
        <div class={styles['container3']}>
          <img
            alt="image"
            src="https://cdn.discordapp.com/attachments/767823889723818007/999756446868709477/Enemy_3_img.png"
            class={styles['image06']}
          />
          <span class={styles['text07']}>
            <span class={styles['text08']}>Ranged</span>
            <span>
              . Jumps around a lot shoots fast projectiles at the player
            </span>
          </span>
        </div>
        <div class={styles['container4']}>
          <img
            alt="image"
            src="https://cdn.discordapp.com/attachments/767823889723818007/999756447179079770/Enemy_4_img.png"
            class={styles['image07']}
          />
          <span class={styles['text10']}>
            <span class={styles['text11']}>Close/Mid</span>
            <span class={styles['text12']}> range</span>
            <span>
              . Uses his fists if the player is too close. Has an AOE attack if
              the player is just outside the reach of his fists
            </span>
          </span>
        </div>
      </div>
      <Header1 text="AI"></Header1>
      <Header2 Text="Pathfinding"></Header2>
      <div class={styles['grid1']}>
        <img
          alt="image"
          src="https://i.gyazo.com/f88e0f747f0033a93ce15578f08e2cb5.gif)"
          class={styles['image08']}
        />
        <span class={styles['text14']}>
          <span>
            The pathfinding solution in the game is very simple. All of the
            entities who need to pathfind shoot a bunch of raycasts all around
            them and then when they need to find out where to go, they just pick
            the raycast direction that doesn&apos;t collide with anything.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
        </span>
        <span class={styles['text26']}>
          <span>
            Sometimes we would need the enemies to not go into certain areas,
            but didn&apos;t have a collider there so I made an invisible cube
            that would block the entities from going there.
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
          <br></br>
          <span></span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
        </span>
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999759978413969428/Pasted_image_20220720141103.png?width=720&amp;height=492"
          class={styles['image09']}
        />
      </div>
      <div class={styles['container5']}>
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999760531965628416/Pasted_image_20220720141208.png?width=720&amp;height=473"
          class={styles['image10']}
        />
        <span class={styles['text44']}>
          <span>Most comonly it was used for the lava.</span>
        </span>
      </div>
      <Header1 text="Editors" rootClassName="root-class-name"></Header1>
      <span class={styles['text46']}>
        The game required to have a quick way to iterate levels and content.
        Having different editors for mostly Level Design tasks was useful for
        reducing the time it took to make levels and other type of content.
      </span>
      <Header2 Text="Room Editor"></Header2>
      <span class={styles['text47']}>
        <span>
          Room editor was used for making rooms that would later be used to be
          stiched together in a one Map. The room editor allowed us to automate
          small level design related tasks, not worry about things not quite
          merging together and for the specific features to be added as needed.
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span>The room editor allowed us to do things such as</span>
        <br></br>
        <span></span>
        <br></br>
        <span>- Test out rooms by themselves</span>
        <br></br>
        <span>- Create filters for who made what room</span>
        <br></br>
        <span>
          - Manipulate the room files (room files are just json files)
        </span>
      </span>
      <iframe
        src="https://www.youtube.com/embed/-z3y5Uadkk8"
        allowFullScreen
        class={styles['iframe']}
      ></iframe>
      <Header2 Text="Map Editor"></Header2>
      <span class={styles['text56']}>
        <span>
          The map editor is made from the same base as the room editor and is
          used to put all the rooms together in a one place and then be
          played/tested in gameplay.
        </span>
        <br></br>
        <span></span>
        <br></br>
        <span>
          The map editor got very useful as it allowed us to edit things in a
          very scalable way without the extra clutter of small objects getting
          in the way. If you would ever need to edit one specific room you
          always could click on the room and press the &quot;edit room
          button&quot;
        </span>
      </span>
      <iframe
        src="https://www.youtube.com/embed/QNZUqdGPQzo"
        allowFullScreen
        class={styles['iframe1']}
      ></iframe>
    </div>
  )
}

export default Omemory
