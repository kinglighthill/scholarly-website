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
              <ListItem>Mobile Apps</ListItem>
              <ListItem>Desktop Apps</ListItem>
              <ListItem>Partners App</ListItem>
              <ListItem>Enterprise Software</ListItem>
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
              <ListItem>About</ListItem>
              <ListItem>FAQs</ListItem>
              <ListItem>Contact us</ListItem>
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
              <ListItem>Terms</ListItem>
              <ListItem>Privacy</ListItem>
              <ListItem>Security</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Text color='white' fontSize={13}>Copyright 2020 Scholarly educational software, Inc. All Rights reserved</Text>
    </>
  )
}
