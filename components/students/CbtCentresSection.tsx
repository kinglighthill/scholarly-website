import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Icon, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import CbtCentres from '../reusables/CbtCentres';
import cbt_centre from '../../public/cbt_centre.webp';

export default function CbtCentresSection() {
  const { isOpen: isCbtCentresOpen, onOpen: openCbtCentres, onClose: closeCbtCentres } = useDisclosure();

  return (
    <>
    
      <VStack spacing={4} align={{base: "start", md: "center"}} h="100%">
        <Box fontSize={0}>
          <Image src={cbt_centre} alt="" />
        </Box>
        <VStack align='start' justify='space-between' h='100%' maxW={{base: '100%', md: '89%'}}>
          <Box mb={4}>
            <Text as='h1' color='brand.lime.700' mb={3} fontSize={[23, 25]} fontWeight='bold'>CBT Centres</Text>
            <Text color='brand.lime.700' fontSize={16}>Find Scholarly approved CBT centers nationwide to practice for your next exam.</Text>
          </Box>
          {/* When cbt centres are available, remove the Link and 'a' tags and uncomment the onClick handler */}
          <Link href='/cbt-centres'>
            <a>
              <Button type='button' variant='solid' iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}
                // onClick={openCbtCentres}
              >
                Find Centres
              </Button>
            </a>
          </Link>
        </VStack>
      </VStack>

      <CbtCentres isOpen={isCbtCentresOpen} onClose={closeCbtCentres} />
    </>
  )
}
