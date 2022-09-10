import Link from 'next/link';
import { Box, VStack, Text, Button, HStack, FormControl, FormLabel, Input, Icon, FormErrorMessage } from "@chakra-ui/react";
import classes from "../../styles/Partners.module.css";
import { ChevronRightIcon } from "@heroicons/react/outline";
import useFeatureNotifier from '../../hooks/useFeatureNotifier';

export default function TopBanner({ openSignUp }: { openSignUp: () => void }) {
  const { email, emailError, loading, handleChange, handleSubmit } = useFeatureNotifier("partners-signup");

  return (
    <Box as="section" className={classes.top_banner}>
      <VStack spacing={[8, '51px']} m='auto' maxW='530px' align={['start', 'center']}>
        <Text fontWeight='black' fontSize={['4xl', '5xl']} textAlign={['left', 'center']} lineHeight='120.5%'>
          <Text as='span' color='brand.yellow'>Resell </Text>
          <Text as='span' color='brand.lime.500'>Activation Pins, </Text>
          <Text as='span' color='brand.yellow'>Make </Text>
          <Text as='span' color='brand.lime.500'>Profit</Text>
        </Text>
        <Text fontSize={[16, 20]} maxW='470px' color='brand.lime.700' textAlign={['left', 'center']} lineHeight='144%' fontWeight={450}>
          Make Money by buying Activation Pins and reselling to Customers
        </Text>
        <Box w='full' textAlign={['left', 'center']}>
          <Text color='#A6B1AA' mb={2}>Partners Program currently unavailable</Text>
          <Text color='brand.lime.500' mb={6}>Be the first to know when we launch</Text>
          <form aria-label="Join the waitlist" onSubmit={handleSubmit}>
            <HStack spacing={6} justify={['start', 'center']} align='start'>
              <FormControl maxW='50%' isRequired isInvalid={emailError}>
                <Input id="email" type="email" name="email" value={email} placeholder="Enter your email" fontSize={13}
                  focusBorderColor="brand.lime.500" onChange={handleChange}
                />
                <FormErrorMessage>Email is invalid.</FormErrorMessage>
              </FormControl>
              <Button type="submit" variant="solid" isLoading={loading}>Get Notified</Button>
            </HStack>
          </form>
        </Box>
        {/* <HStack spacing={[4, 6]}>
          <Button type="button" variant='solid' onClick={openSignUp} iconSpacing={{md: 5}} rightIcon={<Icon as={ChevronRightIcon} display={['none', 'inline-block']} />}>
            Sign up
          </Button>
          <Link href='/apps/android'>
            <a>
              <Button type="button" variant='outline' iconSpacing={{md: 5}} rightIcon={<Icon as={ChevronRightIcon} display={['none', 'inline-block']} />}>
                Download App
              </Button>
            </a>
          </Link>
        </HStack> */}
      </VStack>
    </Box>
  )
}
