import { h } from 'preact'

import 'dangerous-html'
import { Helmet } from 'react-helmet'

import Header from '../../components/header'
import Header1 from '../../components/header1'
import PlayButton from '../../components/play-button'
import styles from './style.css'

const OmemoryV2 = (props) => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>omemoryV2 - Mikael Zakoyan - Tech Design</title>
        <meta
          property="og:title"
          content="omemoryV2 - Mikael Zakoyan - Tech Design"
        />
      </Helmet>
      <Header rootClassName="root-class-name3"></Header>
      <Header1 text="Trailer"></Header1>
      <iframe
        src="https://www.youtube.com/embed/6OK_81Y8vD8"
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
          src="https://media.discordapp.net/attachments/767823889723818007/1051206885010837524/image.png?width=1248&amp;height=645"
          class={styles['image']}
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/1051206057910861904/image.png?width=1157&amp;height=651"
          class={styles['image01']}
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/1051206501487882310/image.png?width=1248&amp;height=650"
          class={styles['image02']}
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/1051206652684148908/image.png?width=1248&amp;height=647"
          class={styles['image03']}
        />
      </div>
      <Header1
        text="My roles and responsibilities"
        rootClassName="root-class-name2"
      ></Header1>
      <span class={styles['text']}>
        <span>
          • Being in charge of and implementing the technical implementation of
          the game
        </span>
        <br></br>
        <br></br>
        <span>
          • Designing the combat system and the way the enemies would interact
          with the player
        </span>
        <br></br>
        <br></br>
        <span>
          • Creating animations and character models for the player/enemies
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </span>
      <Header1 text="Focus system" rootClassName="root-class-name1"></Header1>
      <div class={styles['container01']}>
        <div class={styles['container02']}>
          <span class={styles['text08']}>
            To use some player abilities you need to earn/spend focus points.
            You can earn them by dealing damage to the enemies and those points
            allow you to do a wide range of things.
          </span>
          <img
            alt="image"
            src="https://i.gyazo.com/5342bd5ca26df50e0732b5ad1a36f7d0.gif"
            class={styles['image04']}
          />
        </div>
        <div class={styles['container03']}>
          <span class={styles['text09']}>
            The focus system creates tense encounters with the enemies which
            promotes decision making picking one ability over the other.
          </span>
          <span class={styles['text10']}>
            There used to be no focus system earlier in the game&apos;s live and
            it felt like the game was missing something before that, adding it
            enhanced the gameplay greatly.
          </span>
        </div>
      </div>
      <Header1
        text="Player abilities"
        rootClassName="root-class-name3"
      ></Header1>
      <span class={styles['text11']}>
        The player abilities in the game were as follows.
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <div class={styles['container04']}>
        <div class={styles['container05']}>
          <span class={styles['roll']}>Roll</span>
          <div class={styles['div']}>
            <dangerous-html
              html={`<video alt="Video from Gyazo" width="1000" autoplay muted loop playsinline><source src="https://i.gyazo.com/6f43c78b020b1ec4f1a765b9dddf08f0.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
          <span class={styles['text12']}>
            The roll is a basic movement ability which gives you invincibility
            frames that let you evade enemy attacks.
          </span>
        </div>
        <div class={styles['container06']}>
          <span class={styles['three-hit']}>3 Hit combo</span>
          <div class={styles['div01']}>
            <dangerous-html
              html={`<video alt="Video from Gyazo" width="1010" autoplay muted loop playsinline><source src="https://i.gyazo.com/f3912a53b9398971914052bd5d63b450.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
          <span class={styles['text13']}>This is your main damage dealer.</span>
        </div>
      </div>
      <div class={styles['container07']}>
        <div class={styles['container08']}>
          <span class={styles['charge-attack']}>Charge attack</span>
          <div class={styles['div02']}>
            <dangerous-html
              html={`<a href="https://gyazo.com/c05b4494aff43602f890e63b9b1026e0"><video alt="Video from Gyazo" width="600" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/c05b4494aff43602f890e63b9b1026e0.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
          <span class={styles['text14']}>
            An attack that deals more damage compared to the normal combo and
            can hit more enemies at once
          </span>
        </div>
        <div class={styles['container09']}>
          <span class={styles['fireball']}>
            <span class={styles['text15']}>Heal</span>
            <br></br>
          </span>
          <div class={styles['div03']}>
            <dangerous-html
              html={`<a href="https://gyazo.com/141b1f60ef83d4ec0bddf24b20a498a0"><video alt="Video from Gyazo" width="500" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/141b1f60ef83d4ec0bddf24b20a498a0.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
          <span class={styles['text17']}>
            Probably the most useful way to spend your focus points, spend some
            focus and a bit of time in exchange for health.
          </span>
        </div>
      </div>
      <span class={styles['text18']}>
        There are also some abilities that can be unlocked later on during the
        exploration
      </span>
      <div class={styles['container10']}>
        <div class={styles['container11']}>
          <span class={styles['fireball01']}>Fireball</span>
          <span class={styles['text19']}>
            Has a homing effect and deals damage over time after being inflicted
            upon enemies.
          </span>
          <div class={styles['div04']}>
            <dangerous-html
              html={`<video alt="Video from Gyazo" width="590" autoplay muted loop playsinline><source src="https://i.gyazo.com/d6f7a16a2ad5f89652f841c85a47c9f6.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
          <span class={styles['text20']}>
            This is one of the basic ways you can use your focus points in the
            game on. It does decent damage and allows you to take less of a risk
            by attacking from a distance, however it drains a bit if your focus.
          </span>
        </div>
        <div class={styles['container12']}>
          <span class={styles['electric-dash']}>Electric dash</span>
          <div class={styles['div05']}>
            <dangerous-html
              html={`<a href="https://gyazo.com/40307f236b016f9f326f7f6156504ab3"><video alt="Video from Gyazo" width="500" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/40307f236b016f9f326f7f6156504ab3.mp4" type="video/mp4" /></video></a>`}
            ></dangerous-html>
          </div>
          <span class={styles['text21']}>
            A roll with a highter range that allows you to cover more distance
            and damage enemies as you zip past them
          </span>
        </div>
      </div>
      <span class={styles['fireball02']}>AOE attack</span>
      <span class={styles['text22']}>
        A huge blast that deals a lot of damage
      </span>
      <div class={styles['div06']}>
        <dangerous-html
          html={`<a href="https://gyazo.com/a0b372eadd65c15dd8a79793f59c13aa"><video alt="Video from Gyazo" width="600" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/a0b372eadd65c15dd8a79793f59c13aa.mp4" type="video/mp4" /></video></a>`}
        ></dangerous-html>
      </div>
      <span class={styles['text23']}>
        This is the most powerful ability that you can use your focus points on.
        Before we had a focus system players would tent to rely on it too much
        since they only needed to wait a cooldown before using it, now it was
        more of a difficult decizion of whether to use it or save up the focus
        points for healing and ranged damage.
      </span>
      <span class={styles['text24']}>
        All these abilities come together to create an engaging combat system
      </span>
      <div class={styles['div07']}>
        <dangerous-html
          html={`<a href="https://gyazo.com/1ff64e53e7350b968e286c9aa03df221"><video alt="Video from Gyazo" width="1280" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/1ff64e53e7350b968e286c9aa03df221.mp4" type="video/mp4" /></video></a>`}
        ></dangerous-html>
      </div>
      <span class={styles['fireball03']}>Enemies</span>
      <span class={styles['text25']}>
        Every game needs enemies to fight, In total we managed to cram 12
        enemies into the game
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <img
        alt="image"
        src="https://iili.io/HnsQQmx.png"
        class={styles['image05']}
      />
      <span class={styles['fireball04']}>Enemy AI</span>
      <span class={styles['text26']}>
        The way the enemy AI would work was very simple, there were action
        nodes, with each **action** the AI could pick to do that action randomly
        based on which **Action set** was currently active.
      </span>
      <div class={styles['container13']}>
        <div class={styles['container14']}>
          <span class={styles['fireball05']}>
            Actions available to the final boss
          </span>
          <img
            alt="image"
            src="https://iili.io/HnsZCBI.png"
            class={styles['image06']}
          />
        </div>
        <div class={styles['container15']}>
          <img
            alt="image"
            src="https://iili.io/HnsZKIR.png"
            class={styles['image07']}
          />
          <span class={styles['text27']}>
            The action as is doesn&apos;t do anything, it needs **Action steps**
            in order to do anything
          </span>
        </div>
      </div>
      <span class={styles['text28']}>
        For example if I want an enemy to attack with it&apos;s fists I add 2
        Charge Release nodes which would tell the enemy to charge up it&apos;s
        attack and then stop charging it up. Since the enemies would be
        inherited from the same character base as the player (allowing them to
        share animations and abilities) it was very similar to the player&apos;s
        inputs.
      </span>
      <span class={styles['text29']}>
        I could also adjust each action step according to my needs for that
        enemy
      </span>
      <img
        alt="image"
        src="https://iili.io/HnsZ3mv.png"
        class={styles['image08']}
      />
      <span class={styles['text30']}>
        Each action step had it&apos;s own little parameters to play with.
      </span>
      <div class={styles['container16']}>
        <div class={styles['container17']}>
          <span class={styles['text31']}>
            The way the action sets were picked out was pre defined for each
            enemy. There was the **Normal** action set and an **Agressive**
            action set. We could also add other action sets by specifying the
            amount of health the enemy would need to be at and the name of the
            new action set.
          </span>
          <img
            alt="image"
            src="https://media.discordapp.net/attachments/767823889723818007/1071819826978361474/image.png"
            class={styles['image09']}
          />
        </div>
        <div class={styles['container18']}>
          <span class={styles['fireball06']}>
            Action sets of the final boss
          </span>
          <img
            alt="image"
            src="https://iili.io/HnsZfXp.png"
            class={styles['image10']}
          />
        </div>
      </div>
      <span class={styles['fireball07']}>
        Enemy Archetypes and Sub Archetypes
      </span>
      <span class={styles['text32']}>
        The way we managed to have 12 enemy types in the game is by splitting
        the main enemy Archetypes into subtypes with similar move sets and
        ideas, but with minor tweaks either making them more powerful or have
        more health.
      </span>
      <span class={styles['text33']}>
        Here is a quick breakdown of all the Archetypes
      </span>
      <div class={styles['container19']}>
        <img
          alt="image"
          src="https://iili.io/HnsZn1t.png"
          class={styles['image11']}
        />
        <span class={styles['text34']}>
          A lot of the enemies were designed with the purpose of encouraging the
          player to use certain abilities over others. For example the Protector
          uses his shield a lot, which can be easily overcome by using your
          **fireball ability**, the scout dashes around a lot which encourages
          the player to do the same using his **electric dash**.
        </span>
      </div>
      <span class={styles['fireball08']}>Iteration on the enemies</span>
      <div class={styles['container20']}>
        <img
          alt="image"
          src="https://iili.io/HnsZorX.png"
          class={styles['image12']}
        />
        <div class={styles['container21']}>
          <span class={styles['text35']}>
            The very first version of the game before a big rework had a very
            different enemy roster/enemy design.
          </span>
          <span class={styles['text36']}>
            <span>
              This first iteration had every enemy contain it&apos;s own
              skeletal mesh and animations which greatly limited the depth we
              could achieve with combat, mostly due to the time it would take to
              do so for each enemy, the enemies themselves also didn&apos;t look
              very imposing and like a danger to the player.
            </span>
            <br></br>
          </span>
          <span class={styles['text39']}>
            <span>
              Those fallbacks were fixed with the second iteration in which I
              made them look a lot more imposing and reuse the same skeleton to
              be able to share animations and abilities with each other.
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <span class={styles['fireball09']}>
        <span>Level Editor</span>
        <br></br>
      </span>
      <span class={styles['text44']}>
        To quickly and efficiently make new rooms and maps (and as a personal
        challenge) I coded in a level editor into the game.
      </span>
      <div class={styles['container22']}>
        <div class={styles['container23']}>
          <span class={styles['fireball10']}>Campaign overview</span>
          <img
            alt="image"
            src="https://iili.io/HnsDVsV.png"
            class={styles['image13']}
          />
        </div>
        <div class={styles['container24']}>
          <span class={styles['text45']}>
            The level editor is available in the final build of the game for
            other people to make levels. The editor allows you to
          </span>
          <span class={styles['text46']}>
            <span>• Create rooms</span>
            <br></br>
            <span>• Arrange the created rooms into a map</span>
            <br></br>
            <span>• Connect several maps using transition doors</span>
          </span>
          <span class={styles['text52']}>
            Developing the editor during the production of the game made created
            some challenges, particularly if the editor contained a bug that
            prevented the level designer from continuing his job untill the
            issue has been resolved
          </span>
          <span class={styles['text53']}>
            The campaign overview screen contained a quick way to acess all of
            the rooms and maps that have been created for the currently edited
            campaign, you also have an ability to quickly open the campaign
            folder and export it as one file to be used in a final build.
          </span>
        </div>
      </div>
      <span class={styles['fireball11']}>Map editor</span>
      <span class={styles['text54']}>
        The map editor allows you to simply arrange your created rooms together
        and test out the map from any room that you want. you are also able to
        quickly jump into the room editor to make tweaks to the room and then go
        back out.
      </span>
      <div class={styles['div08']}>
        <dangerous-html
          html={`<a href="https://gyazo.com/54f3adbb3eaae563cdc59392df5b87f4"><video alt="Video from Gyazo" width="1000" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/54f3adbb3eaae563cdc59392df5b87f4.mp4" type="video/mp4" /></video></a>`}
        ></dangerous-html>
      </div>
      <div class={styles['container25']}>
        <div class={styles['container26']}>
          <span class={styles['fireball12']}>Act 1</span>
          <img
            alt="image"
            src="https://iili.io/HnsDBUX.png"
            class={styles['image14']}
          />
        </div>
        <div class={styles['container27']}>
          <span class={styles['fireball13']}>Act 2</span>
          <img
            alt="image"
            src="https://iili.io/HnsDxOG.png"
            class={styles['image15']}
          />
        </div>
      </div>
      <span class={styles['fireball14']}>Act 3</span>
      <img
        alt="image"
        src="https://iili.io/HnsDzbf.png"
        class={styles['image16']}
      />
      <span class={styles['text55']}>
        For the final game the level designer has created around 120 rooms in
        total and that created some technical and performance difficulties. Some
        things that were not a big deal with a smaller amount of rooms suddenly
        became a problem when the amount of rooms has expanded and the number of
        objects was increased.
      </span>
      <span class={styles['text56']}>
        A lot of the things used to run on tick (every frame, on update) and
        that was a huge problem for the performance, the game was then
        refactored to instead use events which dramatically improved the
        performance and loading times.
      </span>
      <span class={styles['fireball15']}>Room editor</span>
      <span class={styles['text57']}>
        The room editor was the editor that contained the most features, you
        could acess all of the assets relevant to level editing on the bottom,
        on the left there was a rudamentary hierarchy to show all the spawned
        items, you also had an ability to translate, scale and rotate any
        object.
      </span>
      <span class={styles['text58']}>
        The created room will then be saved as a JSON file and can be edited,
        shared and simply commited.
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <div class={styles['div09']}>
        <dangerous-html
          html={`<a href="https://gyazo.com/fc8b1092a646385f0382358fd803765f"><video alt="Video from Gyazo" width="1280" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/fc8b1092a646385f0382358fd803765f.mp4" type="video/mp4" /></video></a>`}
        ></dangerous-html>
      </div>
      <span class={styles['text59']}>
        For some objects (mostly the enemies) you also were exposed to some
        parameters. For example for the enemies in the game you had an ability
        to change which wave they would spawn at, if they are a boss or not (the
        health bar would appear in that case) and if they even count in the wave
        system.
      </span>
      <img
        alt="image"
        src="https://iili.io/HnsDAs2.png"
        class={styles['image17']}
      />
      <span class={styles['fireball16']}>Saving progress</span>
      <span class={styles['text60']}>
        <span>
          The game also gives the players a way to save progress and load up
          their save slot to continue playing. The game would automatically save
          each time you would reach a checkpoint or unlock a new ability.
        </span>
        <br></br>
      </span>
      <span class={styles['fireball17']}>Unlocking a checkpoint</span>
      <div class={styles['div10']}>
        <dangerous-html
          html={`<a href="https://gyazo.com/3714055781eb53e850a1ef324110cd68"><video alt="Video from Gyazo" width="1280" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/3714055781eb53e850a1ef324110cd68.mp4" type="video/mp4" /></video></a>`}
        ></dangerous-html>
      </div>
      <span class={styles['fireball18']}>Loading a game</span>
      <img
        alt="image"
        src="https://iili.io/HnsD5fS.png"
        class={styles['image18']}
      />
      <span class={styles['fireball19']}>Iterations</span>
      <span class={styles['text63']}>
        <span>
          A lot of things had to be cut, iterated and tweaked during the
          development, this a quick overview of some things that didn&apos;t
          make it/got reworked during the production process.
        </span>
        <br></br>
      </span>
      <span class={styles['fireball20']}>Main character design iterations</span>
      <div class={styles['screenshots1']}>
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/1051222854357758003/image.png"
          class={styles['image19']}
        />
        <img
          alt="image"
          src="https://iili.io/HnsD0Ob.png"
          class={styles['image20']}
        />
        <img
          alt="image"
          src="https://iili.io/HnsDl5u.png"
          class={styles['image21']}
        />
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/1051223193110720533/image.png"
          class={styles['image22']}
        />
      </div>
      <span class={styles['fireball21']}>
        The screenshot from the time the game was supposed to be a roguelike
      </span>
      <img
        alt="image"
        src="https://iili.io/HnsDMWQ.png"
        class={styles['image23']}
      />
      <span class={styles['fireball22']}>
        The very first time the game was running
      </span>
      <img
        alt="image"
        src="https://iili.io/HnsDcJe.png"
        class={styles['image24']}
      />
      <span class={styles['fireball23']}>
        First test run of the game with some art assets
      </span>
      <img
        alt="image"
        src="https://iili.io/HnsD707.png"
        class={styles['image25']}
      />
      <span class={styles['fireball24']}>Early map mockups</span>
      <img
        alt="image"
        src="https://iili.io/HnsDYg9.png"
        class={styles['image26']}
      />
      <span class={styles['fireball25']}>
        The version in between the early artstyle and the final artstyle
      </span>
      <img
        alt="image"
        src="https://iili.io/HnsDGzx.png"
        class={styles['image27']}
      />
      <div class={styles['container28']}></div>
    </div>
  )
}

export default OmemoryV2
