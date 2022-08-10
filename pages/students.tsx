import { useEffect } from 'react';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';
import { Box, Button, Flex, GridItem, HStack, Icon, SimpleGrid, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react';
import Footer from '../components/reusables/Footer';
import Navbar from '../components/reusables/Navbar';
import Slider from '../components/students/Slider';
import TopBanner from '../components/students/TopBanner';
import { ChevronRightIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import exam_apps from '../public/exam_apps.png';
import activation_pins from '../public/activation_pins.png';
import cbt_centre from '../public/cbt_centre.png';
import lady_on_headphones_typing from '../public/lady_on_headphones_typing.png';
import green_pattern from '../public/green_pattern.svg';
import classes from '../styles/Students.module.css';
import PinOutlets from '../components/reusables/PinOutlets';
import CbtCentres from '../components/reusables/CbtCentres';
import LearningCentres from '../components/reusables/LearningCentres';
import BuyPin from '../components/reusables/BuyPin';
import CartProvider from '../context/CartContext';
import Page from '../components/reusables/Page';

const Students: NextPage = () => {
  const { isOpen: isSalesOuletsOpen, onOpen: openSalesOutlets, onClose: closeSalesOutlets } = useDisclosure();
  const { isOpen: isCbtCentresOpen, onOpen: openCbtCentres, onClose: closeCbtCentres } = useDisclosure();
  const { isOpen: isLearningCentresOpen, onOpen: openLearningCentres, onClose: closeLearningCentres } = useDisclosure();
  const { isOpen: isBuyPinOpen, onOpen: openBuyPin, onClose: closeBuyPin } = useDisclosure();

  // Remove cached data from the Buy Pin modal when the user leaves or refreshes the Students page.
  useEffect(() => {
    return () => sessionStorage.removeItem('selectedApps');
  }, []);
  
  return (
    <Page title='Scholarly Africa | Students'>
      <TopBanner />
      <Slider />

      {/* Exam Apps, Activation Pins, and CBT Centres sections for devices greater than 480px */}
      <Box as='section' pb='130px' display={['none', 'block']}>
        <SimpleGrid columns={3} spacingX={5} fontSize={0} bgColor='brand.nearWhite' px={{base: 5, lg: '120px'}} pt={[5, '120px']}>
          <GridItem className={classes.image_grid_item}>
            <Image src={exam_apps} alt="" priority />
          </GridItem>
          <GridItem className={classes.image_grid_item}>
            <Image src={activation_pins} alt="" />
          </GridItem>
          <GridItem className={classes.image_grid_item}>
            <Image src={cbt_centre} alt="" />
          </GridItem>
        </SimpleGrid>
        <SimpleGrid columns={3} spacingX={5} spacingY={0}  px={{base: 5, lg: '120px'}} pt={4}>
          <GridItem>
            <VStack align='start' justify='space-between' h='100%' maxW='89%' m='auto'>
              <Box>
                <Text as='h1' color='brand.lime.700' mb={3} fontSize={{base: 23, md: 25}} fontWeight='bold'>Over 30+ Exam Apps</Text>
                <Text color='brand.lime.700'>Download apps for UTME, WASSCE, NECO, Post UTME, BECE etc.</Text>
              </Box>
              <Link href='/apps'>
                <a>
                  <Button type='button' variant='solid' iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}>
                    See Apps
                  </Button>
                </a>
              </Link>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align='start' justify='space-between' h='100%' maxW='89%' m='auto'>
              <Box>
                <Text as='h1' color='brand.lime.700' mb={3} fontSize={{base: 23, md: 25}} fontWeight='bold'>Activation Pins</Text>
                <Text color='brand.lime.700'>Get 16 digits activation pin to unlock all the locked contents in Scholarly apps.</Text>
              </Box>
              <HStack spacing={{base: 0, xl: 2}}>
                <Button type='button' variant='solid' display={{base: 'none', xl: 'inline-flex'}} onClick={openBuyPin} iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}>
                  Buy now
                </Button>
                <Button type='button' variant='outline' onClick={openSalesOutlets} iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}>
                  Sales Outlets
                </Button>
              </HStack>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align='start' justify='space-between' h='100%' maxW='89%' m='auto'>
              <Box mb={4}>
                <Text as='h1' color='brand.lime.700' mb={3} fontSize={{base: 23, md: 25}} fontWeight='bold'>CBT Centres</Text>
                <Text color='brand.lime.700'>Find Scholarly approved CBT centers nationwide to practice for your next exam.</Text>
              </Box>
              <Button type='button' variant='solid' onClick={openCbtCentres} iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}>
                Find Centres
              </Button>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Box>

      {/* Exam Apps Section for mobile */}
      <Box as='section' display={['block', 'none']} px={5} py='60px' pos='relative'>
        <VStack spacing={8} align='start'>
          <Box fontSize={0} zIndex={1}>
            <Image src={exam_apps} alt="" />
          </Box>
          <Box>
            <Text as='h1' color='brand.lime.700' mb={3} fontSize={25} fontWeight='bold'>Over 30+ Exam Apps</Text>
            <Text color='brand.lime.700'>Download apps for UTME, WASSCE, NECO, Post UTME, BECE etc.</Text>
          </Box>
          <Link href='/apps'>
            <Button type='button' variant='solid' iconSpacing={4} rightIcon={<Icon as={ChevronRightIcon} />}>
              See Apps
            </Button>
          </Link>
        </VStack>
      </Box>
      
      {/* Activation Pins Section for mobile */}
      <Box as='section' display={['block', 'none']} px={5} py='60px' pos='relative'>
        <VStack spacing={8} align='start'>
          <Box fontSize={0} zIndex={1}>
            <Image src={activation_pins} alt="" />
          </Box>
          <Box>
            <Text as='h1' color='brand.lime.700' mb={3} fontSize={25} fontWeight='bold'>Activation Pins</Text>
            <Text color='brand.lime.700'>Get 16 digits activation pin to unlock all the locked contents in Scholarly apps.</Text>
          </Box>
          <HStack spacing={2}>
            <Button type='button' variant='solid' onClick={openBuyPin} iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={['none', 'inline-block']} />}>
              Buy now
            </Button>
            <Button type='button' variant='outline' onClick={openSalesOutlets} iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={['none', 'inline-block']} />}>
              Sales Outlets
            </Button>
          </HStack>
        </VStack>
      </Box>
      
      {/* CBT Centres Section for mobile */}
      <Box as='section' display={['block', 'none']} px={5} py='60px' pos='relative'>
        <VStack spacing={8} align='start'>
          <Box fontSize={0} zIndex={1}>
            <Image src={cbt_centre} alt="" />
          </Box>
          <Box mb={4}>
            <Text as='h1' color='brand.lime.700' mb={3} fontSize={25} fontWeight='bold'>CBT Centres</Text>
            <Text color='brand.lime.700'>Find Scholarly approved CBT centers nationwide to practice for your next exam.</Text>
          </Box>
          <Button type='button' variant='solid' onClick={openCbtCentres} iconSpacing={4} rightIcon={<Icon as={ArrowNarrowRightIcon} />}>
            Find Centres
          </Button>
        </VStack>
      </Box>

      {/* Learning Centres Section for all devices */}
      <Box as='section' px={{base: 5, lg: '120px'}} py={{base: '60px', md: '110px'}} pos='relative'>
        <Flex align='center' flexWrap={['wrap', 'nowrap']}>
          <Box fontSize={0} flexBasis={['100%', '49%']} zIndex={1}>
            <Image src={lady_on_headphones_typing} alt="A lady on headphones and a pair of glasses typing on a computer" />
          </Box>
          <Spacer />
          <VStack spacing={8} align='start' flexBasis={['100%', '43%', '38%']}>
            <VStack spacing={2.5} align='start' display={{base: 'none', md: 'flex'}}>
              <Box p={2} pb={1} bgColor='brand.lime.500' borderRadius={4} boxShadow="0px 2px 15px rgba(70, 172, 102, 0.25)">
                <Icon as={LocationMarkerIcon} color='white' fontSize='105%' />
              </Box>
              <Text textTransform='uppercase' fontSize={13} color='brand.lime.500'>Centres</Text>
            </VStack>
            <Text as='h1' color='brand.lime.700' fontSize={[25, 23, 31]} fontWeight='bold'>Learning Centres</Text>
            <Text color='brand.lime.700'>Need to learn physically in person?<br/> Find learning centers around you.</Text>
            <Button type='button' variant='solid' onClick={openLearningCentres} iconSpacing={4} rightIcon={<Icon as={ArrowNarrowRightIcon} />}>
              Find Centres
            </Button>
          </VStack>
        </Flex>
        <Box pos='absolute' top={{base: '6%', md: '12%', lg: '10%'}} left={{base: '38%', md: '42%', lg: '44%'}} zIndex={0} display={['none', 'block']}>
          <Image src={green_pattern} alt='' width={128} height={128} />
        </Box>
      </Box>
    
      <CartProvider>
        <BuyPin isOpen={isBuyPinOpen} onClose={closeBuyPin} />
      </CartProvider>
      <PinOutlets isOpen={isSalesOuletsOpen} onClose={closeSalesOutlets} />
      <CbtCentres isOpen={isCbtCentresOpen} onClose={closeCbtCentres} />
      <LearningCentres isOpen={isLearningCentresOpen} onClose={closeLearningCentres} />
    </Page>
  )
}

export default Students;