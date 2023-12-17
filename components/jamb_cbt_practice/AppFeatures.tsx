import { Box, Flex, Icon, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import Image from "next/image";
import lady_on_yellow_turtleneck_holding_a_laptop from "../../public/lady_on_yellow_turtleneck_holding_a_laptop.webp";
import { DownloadIcon } from "@heroicons/react/solid";
import Label from "../../components/reusables/Label";
import { DesktopComputerIcon } from "@heroicons/react/outline";
import NotesIcon from "../../components/icons/NotesIcon";
import NovelsIcon from "../../components/icons/NovelsIcon";
import CustomLink from "../reusables/CustomLink";
import { trackDownloadClick } from "../../utils";

const app_features: string[] = [
  "Up-to-date past and modelled questions", "CBT practice interface", "Built-in timer feature",
  "Concise study notes on various subjects", "Detailed results breakdown", "Built-in Syllabus",
  "JAMB and Literature Novels", "CBT mode, Study mode, Mock mode, and Game mode"
];

export default function AppFeatures() {
  return (
    <Flex align='start' justify='space-between' flexDir={{base: 'column-reverse', md: 'row'}}
      gap={{base: 12, md: 0}} px={{base: 5, lg: '120px'}} py='60px' className='responsive_1440px'
    >
      <Box flexBasis='46%' pos='relative'>
        <Image src={lady_on_yellow_turtleneck_holding_a_laptop} alt='A lady on a yellow turtleneck holding a laptop' />
        <Label
          boxProps={{
            spacing: {base: 3, md: '19px'}, p: {base: 2, md: 3}, top: '30%', left: {base: 0, md: '-10%'}, borderRadius: 12,
            backdropFilter: 'blur(7px)', bg: 'rgba(255,255,255,0.8)', boxShadow: '0px 2px 47px 0px rgba(0, 0, 0, 0.05)'
          }}
          labelIcon={
            <Box bg='#00981E' borderRadius={5} px={{base: '3px', md: 1}} pt={{base: 1, md: 1.5}} pb={0}>
              <Icon as={NotesIcon} color='white' boxSize={{base: '1em', md: '1.3em'}} />
            </Box>
          }
        >
          <VStack spacing={1} align='start'>
            <Text fontWeight='medium' fontSize={12} color='brand.lime.700'>Notes</Text>
            <Text fontSize={{base: 7, md: 10}} color='brand.gray'>Curriculum-based study notes</Text>
          </VStack>
        </Label>
        <Label
          boxProps={{
            spacing: {base: 3, md: '19px'}, p: {base: 2, md: 3}, top: '55%', right: {base: 0, md: '-9%'}, borderRadius: 12,
            backdropFilter: 'blur(7px)', bg: 'rgba(255,255,255,0.8)', boxShadow: '0px 2px 47px 0px rgba(0, 0, 0, 0.05)'
          }}
          labelIcon={
            <Box bg='#0084FF' borderRadius={5} px={{base: '3px', md: 1}} pt={{base: 1, md: 1.5}} pb={0}>
              <Icon as={DesktopComputerIcon} color='white' boxSize={{base: '1em', md: '1.5em'}} />
            </Box>
          }
        >
          <VStack spacing={1} align='start'>
            <Text fontWeight='medium' fontSize={12} color='brand.lime.700'>Past Questions</Text>
            <Text fontSize={{base: 7, md: 10}} color='brand.gray' maxW='170px'>
              Past and modelled questions and answers
            </Text>
          </VStack>
        </Label>
        <Label
          boxProps={{
            spacing: {base: 3, md: '19px'}, p: {base: 2, md: 3}, bottom: 0, left: {base: 0, md: '-10%'}, borderRadius: 12,
            backdropFilter: 'blur(7px)', bg: 'rgba(255,255,255,0.8)', boxShadow: '0px 2px 47px 0px rgba(0, 0, 0, 0.05)'
          }}
          labelIcon={
            <Box bg='#EEC725' borderRadius={5} px={1} pt={{base: 1, md: 1.5}} pb={0}>
              <Icon as={NovelsIcon} color='white' boxSize={{base: '1em', md: '1.3em'}} />
            </Box>
          }
        >
          <VStack spacing={1} align='start'>
            <Text fontWeight='medium' fontSize={12} color='brand.lime.700'>Novels</Text>
            <Text fontSize={{base: 7, md: 10}} color='brand.gray' maxW='170px'>
              Recommended Literary texts
            </Text>
          </VStack>
        </Label>
      </Box>

      <VStack spacing={8} align='start' flexBasis='38%'>
        <Text as='h2' color='brand.lime.700' fontSize={31} fontWeight='bold'>
          What you get:
        </Text>
        <VStack spacing={4} align='start'>
          <UnorderedList spacing={4} pl={4} listStyleImg="url('check_icon.svg')" color='#606060'>
            {app_features.map((feature, index) => (
              <ListItem key={feature+index} fontWeight='bold' pl={3.5}>
                {feature}
              </ListItem>
            ))}
          </UnorderedList>
          <Text color='#798897' fontSize={14} fontWeight='medium' lineHeight={7}>And many more...</Text>
        </VStack>
        <CustomLink href="https://scholarly.africa/api/download?fileName=jamb-utme&platform=windows" type="button" variant="solid"
          h='76px' rounded='full' px={6} iconSpacing={4} rightIcon={<Icon as={DownloadIcon} boxSize='1.5em' />}
          onClick={() => trackDownloadClick("Scholarly JAMB CBT Practice App", "Windows", "From marketing campaign page", ["jamb-utme"], 2024)}
        >
          Download for Windows
        </CustomLink>
      </VStack>
    </Flex>
  )
}
