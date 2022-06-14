import { Box, HStack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
// import Business from '../components/home/Business'
// import GetHelp from '../components/home/GetHelp'
// import Students from '../components/home/Students'
import Footer from '../components/reusables/Footer'
import Navbar from '../components/reusables/Navbar'
// import TopBanner from '../components/TopBanner'

const statistics = [
  { title: 'Apps', value: '30+' },
  { title: 'Downloads', value: '1 million+' },
  { title: 'Partners', value: '20,000+' },
  { title: 'Businesses', value: '600+' },
]

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
        {/* <TopBanner />
        <Students />
        <Business /> */}

        {/* Statistics section */}
        {/* <Box as="section" bgColor='brand.lime.700' py={98}>
          <HStack spacing='145px' justify='center'>
            {statistics.map(statistic => (
              <Box key={statistic.title}>
                <Text color='brand.yellow' fontSize='31px' fontWeight='semibold' textAlign='center'>{statistic.value}</Text>
                <Text color='white' fontSize='25px' fontWeight='light' textAlign='center'>{statistic.title}</Text>
              </Box>
            ))}
          </HStack>
        </Box> */}

        {/* <GetHelp /> */}
        
      </main>
      <Footer />
    </div>
  )
}

export default Home
