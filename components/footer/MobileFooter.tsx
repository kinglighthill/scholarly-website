import Link from 'next/link';
import Image from 'next/image';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Icon, Link as ChakraLink, List, ListItem, Text, VStack } from '@chakra-ui/react';
import { PhoneIcon, AtSymbolIcon } from '@heroicons/react/outline';
import facebook from '../../public/facebook.svg';
import twitter from '../../public/twitter.svg';
import linkedin from '../../public/linkedin.svg';
import instagram from '../../public/instagram.svg';
import whatsapp from '../../public/whatsapp.svg';
import classes from '../../styles/components/Footer.module.css';

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
                <Link href='/apps/android'>Mobile Apps</Link>
              </ListItem> 
              <ListItem>
                <Link href='/apps/desktop'>Desktop Apps</Link>
              </ListItem> 
              <ListItem>
                <Link href='/partners'>Partners App</Link>
              </ListItem> 
              <ListItem>
                <Link href='/business'>Enterprise Software</Link>
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
                <Link href='/about'>About</Link>
              </ListItem> 
              <ListItem>
                <Link href='/faqs'>FAQs</Link>
              </ListItem> 
              <ListItem>
                <Link href='/contact-us'>Contact us</Link>
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
                <Link href='/terms'>Terms</Link>
              </ListItem> 
              <ListItem>
                <Link href='/privacy'>Privacy</Link>
              </ListItem> 
              <ListItem>
                <Link href='/security'>Security</Link>
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
                      <Link href='tel:+23490-6170-1939' passHref>
                        <ChakraLink>+23490-6170-1939</ChakraLink>
                      </Link>
                    </HStack>
                    <HStack spacing={1.5} color='brand.yellow'>
                      <Icon as={AtSymbolIcon} />
                      <Link href='mailto:scholarlyafrica@gmail.com' passHref>
                        <ChakraLink>scholarlyafrica@gmail.com</ChakraLink>
                      </Link>
                    </HStack>
                  </Box>
                  <Text color='white' fontSize={13} textAlign='right'>Samuelson close, near FGC. Independence Layout, Enugu, Nigeria</Text>
                </VStack>
              </Box>
              <HStack spacing={4}>
                <a href='https://facebook.com/scholarlyng' target="blank" aria-label='Visit our facebook page'>
                  <Image src={facebook} alt='Facebook Icon' />
                </a>
                <a href='https://twitter.com/scholarlyng' target="blank" aria-label='Visit our twitter handle'>
                  <Image src={twitter} alt='Twitter Icon' />
                </a>
                <a href='https://www.linkedin.com/company/scholarlyafrica/' target="blank" aria-label='Visit our linkedin page'>
                  <Image src={linkedin} alt='LinkedIn Icon' />
                </a>
                <a href='https://www.instagram.com/scholarlyng/' target="blank" aria-label='Visit our instagram page'>
                  <Image src={instagram} alt='Instagram Icon' />
                </a>
                <a href='https://wa.me/+2349061701939' target="blank" aria-label='Send us a message on Whatsapp'>
                  <Image src={whatsapp} alt='WhatsApp Icon' />
                </a>
              </HStack>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Text color='white' fontSize={13}>Copyright 2020 Scholarly educational software, Inc. All Rights reserved</Text>
    </>
  )
}
