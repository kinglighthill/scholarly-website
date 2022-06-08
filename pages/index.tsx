import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Scholarly Africa</title>
        <meta name="description" content="Scholarly official website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  )
}

export default Home
