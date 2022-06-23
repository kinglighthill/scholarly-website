import { Flex, VStack, Text, Button, Box, HStack, Spacer, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import green_pattern from '../../public/green_pattern.svg';
import { BoxWithJambIcon, BoxWithNecoIcon, BoxWithWaecIcon } from '../reusables/BoxWithIcon';
import Label from '../reusables/Label';

export default function TopBanner() {
  return (
    <Box as='section' bgColor='white'>    
      <Flex justify='space-between' pl="120px">
        <VStack spacing='44px' align='start' flexBasis='40%' py={12}>
          <VStack spacing={8} align='start'>
            <Image src={green_pattern} alt='' />
            <Text fontWeight='black' fontSize='5xl' lineHeight='70px'>
              <Text as='span' color='brand.yellow'>Smash </Text>
              <Text as='span' color='brand.lime.500'>any </Text>
              <Text as='span' color='brand.yellow'>Exam </Text>
            </Text>
            <Box>
              <Text color='brand.lime.700' fontSize={20} fontWeight="medium" lineHeight='28.5px' mb={2.5}>
                Notes, Past Questions, Syllabus and all your Study Materials in one App
              </Text>
              <Text color='brand.lime.500' fontSize={20} fontWeight="medium" lineHeight='28.5px'>
                Available for both Andriod and Desktop
              </Text>
            </Box>
          </VStack>
          <HStack spacing={4}>
            <Button type='button' variant='solid'>
              Download App
              <Icon as={ArrowNarrowRightIcon} marginTop={0.48} ml={15} />
            </Button>
            <Button type='button' variant='outline'>
              Buy Activation Pin
              <Icon as={ArrowNarrowRightIcon} marginTop={0.48} ml={15} />
            </Button>
          </HStack>
          <Box>
            <HStack spacing={4}>
              <BoxWithJambIcon />
              <BoxWithWaecIcon />
              <BoxWithNecoIcon />
            </HStack>
          </Box>
        </VStack>

        <Spacer />

        <Box pos='relative' flexBasis='55%' bgImage='/female_student_studying_with_laptop.png' bgSize='cover' bgRepeat='no-repeat'>
          <Label labelText='Jamb Practice' labelIcon={<BoxWithJambIcon/>} box={{top: '38%', left: '15%'}} />
          <Label labelText='WAEC Questions' labelIcon={<BoxWithWaecIcon/>} box={{bottom: '25%', right: '22%'}} />
        </Box>
      </Flex>
    </Box>
  )
}
