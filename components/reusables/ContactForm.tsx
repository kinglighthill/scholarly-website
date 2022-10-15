import { useState } from "react";
import { Button, FormControl, FormLabel, Icon, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { ChevronRightIcon } from '@heroicons/react/outline';
import useCustomToast from "../../hooks/useCustomToast";
import { ContactFormProps, FormData } from "../../types/components/reusables/contact_form";
import useRecaptcha from "../../hooks/useRecaptcha";

export default function ContactForm({ textColor, defaultSubject }: ContactFormProps) {
  const makeToast = useCustomToast();
  const verifyUser = useRecaptcha();
  const [loading, setLoading] = useState<boolean>(false);
  const initialFormData = {
    name: '',
    email: '',
    subject: defaultSubject,
    message: ''
  }
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await verifyUser('newAppRequest', formData, '/sendMessage/send-message');
      if (response?.ok) {
        makeToast('Request submitted successfully', "We'll notify you when we have an update.");
        setFormData(initialFormData);
      } else {
        makeToast('An error occured', "Please ensure that you're connected to the internet and try again.", 'error');
      }
    }
    catch (error) {
      console.log(error);
      makeToast('An error occured', "Please ensure that you're connected to the internet and try again.", 'error');
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Send us a message">
      <VStack spacing={4} mb={{base: 8, md: 12}} align='start'>
        <FormControl isRequired>
          <FormLabel htmlFor='name' color={textColor} fontSize={13} fontWeight='medium' mb={2}>Name</FormLabel>
          <Input id='name' type='text' name='name' value={formData.name} w={['full', '70%', 'full']} bg="white" focusBorderColor='brand.lime.500'
            placeholder='Enter your name' _placeholder={{fontSize: 13, color: 'brand.gray'}} onChange={updateFormData}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='email' color={textColor} fontSize={13} fontWeight='medium' mb={2}>Email</FormLabel>
          <Input id='email' type='email' name='email' value={formData.email} w={['full', '70%', 'full']} bg="white" focusBorderColor='brand.lime.500'
            placeholder='Enter your email' _placeholder={{fontSize: 13, color: 'brand.gray'}} onChange={updateFormData}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='subject' color={textColor} fontSize={13} fontWeight='medium' mb={2}>Subject</FormLabel>
          <Input id='subject' type='text' name='subject' value={formData.subject} w={['full', '70%', 'full']} bg="white" focusBorderColor='brand.lime.500'
            placeholder="What's your request about?" _placeholder={{fontSize: 13, color: 'brand.gray'}} onChange={updateFormData}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='message' color={textColor} fontSize={13} fontWeight='medium' mb={2}>What can we help you with?</FormLabel>
          <Textarea id='message' name='message' value={formData.message} w={['full', '70%', 'full']} bg="white" focusBorderColor='brand.lime.500'
            placeholder='Enter your message' _placeholder={{fontSize: 13, color: 'brand.gray'}} onChange={updateFormData}
          />
        </FormControl>
        {/* <Text color={textColor}>We&apos;ll respond to your message within 24 hours</Text> */}
      </VStack>
      <Button type='submit' variant='solid' isLoading={loading} iconSpacing={5} rightIcon={<Icon as={ChevronRightIcon} />}>
        Request
      </Button>
    </form>
  )
}
