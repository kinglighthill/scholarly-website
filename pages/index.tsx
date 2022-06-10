import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/reusables/Footer'
import Navbar from '../components/reusables/Navbar'
import TopBanner from '../components/TopBanner'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Scholarly Africa</title>
        <meta name="description" content="Scholarly official website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <TopBanner />
      </main>
      <Footer />
    </div>
  )
}

export default Home
