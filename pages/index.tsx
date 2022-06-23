import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Business from '../components/home/Business';
import GetHelp from '../components/home/GetHelp';
import Students from '../components/home/Students';
import Partners from '../components/home/Partners';
import Footer from '../components/reusables/Footer';
import Navbar from '../components/reusables/Navbar';
import Testimonial from '../components/reusables/Testimonial';
import TopBanner from '../components/home/TopBanner';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import classes from '../styles/Home.module.css';
import { statistics, testimonials } from '../data';
import useCarousel, { Breakpoints } from '../hooks/useCarousel';
import { useRef } from 'react';

const items = testimonials.map(testimonial => (
  <Testimonial key={testimonial.image} name={testimonial.name} title={testimonial.title} rating={testimonial.rating} image={testimonial.image}
    message={testimonial.message}
  />
));

const responsive: Breakpoints = {
  1024: {
    items: 2
  }
}

const Home: NextPage = () => {
  const carousel = useRef<AliceCarousel>(null);
  const { handleNavigation } = useCarousel(items, responsive, carousel);

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
        <Box as="section" bgColor='brand.lime.700' py={98}>
          <HStack spacing='145px' justify='center'>
            {statistics.map(statistic => (
              <Box key={statistic.title}>
                <Text color='brand.yellow' fontSize='31px' fontWeight='semibold' textAlign='center'>{statistic.value}</Text>
                <Text color='white' fontSize='25px' fontWeight='light' textAlign='center'>{statistic.title}</Text>
              </Box>
            ))}
          </HStack>
        </Box>

        {/* Testimonials Section */}
        <Box as='section' bgColor='brand.nearWhite' pt='82px' pb='115px'>
          <Box textAlign='center' mb={12}>
            <Text display='inline-block' textAlign='center' px='42px' py='10px' borderRadius={4} bgColor='brand.lime.700' color='brand.nearWhite' fontSize={31} fontWeight='medium'>
              What people are saying
            </Text>
          </Box>
          <Box pos='relative' className={classes.carousel}>
            <Box bgColor='#B2BBB6' px={2} pt={1.5} pb={0.5} borderRadius='20px' display='inline-block' cursor='pointer'
              pos='absolute' top='40%' left='8%' onClick={() => handleNavigation('prev')}
            >
              <Icon as={ChevronLeftIcon} color='white' />
            </Box>
            <AliceCarousel items={items} mouseTracking responsive={responsive} ref={carousel} disableButtonsControls disableDotsControls />
            <Box bgColor='#B2BBB6' px={2} pt={1.5} pb={0.5} borderRadius='20px' display='inline-block' cursor='pointer'
              pos='absolute' top='40%' right='9%' onClick={() => handleNavigation('next')}
            >
              <Icon as={ChevronRightIcon} color='white' />
            </Box>
          </Box>
        </Box>

        <GetHelp />
      </main>
      <Footer />
    </div>
  )
}

export default Home
