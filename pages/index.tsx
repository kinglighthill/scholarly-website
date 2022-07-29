import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Business from '../components/home/Business';
import GetHelp from '../components/home/GetHelp';
import Students from '../components/home/Students';
import Partners from '../components/home/Partners';
import Footer from '../components/reusables/Footer';
import Navbar from '../components/reusables/Navbar';
import Testimonials from '../components/reusables/Testimonials';
import TopBanner from '../components/home/TopBanner';
import { statistics } from '../data';

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
        <Students />
        <Partners />
        <Business />

        {/* Statistics section */}
        <Box as="section" bgColor='brand.lime.700' py={{base: 7, md: 98}}>
          <HStack spacing={[6, 8, '60px', '145px']} justify='center'>
            {statistics.map(statistic => (
              <Box key={statistic.title}>
                <Text color='brand.yellow' fontSize={{base: 16, md: 31}} fontWeight='semibold' textAlign='center'>{statistic.value}</Text>
                <Text color='white' fontSize={{base: 10, md: 25}} fontWeight='light' textAlign='center'>{statistic.title}</Text>
              </Box>
            ))}
          </HStack>
        </Box>

        {/* Testimonials Section */}
        <Box as='section' bgColor='brand.nearWhite' pt={{base: '60px', md: '82px'}} pb={{base: '60px', md: '115px'}}>
          <Box textAlign='center' mb={{base: '90px', md: 12}} px={{base: 5, md: 0}}>
            <Text display='inline-block' textAlign='center' px='42px' py='10px' borderRadius={4} bgColor='brand.lime.700' color='brand.nearWhite' fontSize={[20, 31]} fontWeight='medium'>
              What people are saying
            </Text>
          </Box>
          <Testimonials />
        </Box>

        <GetHelp />
      </main>

      <Footer />
    </div>
  )
}

export default Home
