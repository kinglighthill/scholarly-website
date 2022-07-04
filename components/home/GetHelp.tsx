import { Box, Button, Flex, FormControl, FormLabel, Icon, Input, Spacer, Text, Textarea, VStack } from '@chakra-ui/react'
import classes from '../../styles/Home.module.css';
import { ChevronRightIcon } from '@heroicons/react/outline';

export default function GetHelp() {
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  }

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
          <Button type='button' variant='link' fontSize={{base: 16, md: 20}} fontWeight='medium'>
            FAQs
            <Icon as={ChevronRightIcon} ml={5} />
          </Button>
        </Box>

        <Spacer />

        <form onSubmit={handleSubmit} aria-label="Send us a message" className={classes.get_help_form}>
          <VStack spacing={{base: 8, md: 6}} mb={{base: 8, md: 12}} align='start'>
            <FormControl>
              <FormLabel color='brand.lime.700' fontSize={13} fontWeight='medium' mb={2}>Email</FormLabel>
              <Input type='email' w={['full', '70%', 'full']} focusBorderColor='brand.lime.500' placeholder='Enter your email' _placeholder={{fontSize: 13, color: 'brand.gray'}} />
            </FormControl>
            <FormControl>
              <FormLabel color='brand.lime.700' fontSize={13} fontWeight='medium' mb={2}>What can we help you with?</FormLabel>
              <Textarea w={['full', '70%', 'full']} focusBorderColor='brand.lime.500' placeholder='Enter your question'  _placeholder={{fontSize: 13, color: 'brand.gray'}} />
            </FormControl>
            <Text color='brand.lime.700'>We&apos;ll respond to your message within 24 hours</Text>
          </VStack>
          <Button type='submit' variant='solid'>
            Submit
            <Icon as={ChevronRightIcon} ml={5} />
          </Button>
        </form>
      </Flex>
    </Box>
  )
}
