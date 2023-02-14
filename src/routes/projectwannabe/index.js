import { h } from 'preact'

import 'dangerous-html'
import { Helmet } from 'react-helmet'

import Header from '../../components/header'
import Header1 from '../../components/header1'
import PlayButton from '../../components/play-button'
import styles from './style.css'

const Projectwannabe = (props) => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>projectwannabe - Mikael Zakoyan - Tech Design</title>
        <meta
          property="og:title"
          content="projectwannabe - Mikael Zakoyan - Tech Design"
        />
      </Helmet>
      <Header rootClassName="root-class-name8"></Header>
      <Header1 text="Trailer"></Header1>
      <iframe
        src="https://www.youtube.com/embed/mmJ6geJBxIg"
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
          src="https://media.discordapp.net/attachments/767823889723818007/1075040137194508338/image.png"
          class={styles['image']}
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/1075040333487947826/image.png"
          class={styles['image1']}
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/1075040478891868190/image.png"
          class={styles['image2']}
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/1075040713869369406/image.png"
          class={styles['image3']}
        />
      </div>
      <Header1 text="Player set" rootClassName="root-class-name8"></Header1>
      <span class={styles['text']}>
        As a player you have of several weapons and abilities you can use for
        combat and platforming. The main ones include.
      </span>
      <div class={styles['container01']}>
        <div class={styles['container02']}>
          <span class={styles['roll']}>Blade</span>
          <div class={styles['div']}>
            <dangerous-html
              html={`<video alt="Video from Gyazo" width="500" autoplay muted loop playsinline><source src="https://i.gyazo.com/e6afe0833b3dfb9be1450af980d84429.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
          <span class={styles['text01']}>
            The blade is used to gather purple charges as you deal damage to the
            enemies with the blade. You can then use your purple charges to heal
            yourself.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div class={styles['container03']}>
          <span class={styles['three-hit']}>Thunder Strike</span>
          <div class={styles['div01']}>
            <dangerous-html
              html={`<video alt="Video from Gyazo" width="500" autoplay muted loop playsinline><source src="https://i.gyazo.com/a94358970f539d3d9dd8a265570fd032.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
          <span class={styles['text02']}>
            There is also an option to collect 2 charges and perform a thunder
            strike.
          </span>
        </div>
      </div>
      <div class={styles['container04']}>
        <div class={styles['container05']}>
          <span class={styles['charge-attack']}>Rifle</span>
          <div class={styles['div02']}>
            <dangerous-html
              html={`<a href="https://gyazo.com/c05b4494aff43602f890e63b9b1026e0"><video alt="Video from Gyazo" width="500" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/1b595451e851e7e487c1f69dcaa75cf1.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
          <span class={styles['text03']}>
            The rifle is your primary weapon. As you shoot your enemies the blue
            bar on the rifle fills up and when it&apos;s glowing blue you can
            shoot a rocket and deal AOE damage.
          </span>
        </div>
        <div class={styles['container06']}>
          <span class={styles['fireball']}>
            <span class={styles['text04']}>Shotgun</span>
            <br></br>
          </span>
          <div class={styles['div03']}>
            <dangerous-html
              html={`<a href="https://gyazo.com/141b1f60ef83d4ec0bddf24b20a498a0"><video alt="Video from Gyazo" width="500" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/61bde4b55175ebfc44467eec1aa0a44f.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
          <span class={styles['text06']}>
            As an alternative weapon you also have a shotgun, it&apos;s useful
            for dealing a lot of damage with a drawback of having to get close
            to the enemy and risking taking damage.
          </span>
        </div>
      </div>
      <span class={styles['fireball01']}>Sniper rifle</span>
      <span class={styles['text07']}>
        <span>
          The Sniper rifle is also a useful weapon, mostly for when you have an
          enemy that is harder to reach.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>
          It also has a different mechanic for reloading. Instead of a regular
          reload it has heat, the more you shoot the more heated the weapon gets
          and at some point you won&apos;t be able to use it untill it&apos;s
          has completely cooled off.
        </span>
      </span>
      <div class={styles['div04']}>
        <dangerous-html
          html={`<a href="https://gyazo.com/a0b372eadd65c15dd8a79793f59c13aa"><video alt="Video from Gyazo" width="1000" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/86c766294aaf83665ef8e9535de20c86.mp4" type="video/mp4" /></video></a>`}
        ></dangerous-html>
      </div>
      <span class={styles['text11']}>
        That decizion was made to make a rifle a more useful weapon for quicly
        switching to it, shooting an enemy and switching back to your primary
        weapon. It also allows you to deal a lot of damage quickly by switching
        to a sniper rifle, unloading all your shots untill the weapon is heated
        and then letting it cool down while you are using your primary weapon.
      </span>
      <span class={styles['fireball02']}>Enemies</span>
      <div class={styles['container07']}>
        <div class={styles['container08']}>
          <span class={styles['charge-attack1']}>Meat</span>
          <div class={styles['div05']}>
            <dangerous-html
              html={`<a href="https://gyazo.com/c05b4494aff43602f890e63b9b1026e0"><video alt="Video from Gyazo" width="500" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/44051404fa16d682f9f60649f1b7afee.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
        </div>
        <div class={styles['container09']}>
          <span class={styles['fireball03']}>
            <span class={styles['text12']}>Chaser</span>
            <br></br>
          </span>
          <div class={styles['div06']}>
            <dangerous-html
              html={`<a href="https://gyazo.com/141b1f60ef83d4ec0bddf24b20a498a0"><video alt="Video from Gyazo" width="500" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/d8c2f63163b72536b34e9669f10fb15a.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
        </div>
      </div>
      <span class={styles['text14']}>
        Chaser and Meat are largely the same with chaser being the more agressiv
        and hard to hit variation, forcing you to use your blade to hit him.
      </span>
      <div class={styles['container10']}>
        <div class={styles['container11']}>
          <span class={styles['charge-attack2']}>Grunt</span>
          <div class={styles['div07']}>
            <dangerous-html
              html={`<a href="https://gyazo.com/c05b4494aff43602f890e63b9b1026e0"><video alt="Video from Gyazo" width="500" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/5a9dfe585a3bb8ebcd840c59008a0dca.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
        </div>
        <div class={styles['container12']}>
          <span class={styles['fireball04']}>Soldier</span>
          <div class={styles['div08']}>
            <dangerous-html
              html={`<a href="https://gyazo.com/141b1f60ef83d4ec0bddf24b20a498a0"><video alt="Video from Gyazo" width="500" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/b2778ad2aad3f951d9c77b69a8672ad7.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
        </div>
      </div>
      <div class={styles['container13']}>
        <div class={styles['container14']}>
          <span class={styles['charge-attack3']}>Block</span>
          <div class={styles['div09']}>
            <dangerous-html
              html={`<a href="https://gyazo.com/c05b4494aff43602f890e63b9b1026e0"><video alt="Video from Gyazo" width="500" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/fc78520bf3e149475e9ef93222923df8.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
          <span class={styles['text15']}>
            Block is a bigger enemy that has an ability to cast a shield in
            front of him, which forces you to either focus on someone else or
            try to flank him.
          </span>
        </div>
        <div class={styles['container15']}>
          <span class={styles['fireball05']}>
            <span class={styles['text16']}>Knight</span>
            <br></br>
          </span>
          <div class={styles['div10']}>
            <dangerous-html
              html={`<a href="https://gyazo.com/141b1f60ef83d4ec0bddf24b20a498a0"><video alt="Video from Gyazo" width="500" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/2d9284c6fd03fb1d50817afeb9e16aa4.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
          <span class={styles['text18']}>
            Knight is an enemy designed to be your first priority when he
            appears in the combat arena. He looks imposing, deals slashes
            towards the player and when his health gets below 50% he starts to
            perform a ground slam attack which really commands attention (and
            does a lot of damage).
          </span>
        </div>
      </div>
      <span class={styles['fireball06']}>Overlord</span>
      <span class={styles['text19']}>
        Overlord is a simpler type of an enemy, with one unique ability, he can
        teleport. This ability makes him a different type of an encounter,
        demanding the player to move around.
      </span>
      <div class={styles['div11']}>
        <dangerous-html
          html={`<a href="https://gyazo.com/a0b372eadd65c15dd8a79793f59c13aa"><video alt="Video from Gyazo" width="1000" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/04d7ae022274dd3a6ba63bca863f0590.mp4" type="video/mp4" /></video></a>`}
        ></dangerous-html>
      </div>
      <span class={styles['text20']}>
        The roster of enemies was designed in a way to force the player to use
        his whole set.
      </span>
      <span class={styles['fireball07']}>AI</span>
      <span class={styles['text21']}>
        There are a few tricks to making the enemies feel active in combat
        without making them too difficult.
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <span class={styles['text22']}>
        A lot of these tricks were inspired by the tricks used in Doom 2016 and
        Ethernal.
      </span>
      <span class={styles['fireball08']}>Perspective and tokens</span>
      <span class={styles['text23']}>
        Aimed enemy is more aggressive. The enemy that you are currently looking
        at will attack the player a lot more then any other enemy.
      </span>
      <span class={styles['text24']}>
        Along with that there is also a token system which doesn&apos;t allow
        too many enemies to attack the player at once. When an enemy wants to
        shoot the player he needs to grab a token, if there are no tokens
        available then he can&apos;t shoot.
      </span>
      <div class={styles['container16']}>
        <div class={styles['container17']}>
          <span class={styles['charge-attack4']}>Without Tokens</span>
          <div class={styles['div12']}>
            <dangerous-html
              html={`<a href="https://gyazo.com/c05b4494aff43602f890e63b9b1026e0"><video alt="Video from Gyazo" width="500" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/2ead731bf32c82dcb96685cb9106757d.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
        </div>
        <div class={styles['container18']}>
          <span class={styles['fireball09']}>With Tokens</span>
          <div class={styles['div13']}>
            <dangerous-html
              html={`<a href="https://gyazo.com/141b1f60ef83d4ec0bddf24b20a498a0"><video alt="Video from Gyazo" width="500" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/3e51b286ed93a95d6cd1200a10580404.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
        </div>
      </div>
      <span class={styles['text25']}>
        Enemies also have an ability to steal tokens in case the playet is
        looking right at them. This is made to ensure the enemies don&apos;t
        just stand around dumbfounded.
      </span>
      <span class={styles['fireball10']}>&quot;Perfect&quot; aim</span>
      <span class={styles['text26']}>
        By default the enemies in the game can aim at the player with perfect
        accuracy. They predict where you will end up based on your velocity and
        shoot in that direction instead of the players actual position.
      </span>
      <div class={styles['div14']}>
        <dangerous-html
          html={`<a href="https://gyazo.com/a0b372eadd65c15dd8a79793f59c13aa"><video alt="Video from Gyazo" width="1000" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/92cb8c54423cc992be2d7dd237a87795.mp4" type="video/mp4" /></video></a>`}
        ></dangerous-html>
      </div>
      <span class={styles['text27']}>
        <span>
          After implementing that, I made them miss the player on purpose
          randomly and the next step was to control the RNG of their hits and
          misses.
        </span>
        <br></br>
      </span>
      <span class={styles['text30']}>
        <span>
          First of all there is a system in the game to ensure that the player
          can&apos;t simply kite around all of the enemies and evade all the
          damage. The longer the player kites in one direction the more accurate
          the enemies get, Also the enemies shooting in the direction that the
          player is moving is going to force the player to change course.
        </span>
        <br></br>
      </span>
      <span class={styles['text33']}>
        That can be clearly seen in the final boss battle.
      </span>
      <div class={styles['div15']}>
        <dangerous-html
          html={`<a href="https://gyazo.com/a0b372eadd65c15dd8a79793f59c13aa"><video alt="Video from Gyazo" width="1000" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/6db0e6bd0c60a54f6a93b1608aa304f5.mp4" type="video/mp4" /></video></a>`}
        ></dangerous-html>
      </div>
      <span class={styles['text34']}>
        Another small trick is that the enemies are a lot more accurate when
        player is full on health and heal charges. This is done to ensure
        exciting and tense gameplay at all times.
      </span>
      <span class={styles['fireball11']}>Final boss</span>
      <span class={styles['text35']}>
        For the final boss of the game I simply wanted to have a cool looking
        exciting 1 on 1 fight with the player.
      </span>
      <span class={styles['text36']}>
        The final boss has 2 stages, one in which he has a sword and shield and
        another in which he uses magic. He switches between these 2 stages
        throughout the course of the fight.
      </span>
      <span class={styles['fireball12']}>Pre production concepts</span>
      <span class={styles['text37']}>
        At the very beginning I was trying to nail down what kind of a player
        set there was going to be in the game. So I made a small document in
        which I wrote down all of the player mechanics I was going to have in
        the game.
      </span>
      <img
        alt="image"
        src="https://media.discordapp.net/attachments/767823889723818007/1075048703800393838/image.png?width=961&amp;height=490"
        class={styles['image4']}
      />
      <span class={styles['text38']}>
        After writing it all down and thinking about it, I showed it to a bunch
        of other game developers for feedback and iterated from there.
      </span>
      <span class={styles['text39']}>
        At the same time as that I had a similar document for the Enemies in the
        game.
      </span>
      <img
        alt="image"
        src="https://media.discordapp.net/attachments/767823889723818007/1075048946919022645/image.png?width=961&amp;height=628"
        class={styles['image5']}
      />
      <span class={styles['text40']}>
        It was the same process for that concept. I showed it to some other
        designers, iterated and then when I was happy with both of the concepts,
        I started to make a prototype.
      </span>
      <span class={styles['fireball13']}>Early prototypes</span>
      <span class={styles['text41']}>
        There are 3 versions of the game. One which was a multiplayer shooter.
      </span>
      <img
        alt="image"
        src="https://thumb.gyazo.com/thumb/1000_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMjEzNmVlOTMzNzk5OTkyOTc0OWExMWExZjBhY2ZlYTMifQ.I-vImmO3evm3-SjxhkBbnnmefJDVqCNYH1KwlEvfsUg-gif.gif"
        class={styles['image6']}
      />
      <span class={styles['text42']}>
        That one was scrapped due to an unnecessarily long development times.
        Another one was a simple prototype of the final version of the game,
        that was made scrappily and quickly. All of the enemies had the same
        mesh, scaled differently.
      </span>
      <img
        alt="image"
        src="https://thumb.gyazo.com/thumb/1000_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfN2ZmMjBmNDVhZWRmMjE2MjY0NDc0OTQ1OWIyMDY4M2IifQ.pcgjQx-puVPnXEkMztPYDZaAZIABvLfpq-IqaQZNv5s-gif.gif"
        class={styles['image7']}
      />
      <span class={styles['text43']}>
        That version was useful for playtesting and making big changes quickly.
      </span>
      <div class={styles['container19']}></div>
    </div>
  )
}

export default Projectwannabe
