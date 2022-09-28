import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Icon, Text, VStack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import exam_apps from '../../public/exam_apps.webp';

export default function ExamApps() {
  return (
    <VStack spacing={4} align={{base: "start", md: "center"}} h="100%">
      <Box fontSize={0} pos="relative">
        <Box display={{base: "none", md: "block"}} pos="absolute" top="-121px" left={{base: -5, lg: "-120px"}} w="100vw" h="calc(100% + 121px)" bg="#F5F6F6"></Box>
        <Image src={exam_apps} alt="" priority />
      </Box>
      <VStack align='start' justify='space-between' h='100%' maxW={{base: '100%', md: '89%'}}>
        <Box mb={4}>
          <Text as='h1' color='brand.lime.700' mb={3} fontSize={[23, 25]} fontWeight='bold'>Over 30+ Exam Apps</Text>
          <Text color='brand.lime.700' fontSize={16}>Download apps for UTME, WASSCE, NECO, Post UTME, BECE etc.</Text>
        </Box>
        <Link href='/apps/android'>
          <a>
            <Button type='button' variant='solid' iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}>
              See Apps
            </Button>
          </a>
        </Link>
      </VStack>
    </VStack>
  )
}
