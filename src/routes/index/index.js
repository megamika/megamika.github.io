import { h } from 'preact'
import { Link } from 'preact-router/match'

import { Helmet } from 'react-helmet'

import Header from '../../components/header'
import Header1 from '../../components/header1'
import styles from './style.css'

const Index = (props) => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>Mikael Zakoyan - Tech Design</title>
        <meta property="og:title" content="Mikael Zakoyan - Tech Design" />
      </Helmet>
      <Header rootClassName="root-class-name1"></Header>
      <div class={styles['container01']}>
        <div class={styles['projectwannabe']}>
          <Link href="/projectwannabe" class={styles['navlink']}>
            <div class={styles['no-memory']}>
              <img
                alt="image"
                src="https://media.discordapp.net/attachments/767823889723818007/1075036303483224114/image.png?width=961&amp;height=559"
                class={styles['image']}
              />
              <div class={styles['container02']}>
                <span class={styles['title']}>Project Wannabe</span>
              </div>
              <div class={styles['container03']}>
                <span class={styles['text']}>(WIP)</span>
                <img
                  alt="image"
                  src="https://media.discordapp.net/attachments/767823889723818007/1075038447519158362/UE5_Logo.png"
                  class={styles['image01']}
                />
              </div>
            </div>
          </Link>
          <iframe
            src="https://www.youtube.com/embed/mmJ6geJBxIg"
            allowFullScreen
            class={styles['iframe']}
          ></iframe>
        </div>
        <div class={styles['nomemory1']}>
          <Link href="/omemory-v2" class={styles['navlink1']}>
            <div class={styles['no-memory2']}>
              <img
                alt="image"
                src="/assets/playground_assets/nomemory-500h.png"
                class={styles['image02']}
              />
              <div class={styles['container04']}>
                <span class={styles['title1']}>No Memory</span>
              </div>
              <div class={styles['container05']}>
                <img
                  alt="image"
                  src="/assets/playground_assets/godot1.svg"
                  class={styles['image03']}
                />
              </div>
            </div>
          </Link>
          <iframe
            src="https://www.youtube.com/embed/6OK_81Y8vD8"
            allowFullScreen
            class={styles['iframe1']}
          ></iframe>
        </div>
        <div class={styles['dualinferno']}>
          <Link href="/processartificial" class={styles['navlink2']}>
            <div class={styles['no-memory3']}>
              <img
                alt="image"
                src="/assets/playground_assets/processartificial-500h.png"
                class={styles['image04']}
              />
              <div class={styles['container06']}>
                <span class={styles['title2']}>Process Artificial</span>
              </div>
              <div class={styles['container07']}>
                <img
                  alt="image"
                  src="/assets/playground_assets/unity.svg"
                  class={styles['image05']}
                />
              </div>
            </div>
          </Link>
          <iframe
            src="https://www.youtube.com/embed/-6v6liLSXpQ"
            allowFullScreen
            class={styles['iframe2']}
          ></iframe>
        </div>
        <div class={styles['nomemory4']}>
          <Link href="/smeet" class={styles['navlink3']}>
            <div class={styles['no-memory5']}>
              <img
                alt="image"
                src="https://dsry674gr2z0s.cloudfront.net/cdn/ff/7YFBSOjYFsmNIvQLR07KfYAksCd7YSxgbBTmp1D-6gs/1527674897/public/logo.png"
                class={styles['image06']}
              />
              <div class={styles['container08']}>
                <span class={styles['title3']}>sMeet</span>
              </div>
              <div class={styles['container09']}>
                <span class={styles['title4']}>Internship</span>
              </div>
            </div>
          </Link>
          <Link href="/smeet" class={styles['navlink4']}>
            <img
              alt="image"
              src="https://media.discordapp.net/attachments/767823889723818007/1051266899205439528/Pasted_image_20221112112858.png?width=1009&amp;height=651"
              class={styles['image07']}
            />
          </Link>
        </div>
        <div class={styles['neonworld']}>
          <Link href="/neonworld">
            <div class={styles['no-memory6']}>
              <img
                alt="image"
                src="/assets/playground_assets/neonworld-500h.png"
                class={styles['image08']}
              />
              <div class={styles['container10']}>
                <span class={styles['title5']}>Neon World</span>
              </div>
              <div class={styles['container11']}>
                <img
                  alt="image"
                  src="/assets/playground_assets/godot1.svg"
                  class={styles['image09']}
                />
              </div>
            </div>
          </Link>
          <iframe
            src="https://www.youtube.com/embed/_mGk2G58KoQ"
            allowFullScreen
            class={styles['iframe3']}
          ></iframe>
        </div>
        <div class={styles['dualinferno1']}>
          <Link href="/dualinferno">
            <div class={styles['no-memory7']}>
              <img
                alt="image"
                src="/assets/playground_assets/dualinferno-500h.png"
                class={styles['image10']}
              />
              <div class={styles['container12']}>
                <span class={styles['title6']}>Dual Inferno</span>
              </div>
              <div class={styles['container13']}>
                <img
                  alt="image"
                  src="/assets/playground_assets/unity.svg"
                  class={styles['image11']}
                />
                <img
                  alt="image"
                  src="/assets/playground_assets/c%23.svg"
                  class={styles['image12']}
                />
              </div>
            </div>
          </Link>
          <iframe
            src="https://www.youtube.com/embed/CDjsfYImWU8"
            allowFullScreen
            class={styles['iframe4']}
          ></iframe>
        </div>
      </div>
      <Header1 text="About me"></Header1>
      <div class={styles['grid']}>
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/767823889723818007/999829614652305488/LogoTransparent.png?width=841&amp;height=671"
          class={styles['image13']}
        />
        <span class={styles['text1']}>
          <span>
            A passionate self-taught tech designer with a solid understanding of
            how to code game systems. I can work in a team
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            environment as well as independently. Excellent at skills such as
            problem-solving and focus. I can quickly find solutions to given
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            goals and produce desirable results. I can quickly find methods to
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            save time and resources during development. Innovative, self-driven
            with a positive learning mindset.
          </span>
          <span></span>
          <br></br>
          <span></span>
        </span>
      </div>
    </div>
  )
}

export default Index
