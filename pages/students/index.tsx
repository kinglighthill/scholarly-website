import { Box, Button, Flex, GridItem, HStack, Icon, SimpleGrid, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from "next/head";
import Image from 'next/image';
import Footer from '../../components/reusables/Footer';
import Navbar from '../../components/reusables/Navbar';
import Slider from '../../components/students/Slider';
import TopBanner from '../../components/students/TopBanner';
import { ChevronRightIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import exam_apps from '../../public/exam_apps.png';
import activation_pins from '../../public/activation_pins.png';
import cbt_centre from '../../public/cbt_centre.png';
import lady_on_headphones_typing from '../../public/lady_on_headphones_typing.png';
import green_pattern from '../../public/green_pattern.svg';
import classes from '../../styles/Students.module.css';
import PinOutlets from '../../components/reusables/PinOutlets';
import CbtCentres from '../../components/reusables/CbtCentres';
import LearningCentres from '../../components/reusables/LearningCentres';
import Link from 'next/link';

const Students: NextPage = () => {
  const { isOpen: isSalesOuletsOpen, onOpen: openSalesOutlets, onClose: closeSalesOutlets } = useDisclosure();
  const { isOpen: isCbtCentresOpen, onOpen: openCbtCentres, onClose: closeCbtCentres } = useDisclosure();
  const { isOpen: isLearningCentresOpen, onOpen: openLearningCentres, onClose: closeLearningCentres } = useDisclosure();

  return (
    <div>
      <Head>
        <title>Scholarly Africa | Students</title>
      </Head>
      <Navbar />
      <Box as="main">
        <TopBanner />
        <Slider />

        {/* Image and Text Grid Section */}
        <Box as='section' pb='130px'>
          <SimpleGrid columns={3} spacingX={5} spacingY={4} bgColor='brand.nearWhite' px='120px' pt='120px'>
            <GridItem maxH='212px' className={classes.image_grid_item}>
              <Image src={exam_apps} alt="" priority />
            </GridItem>
            <GridItem maxH='212px' className={classes.image_grid_item}>
              <Image src={activation_pins} alt="" />
            </GridItem>
            <GridItem maxH='212px' className={classes.image_grid_item}>
              <Image src={cbt_centre} alt="" />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={3} spacingX={5} spacingY={0} px='120px' pt={4}>
            <GridItem>
              <VStack align='start' justify='space-between' h='100%' maxW='89%' m='auto'>
                <Box>
                  <Text as='h1' color='brand.lime.700' mb={3} fontSize={25} fontWeight='bold'>Over 30+ Exam Apps</Text>
                  <Text color='brand.lime.700'>Download apps for UTME, WASSCE, NECO, Post UTME, BECE etc.</Text>
                </Box>
                <Link href='/apps'>
                  <Button type='button' variant='solid'>
                    See Apps
                    <Icon as={ChevronRightIcon} ml={4} />
                  </Button>
                </Link>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack align='start' justify='space-between' h='100%' maxW='89%' m='auto'>
                <Box>
                  <Text as='h1' color='brand.lime.700' mb={3} fontSize={25} fontWeight='bold'>Activation Pins</Text>
                  <Text color='brand.lime.700'>Get 16 digits activation pin to unlock all the locked contents in Scholarly apps.</Text>
                </Box>
                <HStack spacing={2}>
                  <Button type='button' variant='solid'>
                    Buy now
                    <Icon as={ChevronRightIcon} ml={4} />
                  </Button>
                  <Button type='button' variant='outline' onClick={openSalesOutlets}>
                    Sales Outlets
                    <Icon as={ChevronRightIcon} ml={4} />
                  </Button>
                </HStack>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack align='start' justify='space-between' h='100%' maxW='89%' m='auto'>
                <Box mb={4}>
                  <Text as='h1' color='brand.lime.700' mb={3} fontSize={25} fontWeight='bold'>CBT Centres</Text>
                  <Text color='brand.lime.700'>Find Scholarly approved CBT centers nationwide to practice for your next exam.</Text>
                </Box>
                <Button type='button' variant='solid' onClick={openCbtCentres}>
                  Find Centres
                  <Icon as={ChevronRightIcon} ml={4} />
                </Button>
              </VStack>
            </GridItem>
          </SimpleGrid>
        </Box>

        {/* Learning Centres Section */}
        <Box as='section' px='120px' py='110px' pos='relative'>
          <Flex align='center'>
            <Box flexBasis='49%' zIndex={1}>
              <Image src={lady_on_headphones_typing} alt="A lady on headphones and a pair of glasses typing on a computer" />
            </Box>
            <Spacer />
            <VStack spacing={8} align='start' flexBasis='38%'>
              <VStack spacing={2.5} align='start'>
                <Box p={2} pb={1} bgColor='brand.lime.500' borderRadius={4} boxShadow="0px 2px 15px rgba(70, 172, 102, 0.25)">
                  <Icon as={LocationMarkerIcon} color='white' fontSize={'105%'} />
                </Box>
                <Text textTransform='uppercase' fontSize={13} color='brand.lime.500'>Centres</Text>
              </VStack>
              <Text as='h1' color='brand.lime.700' fontSize={31} fontWeight='bold'>Learning Centres</Text>
              <Text color='brand.lime.700'>Need to learn physically in person?<br/> Find learning centers around you.</Text>
              <Button type='button' variant='solid' onClick={openLearningCentres}>
                Find Centres
                <Icon as={ArrowNarrowRightIcon} ml={4} />
              </Button>
            </VStack>
          </Flex>
          <Box pos='absolute' top='8%' left='44%' zIndex={0}>
            <Image src={green_pattern} alt='' width={128} height={128} />
          </Box>
        </Box>
      </Box>

      <Footer />

      <PinOutlets isOpen={isSalesOuletsOpen} onClose={closeSalesOutlets} />
      <CbtCentres isOpen={isCbtCentresOpen} onClose={closeCbtCentres} />
      <LearningCentres isOpen={isLearningCentresOpen} onClose={closeLearningCentres} />
    </div>
  )
}

export default Students;