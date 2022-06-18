import { Box, Button, Flex, HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { PhoneIcon, PlusIcon } from '@heroicons/react/outline';
import classes from '../../styles/components/Home.module.css';
import female_professional_working from '../../public/female_professional_working.png';

export default function Business() {
  return (
    <Box as="section" className={classes.business_section}>
      <Flex align='center'>
        <Box flexBasis='45%'>
          <Image src={female_professional_working} alt='A young female professional working in a cafe' />
        </Box>
        <Spacer />
        <VStack spacing={10} flexBasis='40%' align='start'>
          <Box pos='relative'>
            <Text as='h2' color='brand.lime.700' fontWeight='bold' fontSize={39}>For Business</Text>
            <Box pos='absolute' bottom='2px' w='20%' borderTop='4px solid' borderColor='brand.lime.500' borderRadius={2}></Box>
          </Box>
          <Text color='brand.lime.700' fontSize={20}>
            Own a School, CBT center or Cyber cafe? Run your business efficiently with our enterprise software while you make more money.
          </Text>
          <HStack spacing={4}>
            <Button type='button' variant='solid'>
              Contact us
              <Icon as={PhoneIcon} ml='15px' />
            </Button>
            <Button type='button' variant='outline'>
              Request a demo
              <Icon as={PlusIcon} ml='13px' />
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  )
}
