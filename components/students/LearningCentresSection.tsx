import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Flex, Icon, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import LearningCentres from '../reusables/LearningCentres';
import lady_on_headphones_typing from '../../public/lady_on_headphones_typing.webp';
import green_pattern from '../../public/green_pattern.svg';

export default function LearningCentresSection() {
  const { isOpen: isLearningCentresOpen, onOpen: openLearningCentres, onClose: closeLearningCentres } = useDisclosure();

  return (
    <>
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

      <LearningCentres isOpen={isLearningCentresOpen} onClose={closeLearningCentres} />
    </>
  )
}
