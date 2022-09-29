import Image from "next/image";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Box, VStack, Text, Icon, HStack, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Testimonials, { Testimonial } from '../../components/reusables/Testimonials';
import TopBanner from '../../components/partners/TopBanner';
import classes from "../../styles/Partners.module.css";
import sign_up from "../../public/sign_up.svg";
import verify_identity from "../../public/verify_identity.svg";
import find_customers from "../../public/find_customers.svg";
import buy_pin from "../../public/buy_pin.svg";
import sell_pin from "../../public/sell_pin.svg";
import megaphone from "../../public/megaphone.webp";
import megaphone2 from "../../public/megaphone2.webp";
import yellow_pattern from "../../public/yellow_pattern.svg";
import Step from "../../components/partners/Step";
import { StepType } from "../../types/pages/partners";
import PartnerSignup from '../../components/reusables/PartnerSignup';
import Page from '../../components/reusables/Page';
import { fetchContent } from '../../services/fetch_content.service';
import { TestimonialProps } from '../../types/components/reusables/testimonials';
import CustomLink from '../../components/reusables/CustomLink';

const steps: StepType[] = [
  { index: 1, title: "Sign up", description: "Create an account on the site or with the app.", icon: sign_up },
  { index: 2, title: "Verify identity", description: "Provide your BVN so that we can better understand who you are.", icon: verify_identity },
  { index: 3, title: "Find customers", description: "Search for students around you to sell and market the app to.", icon: find_customers },
  { index: 4, title: "Buy your first pin", description: "Buy a pin from the app at discounted rate.", icon: buy_pin },
  { index: 5, title: "Sell your first pin", description: "When you sell a pin to a student, you earn profit.", icon: sell_pin },
];

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetchContent('getTestimonials/testimonials/partner');
    const content = await response.json();
    // Pass content to the page via props  
    return { props: { data: content.data } }
  }
  catch (error) {
    console.log('An error occurred: ' + error);
    return { props: { error: true } }
  }
}

const Partners: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = props;

  const testimonials = data.map((testimonial: TestimonialProps, index: number) => (
    <Testimonial key={testimonial.full_name + index+1} full_name={testimonial.full_name} user_type={testimonial.user_type}
      rating={testimonial.rating} profile_pic_sm={testimonial.profile_pic_sm} content={testimonial.content}
    />
  ));

  return (
    <Page title='Scholarly For Partners - Resell Activation Pins, Make Profit' description='Sign up to become a certified Scholarly partner. Scholarly partners are licensed to distribute Scholarly apps and software while they make profit in turn.'>
      {/* Banner Section */}
      <TopBanner openSignUp={onOpen} />

      {/* Steps to Become a Partner */}
      <Box as="section" bgColor='brand.nearWhite' className={classes.steps}>
        <Text as='h2' fontSize={[25, 39]} fontWeight='bold' color='brand.lime.500' mb={[8, '75px']}
          textAlign='center' className='responsive_1440px'
        >
          Steps to become a Partner
        </Text>
        <VStack spacing={[9, '93px']} mb={[12, '75px']} className='responsive_1440px'>
          {steps.map(step => (
            <Step key={step.index} index={step.index} title={step.title} description={step.description}
              icon={step.icon} direction={step.index%2 !== 0 ? 'forward' : 'reverse'}
            />
          ))}
        </VStack>
        <HStack spacing={[4, 6]} justify='center'>
          {/* <Button type="button" variant='solid' onClick={onOpen} iconSpacing={{md: 5}} rightIcon={<Icon as={ChevronRightIcon} display={['none', 'inline-block']} />}>
            Sign up
          </Button> */}
          {/* <CustomLink href='/apps/android' type="button" variant='outline' iconSpacing={{md: 5}} rightIcon={<Icon as={ChevronRightIcon} display={['none', 'inline-block']} />}>
            Download App
          </CustomLink> */}
        </HStack>
      </Box>
      
      {/* Referral Section */}
      <Box as="section" className={classes.referral}>
        <Flex align='center' wrap={['wrap', 'nowrap']} className='responsive_1440px'>
          <Box flexBasis='49%' display={['none', 'initial']}>
            <Image src={megaphone} alt='A megaphone' />
          </Box>
          <Box flexBasis='100%' mb={10} display={['initial', 'none']} textAlign='center' className={classes.megaphone_mobile} >
            <Image src={megaphone2} alt='A megaphone' />
          </Box>
          <Spacer />
          <VStack flexBasis={['100%', '49%', '40%', '35%']} align='start' spacing={6}>
            <Text color='brand.lime.700' fontSize={25} fontWeight='bold'>Referral Program</Text>
            <Text color='brand.lime.700'>Earn more when you refer other partners. Each time your referral makes a sale, you earn a commission.</Text>
            <VStack w='full' align='start' spacing={0} pos='relative'>
              <CustomLink href='/partners/referral' type="button" variant='solid' iconSpacing={5} rightIcon={<Icon as={ChevronRightIcon} />}>
                See Details
              </CustomLink>
              <Box pos='absolute' right={0} top={41} display={{base: 'none', md: 'initial'}}>
                <Image src={yellow_pattern} alt='' />
              </Box>
            </VStack>
          </VStack>
        </Flex>
      </Box>

      {/* Testimonials Section */}
      <Box as='section' bgColor='brand.nearWhite' py="93px">
        <Text mb={{base: '60px', md: 12}} textAlign='center' color='brand.lime.700' fontSize={[25, 39]} fontWeight='medium'
          className='responsive_1440px'
        >
          Our 5 Star Agents
        </Text>
        <Testimonials testimonials={testimonials} />
      </Box>

      <PartnerSignup isOpen={isOpen} onClose={onClose} />
    </Page>
  )
}

export default Partners;