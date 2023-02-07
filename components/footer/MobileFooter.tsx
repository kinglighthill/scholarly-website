import Image from 'next/image';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Icon, Link as ChakraLink, List, ListItem, Text, VStack } from '@chakra-ui/react';
import { PhoneIcon, AtSymbolIcon } from '@heroicons/react/outline';
import facebook from '../../public/facebook.svg';
import twitter from '../../public/twitter.svg';
import linkedin from '../../public/linkedin.svg';
import instagram from '../../public/instagram.svg';
import whatsapp from '../../public/whatsapp.svg';
import classes from '../../styles/components/Footer.module.css';
import CustomLink from '../reusables/CustomLink';

export default function MobileFooter() {
  return (
    <>
      <Accordion w='full' mb={6} allowMultiple defaultIndex={[0]} className={classes.accordion}>
        <AccordionItem mb={7} pb={10} className={classes.accordion_item}>
          <h2>
            <AccordionButton p={0} _hover={{bg: 'none'}}>
              <Box flex='1' textAlign='left' color='white' fontSize={20}>Products</Box>
              <AccordionIcon textAlign='right' color='white' />
            </AccordionButton>
          </h2>
          <AccordionPanel pt={5} pb={0} px={0}>
            <List spacing={6} color='white' fontWeight='light'>
              <ListItem>
                <CustomLink href='/apps/android' prefetch={false}>Mobile Apps</CustomLink>
              </ListItem> 
              <ListItem>
                <CustomLink href='/apps/desktop' prefetch={false}>Desktop Apps</CustomLink>
              </ListItem> 
              <ListItem>
                <CustomLink href='/affiliates' prefetch={false}>Affiliates App</CustomLink>
              </ListItem> 
              <ListItem>
                <CustomLink href='/business' prefetch={false}>Enterprise Software</CustomLink>
              </ListItem> 
            </List>
          </AccordionPanel>
        </AccordionItem>
        
        <AccordionItem mb={7} pb={10} className={classes.accordion_item}>
          <h2>
            <AccordionButton p={0} _hover={{bg: 'none'}}>
              <Box flex='1' textAlign='left' color='white' fontSize={20}>Company</Box>
              <AccordionIcon textAlign='right' color='white' />
            </AccordionButton>
          </h2>
          <AccordionPanel pt={5} pb={0} px={0}>
            <List spacing={6} color='white' fontWeight='light'>
              <ListItem>
                <CustomLink href='/about' prefetch={false}>About</CustomLink>
              </ListItem> 
              <ListItem>
                <CustomLink href='/faqs' prefetch={false}>FAQs</CustomLink>
              </ListItem> 
              <ListItem>
                <CustomLink href='/contact-us' prefetch={false}>Contact us</CustomLink>
              </ListItem> 
            </List>
          </AccordionPanel>
        </AccordionItem>
        
        <AccordionItem mb={7} pb={10} className={classes.accordion_item}>
          <h2>
            <AccordionButton p={0} _hover={{bg: 'none'}}>
              <Box flex='1' textAlign='left' color='white' fontSize={20}>Legal</Box>
              <AccordionIcon textAlign='right' color='white' />
            </AccordionButton>
          </h2>
          <AccordionPanel pt={5} pb={0} px={0}>
            <List spacing={6} color='white' fontWeight='light'>
              <ListItem>
                <CustomLink href='/terms' prefetch={false}>Terms</CustomLink>
              </ListItem> 
              <ListItem>
                <CustomLink href='/privacy' prefetch={false}>Privacy</CustomLink>
              </ListItem> 
            </List>
          </AccordionPanel>
        </AccordionItem>
        
        <AccordionItem pb={9} className={classes.accordion_item}>
          <h2>
            <AccordionButton p={0} _hover={{bg: 'none'}}>
              <Box flex='1' textAlign='left' color='white' fontSize={20}>Reach us via</Box>
              <AccordionIcon textAlign='right' color='white' />
            </AccordionButton>
          </h2>
          <AccordionPanel pt={5} pb={0} px={0}>
            <VStack spacing={6}>
              <Box w='full' p='25px 14px' borderRadius='30px 0' background='rgba(255,255,255,0.2)'>
                <VStack spacing='26px'>
                  <Box>
                    <HStack spacing={1.5} color='white'>
                      <Icon as={PhoneIcon} />
                      <CustomLink href='tel:+23470-1739-9124'>+23470-1739-9124</CustomLink>
                    </HStack>
                    <HStack spacing={1.5} color='brand.yellow'>
                      <Icon as={AtSymbolIcon} />
                      <CustomLink href='mailto:info@scholarly.africa'>info@scholarly.africa</CustomLink>
                    </HStack>
                  </Box>
                  <Text color='white' fontSize={13} textAlign='right'>5, Samuelson Close, Isiuzo Street, Independence Layout, Enugu, Nigeria</Text>
                </VStack>
              </Box>
              <HStack spacing={4}>
                <ChakraLink href='https://facebook.com/scholarlyng' isExternal aria-label='Visit our facebook page'>
                  <Image src={facebook} alt='Facebook Icon' />
                </ChakraLink>
                <ChakraLink href='https://twitter.com/scholarlyng' isExternal aria-label='Visit our twitter handle'>
                  <Image src={twitter} alt='Twitter Icon' />
                </ChakraLink>
                <ChakraLink href='https://www.linkedin.com/company/scholarlyafrica/' isExternal aria-label='Visit our linkedin page'>
                  <Image src={linkedin} alt='LinkedIn Icon' />
                </ChakraLink>
                <ChakraLink href='https://www.instagram.com/scholarlyng/' isExternal aria-label='Visit our instagram page'>
                  <Image src={instagram} alt='Instagram Icon' />
                </ChakraLink>
                <ChakraLink href='https://wa.me/+2349061701939' isExternal aria-label='Send us a message on Whatsapp'>
                  <Image src={whatsapp} alt='WhatsApp Icon' />
                </ChakraLink>
              </HStack>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Text color='white' fontSize={13}>Copyright 2020 Scholarly educational software, Inc. All Rights reserved</Text>
    </>
  )
}
