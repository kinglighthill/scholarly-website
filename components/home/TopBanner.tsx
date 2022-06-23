import { Flex, VStack, Text, Button, Box, HStack, Spacer, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import green_pattern from '../../public/green_pattern.svg';
import star from '../../public/star.svg';
import female_student from '../../public/female_student.png';
import classes from '../../styles/Home.module.css';
import { BoxWithJambIcon, BoxWithNecoIcon, BoxWithWaecIcon } from '../reusables/BoxWithIcon';
import Label from '../reusables/Label';

export default function TopBanner() {
  return (
    <Box as='section' bgColor='brand.nearWhite' className={classes.banner_container}>    
      <Flex justify='space-between'>
        <VStack spacing={8} align='start' flexBasis='44%'>
          <Box>
            <Image src={green_pattern} alt='' />
            <Text fontWeight='black' fontSize='5xl' lineHeight='59px'>
              <Text as='span' color='brand.yellow'>Improved </Text>
              <Text as='span' color='brand.lime.500'>Learning, </Text>
              <Text as='span' color='brand.yellow'>Better </Text>
              <Text as='span' color='brand.lime.500'>Academic Performance</Text>
            </Text>
          </Box>
          <Text color='brand.lime.700' fontSize={20} lineHeight='28.5px'>
            Scholarly organizes the tools and resources needed to get better grades in an easy to use app.
          </Text>
          <Button type='button' variant='solid'>
            Get Started
            <Icon as={ArrowNarrowRightIcon} marginTop={0.48} ml={15} />
          </Button>
          <Box>
            <HStack spacing={4}>
              <BoxWithJambIcon />
              <BoxWithWaecIcon />
              <BoxWithNecoIcon />
            </HStack>
          </Box>
        </VStack>

        <Spacer />

        <Box pos='relative' flexBasis='48%' maxH={550} className={classes.banner_media}>
          <Image className={classes.female_student} src={female_student} alt="Young African Female Student with a face mask holding her books" />
          <Box pos='absolute' top={100} right={-4} zIndex={0}>
            <Image src={star} alt="" />
          </Box>
          <Label labelText='Jamb Practice' labelIcon={<BoxWithJambIcon/>} box={{top: 160, right: 303}} />
          <Label labelText='WAEC Questions' labelIcon={<BoxWithWaecIcon/>} box={{bottom: 5, right: 1}} />
        </Box>
      </Flex>
    </Box>
  )
}
