import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Box, Button, Flex, GridItem, HStack, Icon, SimpleGrid, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react';
import Slider from '../components/students/Slider';
import TopBanner from '../components/students/TopBanner';
import { ChevronRightIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import exam_apps from '../public/exam_apps.webp';
import activation_pins from '../public/activation_pins.webp';
import cbt_centre from '../public/cbt_centre.webp';
import lady_on_headphones_typing from '../public/lady_on_headphones_typing.webp';
import green_pattern from '../public/green_pattern.svg';
import classes from '../styles/Students.module.css';
import PinOutlets from '../components/reusables/PinOutlets';
import CbtCentres from '../components/reusables/CbtCentres';
import LearningCentres from '../components/reusables/LearningCentres';
import BuyPin from '../components/reusables/BuyPin';
import CartProvider from '../context/CartContext';
import Page from '../components/reusables/Page';
import Testimonials, { Testimonial } from '../components/reusables/Testimonials';
import { fetchContent } from '../services/fetch_content.service';
import { TestimonialProps } from '../types/components/reusables/testimonials';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetchContent('getTestimonials/testimonials/student');
    const content = await response.json();
    // Pass content to the page via props  
    return { props: { data: content.data } }
  }
  catch (error) {
    console.log('An error occurred: ' + error);
    return { props: { error: true } }
  }
}

