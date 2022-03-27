import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Comments from './comments'

const name = 'SELECT blog '
const name2 = 'FROM thoughts'
const name3 = 'WHERE author = \'taylor\';'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={154}
              width={154}
              alt={name}
            />
            
            {/* <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <h1 className={utilStyles.heading2Xl}>{name2}</h1> */}

<h1 className={utilStyles.heading2Xl}>{name}<br />{name2}<br />{name3}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.blogHeading2Xl}>{name}<br />{name2}<br />{name3}
              <Link href="/">
                <a className={utilStyles.colorInherit}></a>
              </Link>
            </h2>
          </>
        )}
      </header>
      
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to Blog</a>
          </Link>
        </div>
      )}
    </div>
  )
}