import Image from 'next/image';
import Link from 'next/link';
import { Flex, VStack, Text, Button, Box, HStack, Spacer, Icon } from '@chakra-ui/react';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import green_pattern from '../../public/green_pattern.svg';
import star from '../../public/star.svg';
import fan_blades from '../../public/fan_blades.svg';
import female_student from '../../public/female_student.png';
import classes from '../../styles/Home.module.css';
import { BoxWithJambIcon, BoxWithNecoIcon, BoxWithWaecIcon } from '../reusables/BoxWithIcon';
import Label from '../reusables/Label';

export default function TopBanner() {
  return (
    <Box as='section' bgColor='brand.nearWhite' className={classes.banner_container}>    
      <Flex justify='space-between' wrap={{base: 'wrap', lg: 'nowrap'}}>
        <VStack spacing={8} align='start' flexBasis={{base: '100%', lg: '50%'}} pb={{lg: 5}}>
          <Box>
            <Box display={{base: 'none', md: 'block'}}>
              <Image src={green_pattern} alt='' />
            </Box>
            <Text display={['block', 'block']} fontWeight='black' fontSize={[40, '5xl', '5xl', 40, '5xl']} lineHeight={['112%', '120.5%']}>
              <Text as='span' color='brand.yellow'>Improved </Text>
              <Text as='span' color='brand.lime.500'>Learning, </Text>
              <Text as='span' color='brand.yellow'>Better </Text>
              <Text as='span' color='brand.lime.500'>Academic Performance</Text>
            </Text>
            {/* <Text display={['block', 'none']} fontWeight='black' fontSize='5xl' textAlign={{base: 'left', md: 'center'}} lineHeight='112%'>
              <Text as='span' color='brand.yellow'>Learning </Text>
              <Text as='span' color='brand.lime.500'>is simple with </Text>
              <Text as='span' color='brand.yellow'>Scholarly </Text>
            </Text> */}
          </Box>
          <Text color='brand.lime.700' fontSize={{base: 16, lg: 20}} lineHeight='144%' mb={{base: 4, lg: 0}}>
            Scholarly organizes the tools and resources needed to get better grades in an easy to use app.
          </Text>
          <Link href='/get-started'>
            <a>
              <Button type='button' variant='solid'>
                Get Started
                <Icon as={ArrowNarrowRightIcon} mt={0.48} ml={15} />
              </Button>
            </a>
          </Link>
          <HStack spacing={4} display={{base: 'none', md: 'flex'}}>
            <BoxWithJambIcon />
            <BoxWithWaecIcon />
            <BoxWithNecoIcon />
          </HStack>
        </VStack>

        <Spacer />

        <Box pos='relative' flexBasis={{base: '100%', lg: '48%'}} mt={{base: 12, lg: 0}} className={classes.banner_media}>
          <Box fontSize={0}>
            <Image className={classes.female_student} src={female_student} alt="Young African Female Student with a face mask holding her books" />
          </Box>
          <Box display={{base: 'none', md: 'block'}} pos='absolute' top={{base: '27%', lg: 100, xl: 140}} right={{base: 0, lg: -4}} zIndex={0}>
            <Image src={star} alt="" />
          </Box>
          <Box display={{base: 'block', md: 'none'}} pos='absolute' top={['10%', '18%']} left={['7%', '13%']} zIndex={0}>
            <Image src={fan_blades} alt="" />
          </Box>
          <Label labelText='Jamb Practice' labelIcon={<BoxWithJambIcon/>} box={{top: ['2%', '6%', '6%', 160], right: {base: '50%', lg: 303}}} />
          <Label labelText='WAEC Questions' labelIcon={<BoxWithWaecIcon/>} box={{bottom: {base: '37%', md: '8%', lg: 5}, right: {base: '10%', md: 1}}} />
        </Box>
      </Flex>
    </Box>
  )
}
