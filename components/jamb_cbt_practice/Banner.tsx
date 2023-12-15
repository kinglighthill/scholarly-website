import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { DownloadIcon } from "@heroicons/react/outline";
import CustomLink from "../reusables/CustomLink";
import Slider from "./Slider";
import { ChildrenWithDownloadButton } from "../../pages/jamb-cbt-practice-software-2024";

export default function Banner({ trackDownloadClick }: ChildrenWithDownloadButton) {
  return (
    <Box as='section' bg='brand.nearWhite' px={{base: 5, md: 0}} py={{base: '82px', md: '120px'}}>
      <Flex justify='space-between' align='center' flexWrap={{base: 'wrap', md: 'nowrap'}} className='responsive_1440px'>
        <VStack spacing={8} align='start' flexBasis={{base: '100%', md: '27%'}} ml={{base: 0, md: '120px'}}>
          <Text color='brand.lime.700' fontSize={31} fontWeight='bold'>2024 JAMB CBT Practice Software</Text>
          <Text color='brand.lime.700' fontWeight='bold'>
            Familiar with JAMB CBT Exams? Use this software to simulate actual exam experience
          </Text>
          <CustomLink href="https://scholarly.africa/api/download?fileName=jamb-utme&platform=windows" type="button" variant="solid"
            h='76px' rounded='full' px={6} iconSpacing={4} rightIcon={<Icon as={DownloadIcon} boxSize='1.5em' />}
            onClick={trackDownloadClick}
          >
            Download for Windows
          </CustomLink>
        </VStack>
        <Box flexBasis={{base: '100%', md: '55%'}} maxW={{base: '100%', md: '55%'}}
          pos='relative' mt={{base: '70px', md: 0}}
        >
          <Box bg='linear-gradient(90deg, #F5F6F6 0%, rgba(245, 246, 246, 0.00) 100%)'
            pos='absolute' w={{base: '100px', md: '170px'}} h='100%' zIndex={1} left={-1}
          ></Box>
          <Slider />
          <Box  bg='linear-gradient(90deg, rgba(245, 246, 246, 0.00) 0%, #F5F6F6 100%)'
            pos='absolute' w={{base: '150px', md: '293px'}} h='100%' zIndex={1} top={0} right={{base: -1, md: 0}}
          ></Box>
        </Box>
      </Flex>
    </Box>
  )
}