const Students: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isOpen: isSalesOuletsOpen, onOpen: openSalesOutlets, onClose: closeSalesOutlets } = useDisclosure();
  const { isOpen: isCbtCentresOpen, onOpen: openCbtCentres, onClose: closeCbtCentres } = useDisclosure();
  const { isOpen: isLearningCentresOpen, onOpen: openLearningCentres, onClose: closeLearningCentres } = useDisclosure();
  const { isOpen: isBuyPinOpen, onOpen: openBuyPin, onClose: closeBuyPin } = useDisclosure();
  const { data } = props;

  const testimonials = data.map((testimonial: TestimonialProps, index: number) => (
    <Testimonial key={testimonial.full_name + index+1} full_name={testimonial.full_name} user_type={testimonial.user_type}
      rating={testimonial.rating} profile_pic_sm={testimonial.profile_pic_sm} content={testimonial.content}
    />
  ));

  // Remove cached data from the Buy Pin modal when the user leaves or refreshes the Students page.
  useEffect(() => {
    return () => sessionStorage.removeItem('selectedApps');
  }, []);
  
  return (
    <Page title='Scholarly For Students - Smash Any Exam' description='Smash your JAMB, WAEC, Post UTME, NECO, BECE and other exams with Scholarly Apps. Over 1 million students use Scholarly apps to study for their exams. Available for Android, iOS and Desktop.'>
      <TopBanner />
      <Slider />

      {/* Activation */}
      <Box as='section'>
        <Box maxW='100vw' px={{base: 5, lg: '120px'}} pt={['60px', '120px']} pb={['60px', 0, '130px']}>
          <SimpleGrid columns={{base: 1, md: 3}} spacingX={5} spacingY={["60px", "110px", 0]} fontSize={0}
            maxW='1440px' m='auto'
          >
            <GridItem className={classes.image_grid_item}>
              <VStack spacing={4} align={{base: "start", md: "center"}} h="100%">
                <Box fontSize={0} pos="relative">
                  <Box display={{base: "none", md: "block"}} pos="absolute" top="-121px" left={{base: -5, lg: "-120px"}} w="100vw" h="calc(100% + 121px)" bg="#F5F6F6"></Box>
                  <Image src={exam_apps} alt="" priority />
                </Box>
                <VStack align='start' justify='space-between' h='100%' maxW={{base: '100%', md: '89%'}}>
                  <Box mb={4}>
                    <Text as='h1' color='brand.lime.700' mb={3} fontSize={[23, 25]} fontWeight='bold'>Over 30+ Exam Apps</Text>
                    <Text color='brand.lime.700' fontSize={16}>Download apps for UTME, WASSCE, NECO, Post UTME, BECE etc.</Text>
                  </Box>
                  <Link href='/apps/android'>
                    <a>
                      <Button type='button' variant='solid' iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}>
                        See Apps
                      </Button>
                    </a>
                  </Link>
                </VStack>
              </VStack>
            </GridItem>
            <GridItem className={classes.image_grid_item}>
              <VStack spacing={4} align={{base: "start", md: "center"}} h="100%">
                <Box fontSize={0}>
                  <Image src={activation_pins} alt="" />
                </Box>
                <VStack align='start' justify='space-between' h='100%' maxW={{base: '100%', md: '89%'}}>
                  <Box mb={4}>
                    <Text as='h1' color='brand.lime.700' mb={3} fontSize={[23, 25]} fontWeight='bold'>Activation Pins</Text>
                    <Text color='brand.lime.700' fontSize={16}>Get 16 digits activation pin to unlock all the locked contents in Scholarly apps.</Text>
                  </Box>
                  <HStack spacing={{base: 0, xl: 2}}>
                    {/* <Button type='button' variant='solid' display={{base: 'none', xl: 'inline-flex'}} onClick={openBuyPin} iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}>
                      Buy now
                    </Button> */}
                    {/* When pin sales outlets are available, remove the Link and 'a' tags and uncomment the onClick handler */}
                    <Link href='/pin-sales-outlets'>
                      <a>
                        <Button type='button' variant='outline' iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}
                          // onClick={openSalesOutlets}
                        >
                          Sales Outlets
                        </Button>
                      </a>
                    </Link>
                  </HStack>
                </VStack>
              </VStack>
            </GridItem>
            <GridItem className={classes.image_grid_item}>
              <VStack spacing={4} align={{base: "start", md: "center"}} h="100%">
                <Box fontSize={0}>
                  <Image src={cbt_centre} alt="" />
                </Box>
                <VStack align='start' justify='space-between' h='100%' maxW={{base: '100%', md: '89%'}}>
                  <Box mb={4}>
                    <Text as='h1' color='brand.lime.700' mb={3} fontSize={[23, 25]} fontWeight='bold'>CBT Centres</Text>
                    <Text color='brand.lime.700' fontSize={16}>Find Scholarly approved CBT centers nationwide to practice for your next exam.</Text>
                  </Box>
                  {/* When cbt centres are available, remove the Link and 'a' tags and uncomment the onClick handler */}
                  <Link href='/cbt-centres'>
                    <a>
                      <Button type='button' variant='solid' iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}
                        // onClick={openCbtCentres}
                      >
                        Find Centres
                      </Button>
                    </a>
                  </Link>
                </VStack>
              </VStack>
            </GridItem>
          </SimpleGrid>
        </Box>
        {/* <Box maxW='100vw' px={{base: 5, lg: '120px'}}>
          <SimpleGrid columns={3} spacingX={5} spacingY={0} pt={4} maxW='1440px' m='auto'>
          </SimpleGrid>
        </Box> */}
      </Box>

      {/* Learning Centres Section */}
      <Box as='section' px={{base: 5, lg: '120px'}} pt={[0, '110px']} pb={['60px', '110px']} pos='relative'>
        <Flex align='center' flexWrap={{base: 'wrap', md: 'nowrap'}}>
          <Box fontSize={0} flexBasis={{base: '100%', md: '49%'}} zIndex={1}>
            <Image src={lady_on_headphones_typing} alt="A lady on headphones and a pair of glasses typing on a computer" priority />
          </Box>
          <Spacer />
          <VStack spacing={{base: 5, md: 8}} align='start' flexBasis={{base: '100%', md: '38%'}}>
            <VStack spacing={2.5} align='start' display={{base: 'none', md: 'flex'}}>
              <Box p={2} pb={1} bgColor='brand.lime.500' borderRadius={4} boxShadow="0px 2px 15px rgba(70, 172, 102, 0.25)">
                <Icon as={LocationMarkerIcon} color='white' fontSize='105%' />
              </Box>
              <Text textTransform='uppercase' fontSize={13} color='brand.lime.500'>Centres</Text>
            </VStack>
            <Text as='h1' color='brand.lime.700' fontSize={{base: 25, md: 31}} fontWeight='bold'>Learning Centres</Text>
            <Text color='brand.lime.700'>Need to learn physically in person? Find learning centers around you.</Text>
            {/* When learning centres are available, remove the Link and 'a' tags and uncomment the onClick handler */}
            <Link href='/learning-centres'>
              <a>
                <Button type='button' variant='solid' iconSpacing={4} rightIcon={<Icon as={ArrowNarrowRightIcon} />}
                  // onClick={openLearningCentres}
                >
                  Find Centres
                </Button>
              </a>
            </Link>
          </VStack>
        </Flex>
        <Box pos='absolute' top={{base: '6%', md: '12%', lg: '10%'}} left={{base: '38%', md: '42%', lg: '44%'}} zIndex={0} display={{base: 'none', md: 'block'}}>
          <Image src={green_pattern} alt='' width={128} height={128} />
        </Box>
      </Box>

      {/* Testimonials Section */}
      <Box as='section' bgColor='brand.nearWhite' pt={{base: '60px', md: '82px'}} pb={{base: '60px', md: '115px'}}>
        <Box textAlign='center' mb={{base: '90px', md: 12}} px={{base: 5, md: 0}}>
          <Text display='inline-block' textAlign='center' px='42px' py='10px' borderRadius={4} bgColor='brand.lime.700' color='brand.nearWhite' fontSize={[20, 31]} fontWeight='medium'>
            What users are saying
          </Text>
        </Box>
        <Testimonials testimonials={testimonials} />
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