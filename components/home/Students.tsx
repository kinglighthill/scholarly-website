import Image from 'next/image';
import Link from 'next/link';
import { Box, Flex, VStack, Text, Button, Spacer, Icon } from '@chakra-ui/react';
import scholarly_students_demo from '../../public/scholarly_students_demo.webp';
import subtract from '../../public/subtract.svg';
import classes from '../../styles/Home.module.css';
import { BoxWithJambIcon, BoxWithWaecIcon } from '../reusables/BoxWithIcon';
import Label from '../reusables/Label';
import { ChevronRightIcon } from '@heroicons/react/solid';

export default function Students() {
  return (
    <Box as='section' className={classes.students_section}>
      <Flex align='center' wrap={{base: 'wrap', md: 'nowrap'}} flexDir={{base: 'column-reverse', md: 'row'}}>
        <Box pos='relative' flexBasis={{base: '100%', md: '48%'}}>
          <Image src={scholarly_students_demo} alt='Demo of Scholarly for Students' priority />
          {/* <Label labelText='Jamb Practice' labelIcon={<BoxWithJambIcon/>} box={{display: {base: 'none', md: 'block'}, top: 6, left: -5}} />
          <Label labelText='Detailed result' labelIcon={<BoxWithWaecIcon/>} box={{display: {base: 'none', md: 'block'}, bottom: '-40px', right: '-60px'}} /> */}
        </Box>

        <Spacer />

        <Box display={{base: 'block', md: 'none'}} my='13px'>
          <Image src={subtract} alt='' />
        </Box>

        <VStack spacing={{base: 8, md: 9}} flexBasis={{base: '100%', md: '40%'}} align={{base: 'center', md: 'start'}}>
          <Box pos='relative' w={{base: 'full', md: 'max'}}>
            <Text as='h2' color='brand.lime.700' fontWeight='bold' fontSize={[25, 31, 39]} textAlign={{base: 'center', md: 'left'}}>For Students</Text>
            <Box display={{base: 'none', md: 'block'}} pos='absolute' bottom='2px' w='20%' borderTop='4px solid' borderColor='brand.yellow' borderRadius={2}></Box>
          </Box>
          <Text color='brand.lime.700' fontSize={{base: 16, md: 20}} textAlign={{base: 'center', md: 'left'}}>
            Over 1 Million students use over 30 scholarly apps to access high quality academic resource and content.
          </Text>
          <Link href='/apps/android'>
            <a>
              <Button type='button' variant='solid' iconSpacing={5} rightIcon={<Icon as={ChevronRightIcon} mt={0.5} />}>
                See Apps
              </Button>
            </a>
          </Link>
        </VStack>
      </Flex>
    </Box>
  )
}
