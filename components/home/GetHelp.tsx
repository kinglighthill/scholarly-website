import Link from 'next/link';
import { Box, Button, Flex, Icon, Spacer, Text } from '@chakra-ui/react'
import classes from '../../styles/Home.module.css';
import { ChevronRightIcon } from '@heroicons/react/outline';
import ContactForm from '../reusables/ContactForm';

export default function GetHelp() {
  return (
    <Box as='section' className={classes.get_help_section}>
      <Flex align='center' wrap={{base: 'wrap', md: 'nowrap'}}>
        <Box flex={{lg: '2.5 1'}} flexBasis={{base: '100%', md: '52%'}}>
          <Text as='h2' color='brand.yellow' mb={{base: 2.5, md: 6}} fontSize={{base: 20, md: 25, xl: 31}} fontWeight={{base: 'bold', md: 'medium'}}>
            Need Help Getting Started?
          </Text>
          <Text color='brand.lime.700' mb={{base: 6, md: 10}}>
            Check our frequently asked questions to see answers to popular questions or simply send us a message using the contact us fields.
          </Text>
          <Link href='/faqs'>
            <a>
              <Button type='button' variant='link' fontSize={{base: 16, md: 20}} fontWeight='medium' iconSpacing={5} rightIcon={<Icon as={ChevronRightIcon} />}>
                FAQs
              </Button>
            </a>
          </Link>
        </Box>

        {/* <Spacer /> */}

        {/* <Box flexBasis={{base: "100%", md: "43%"}} mt={{base: 10, md: 0}}>
          <ContactForm textColor='brand.lime.700' />        
        </Box> */}
      </Flex>
    </Box>
  )
}
