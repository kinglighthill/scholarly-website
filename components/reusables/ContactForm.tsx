import { Box, Button, FormControl, FormLabel, Icon, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { ChevronRightIcon } from '@heroicons/react/outline';

export default function ContactForm({ textColor }: {textColor: string}) {
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Send us a message">
      <VStack spacing={{base: 8, md: 6}} mb={{base: 8, md: 12}} align='start'>
        <FormControl isRequired>
          <FormLabel htmlFor='email' color={textColor} fontSize={13} fontWeight='medium' mb={2}>Email</FormLabel>
          <Input id='email' type='email' w={['full', '70%', 'full']} bg="white" focusBorderColor='brand.lime.500' placeholder='Enter your email' _placeholder={{fontSize: 13, color: 'brand.gray'}} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='message' color={textColor} fontSize={13} fontWeight='medium' mb={2}>What can we help you with?</FormLabel>
          <Textarea id='message' w={['full', '70%', 'full']} bg="white" focusBorderColor='brand.lime.500' placeholder='Enter your question' _placeholder={{fontSize: 13, color: 'brand.gray'}} />
        </FormControl>
        <Text color={textColor}>We&apos;ll respond to your message within 24 hours</Text>
      </VStack>
      <Button type='submit' variant='solid' iconSpacing={5} rightIcon={<Icon as={ChevronRightIcon} />}>
        Submit
      </Button>
    </form>
  )
}
