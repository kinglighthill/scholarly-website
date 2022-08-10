import { Flex, VStack, Text, Button, Box, HStack, Spacer, Icon, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import green_pattern from '../../public/green_pattern.svg';
import { BoxWithJambIcon, BoxWithNecoIcon, BoxWithWaecIcon } from '../reusables/BoxWithIcon';
import Label from '../reusables/Label';
import BuyPin from '../reusables/BuyPin';
import CartProvider from '../../context/CartContext';

export default function TopBanner() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Box as='section' bgColor='white'>    
      <Flex justify='space-between' flexWrap={{base: 'wrap', lg: 'nowrap'}}>
        <VStack spacing='44px' align='start' flexBasis={{base: '100%', lg: '42%'}} pl={[5, "55px", "120px"]} pr={[5, "55px", "120px", 0]} pt={['60px', 12]} pb={[6, 12]}>
          <VStack spacing={8} align='start'>
            <Box fontSize={0} display={{base: 'none', lg: 'block'}}>
              <Image src={green_pattern} alt='' />
            </Box>
            <Text fontWeight='black' fontSize='5xl' lineHeight={['120%', '144%']} mt={['0 !important', 'inherit']}>
              <Text as='span' color='brand.yellow'>Smash </Text>
              <Text as='span' color='brand.lime.500'>any </Text>
              <Text as='span' color='brand.yellow'>Exam </Text>
            </Text>
            <Box>
              <Text color='brand.lime.700' fontSize={[16, 20]} fontWeight="medium" lineHeight='144%' mb={2.5}>
                Notes, Past Questions, Syllabus and all your Study Materials in one App
              </Text>
              <Text color='brand.lime.500' fontSize={[16, 20]} fontWeight="medium" lineHeight='144%'>
                Available for both Android and Desktop
              </Text>
            </Box>
          </VStack>
          <HStack spacing={4}>
            <Button type='button' variant='solid' iconSpacing={15} rightIcon={<Icon as={ArrowNarrowRightIcon} mt={0.5} />}>
              Download App
            </Button>
            <Button type='button' variant='outline' display={['none', 'inline-flex']} onClick={onOpen} iconSpacing={15} rightIcon={<Icon as={ArrowNarrowRightIcon} />}>
              Buy Activation Pin
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

        <Box pos='relative' display={['block', 'none', 'none', 'block']} flexBasis={{base: '100%', lg: '55%'}} h={{base: '340px', lg: 'auto'}} bgImage='/female_student_studying_with_laptop.png' bgSize='cover' bgRepeat='no-repeat'>
          <Label labelText='Jamb Practice' labelIcon={<BoxWithJambIcon/>} box={{top: ['10%','38%'], left: ['5%','15%']}} />
          <Label labelText='WAEC Questions' labelIcon={<BoxWithWaecIcon/>} box={{bottom: '25%', right: '22%'}} />
        </Box>
      </Flex>

      <CartProvider>
        <BuyPin isOpen={isOpen} onClose={onClose} />
      </CartProvider>
    </Box>
  )
}
