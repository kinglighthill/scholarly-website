import { Box, Flex, VStack, Text, Button, Spacer, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import scholarly_students_demo from '../../public/scholarly_students_demo.png';
import classes from '../../styles/Home.module.css';
import { BoxWithJambIcon, BoxWithWaecIcon } from '../reusables/BoxWithIcon';
import Label from '../reusables/Label';
import { ChevronRightIcon } from '@heroicons/react/solid';

export default function Students() {
  return (
    <Box as='section' className={classes.students_section}>
      <Flex align='center'>
        <Box pos='relative' flexBasis='48%'>
          <Image src={scholarly_students_demo} alt='Demo of Scholarly for Students' />
          <Label labelText='Jamb Practice' labelIcon={<BoxWithJambIcon/>} box={{top: 6, left: -5}} />
          <Label labelText='Detailed result' labelIcon={<BoxWithWaecIcon/>} box={{bottom: '-40px', right: '-60px'}} />
        </Box>

        <Spacer />

        <VStack spacing={9} flexBasis='40%' align='start'>
          <Box pos='relative'>
            <Text as='h2' color='brand.lime.700' fontWeight='bold' fontSize={39}>For Students</Text>
            <Box pos='absolute' bottom='2px' w='20%' borderTop='4px solid' borderColor='brand.yellow' borderRadius={2}></Box>
          </Box>
          <Text color='brand.lime.700' fontSize={20}>
            Over 1 Million students use over 30 scholarly apps to access high quality academic resource and content.
          </Text>
          <Button type='button' variant='solid'>
            See Apps
            <Icon as={ChevronRightIcon} ml={5} />
          </Button>
        </VStack>
      </Flex>
    </Box>
  )
}
