import type { NextPage } from 'next';
import { Box, VStack, Text, Button, Icon, HStack, Flex, Spacer } from "@chakra-ui/react";
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/reusables/Navbar";
import Step from "../../components/partners/Step";
import classes from "../../styles/Partners.module.css";
import sign_up from "../../public/sign_up.svg";
import verify_identity from "../../public/verify_identity.svg";
import find_customers from "../../public/find_customers.svg";
import buy_pin from "../../public/buy_pin.svg";
import sell_pin from "../../public/sell_pin.svg";
import megaphone from "../../public/megaphone.png";
import yellow_pattern from "../../public/yellow_pattern.svg";
import Footer from "../../components/reusables/Footer";
import AliceCarousel from 'react-alice-carousel';
import useCarousel, { Breakpoints } from '../../hooks/useCarousel';
import Testimonial from '../../components/reusables/Testimonial';
import { testimonials } from '../../data';

const steps = [
  { index: 1, title: "Sign up", description: "Create an account on the site or with the app.", icon: sign_up },
  { index: 2, title: "Verify identity", description: "Provide your BVN so that we can better understand who you are.", icon: verify_identity },
  { index: 3, title: "Find customers", description: "Search for students around you to sell and market the app to.", icon: find_customers },
  { index: 4, title: "Buy your first pin", description: "Buy a pin from the app at discounted rate.", icon: buy_pin },
  { index: 5, title: "Sell your first pin", description: "When you sell a pin to a student, you earn profit.", icon: sell_pin },
];

const items = testimonials.map(testimonial => (
  <Testimonial key={testimonial.image} name={testimonial.name} title={testimonial.title} rating={testimonial.rating} image={testimonial.image}
    message={testimonial.message}
  />
));

const responsive: Breakpoints = {
  1024: {
    items: 2
  }
};

const Partners: NextPage = () => {
  const carousel = useRef<AliceCarousel>(null);
  const { handleNavigation } = useCarousel(items, responsive, carousel);

  return (
    <div>
      <Head>
        <title>Scholarly Africa | Partners</title>
      </Head>
      <Navbar />
      <Box as="main">
        {/* Banner Section */}
        <Box as="section" className={classes.top_banner}>
          <VStack spacing='51px' margin='auto' maxW='530px'>
            <Text fontWeight='black' fontSize='5xl' textAlign='center' lineHeight='59px'>
              <Text as='span' color='brand.yellow'>Resell </Text>
              <Text as='span' color='brand.lime.500'>Activation Pins, </Text>
              <Text as='span' color='brand.yellow'>Make </Text>
              <Text as='span' color='brand.lime.500'>Profit</Text>
            </Text>
            <Text fontSize={20} maxW='470px' color='brand.lime.700' textAlign='center' lineHeight='28.5px' fontWeight={450}>
              Make Money by buying Activation Pins and reselling to Customers
            </Text>
            <HStack spacing={6}>
              <Button type="button" variant='solid'>
                Sign up
                <Icon as={ChevronRightIcon} ml={5} />
              </Button>
              <Button type="button" variant='outline'>
                Download App
                <Icon as={ChevronRightIcon} ml={5} />
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Steps to Become a Partner */}
        <Box as="section" bgColor='brand.nearWhite' className={classes.steps}>
          <Text as='h2' fontSize={39} fontWeight='bold' color='brand.lime.500' mb='75px' textAlign='center'>Steps to become a Partner</Text>
          <VStack spacing='93px' mb='75px'>
            {steps.map(step => (
              <Step key={step.index} index={step.index} title={step.title} description={step.description}
                icon={step.icon} direction={step.index%2 !== 0 ? 'forward' : 'reverse'}
              />
            ))}
          </VStack>
          <HStack spacing={6} justify='center'>
            <Button type="button" variant='solid'>
              Sign up
              <Icon as={ChevronRightIcon} ml={5} />
            </Button>
            <Button type="button" variant='outline'>
              Download App
              <Icon as={ChevronRightIcon} ml={5} />
            </Button>
          </HStack>
        </Box>
        
        {/* Referral Section */}
        <Box as="section" className={classes.referral}>
          <Flex align='center'>
            <Box flexBasis='51%'>
              <Image src={megaphone} alt='A megaphone' />
            </Box>
            <Spacer />
            <VStack flexBasis='35%' align='start' spacing={6}>
              <Text color='brand.lime.700' fontSize={25} fontWeight='bold'>Referral Program</Text>
              <Text color='brand.lime.700'>Earn more when you refer other partners. Each time your referral makes a sale, you earn a commission.</Text>
              <VStack w='full' align='start' spacing={0} pos='relative'>
                <Button type="button" variant='solid'>
                  See Details
                  <Icon as={ChevronRightIcon} ml={5} />
                </Button>
                <Box pos='absolute' right={0} top={41}>
                  <Image src={yellow_pattern} alt='' />
                </Box>
              </VStack>
            </VStack>
          </Flex>
        </Box>

         {/* Testimonials Section */}
         <Box as='section' bgColor='brand.nearWhite' py="93px">
          <Text mb={12} textAlign='center' color='brand.lime.700' fontSize={39} fontWeight='medium'>
            Our 5 Star Agents
          </Text>
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
      </Box>

      <Footer />
    </div>
  )
}

export default Partners;