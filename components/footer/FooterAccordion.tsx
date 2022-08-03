import Link from 'next/link';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, HStack, Icon, List, ListItem, Text, VStack } from '@chakra-ui/react';
import classes from '../../styles/components/Footer.module.css';

export default function FooterAccordion() {
  return (
    <>
      <Accordion w='full' mb={4} allowMultiple defaultIndex={[0]} className={classes.accordion}>
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
                <Link href='/'>Mobile Apps</Link>
              </ListItem> 
              <ListItem>
                <Link href='/'>Desktop Apps</Link>
              </ListItem> 
              <ListItem>
                <Link href='/'>Partners App</Link>
              </ListItem> 
              <ListItem>
                <Link href='/'>Enterprise Software</Link>
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
        
        <AccordionItem pb={9} className={classes.accordion_item}>
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
      </Accordion>

      <Text color='white' fontSize={13}>Copyright 2020 Scholarly educational software, Inc. All Rights reserved</Text>
    </>
  )
}
