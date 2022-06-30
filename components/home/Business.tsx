import { Box, Button, Flex, HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { PhoneIcon, PlusIcon } from '@heroicons/react/outline';
import classes from '../../styles/Home.module.css';
import female_professional_working from '../../public/female_professional_working.png';

export default function Business() {
  return (
    <Box as="section" className={classes.business_section}>
      <Flex align='center' wrap={{base: 'wrap', md: 'nowrap'}}>
        <Box fontSize={0} flexBasis={{base: '100%', md: '45%'}}>
          <Image src={female_professional_working} alt='A young female professional working in a cafe' />
        </Box>
        <Spacer />
        <VStack spacing={{base: 9, md: 10}} align='start' flexBasis={{base: '100%', md: '40%'}} px={{base: 8, md: 0}} mt={{base: 9, md: 0}}>
          <Box pos='relative'>
            <Text as='h2' color='brand.lime.700' fontWeight='bold' fontSize={{base: 31, md: 39}}>For Business</Text>
            <Box display={{base: 'none', md: 'block'}} pos='absolute' bottom='2px' w='20%' borderTop='4px solid' borderColor='brand.lime.500' borderRadius={2}></Box>
          </Box>
          <Text color='brand.lime.700' fontSize={{base: 16, md: 20}}>
            Own a School, CBT center or Cyber cafe? Run your business efficiently with our enterprise software while you make more money.
          </Text>
          <HStack spacing={4}>
            <Button type='button' variant='solid'>
              Contact us
              <Icon as={PhoneIcon} ml='15px' display={{base: 'none', md: 'inline-block'}} />
            </Button>
            <Button type='button' variant='outline'>
              Request a demo
              <Icon as={PlusIcon} ml='13px' display={{base: 'none', md: 'inline-block'}} />
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  )
}
