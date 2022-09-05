import { useState } from "react";
import Image from "next/image";
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Spacer, Text, VStack } from "@chakra-ui/react";
import coming_soon from "../../public/coming_soon.svg";
import { notifyUser } from "../../services/notification.service";
import useCustomToast from "../../hooks/useCustomToast";

export default function ComingSoon({ feature }: {feature: string}) {
  const makeToast = useCustomToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  // Regex pattern coined from https://www.regular-expressions.info/email.html
  const emailPattern: RegExp = /^[A-Z0-9][A-Z0-9._%+-]+?@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (emailPattern.test(value) && emailError) {
      setEmailError(false);
    }
    setEmail(value);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailPattern.test(email)) {
      setEmailError(true);
      return;
    };

    try {
      setLoading(true);
      const payload = { email, feature }
      const response = await notifyUser(payload);
      if (response.ok) {
        makeToast('Email submitted successfully', "We'll notify you when this feature is available.");
        setEmail('');
        setLoading(false);
      }
    }
    catch (error) {
      console.log(error);
      makeToast('An error occured', "Please ensure that you're connected to the internet and try again.", 'error');
      setLoading(false);
    }
  }

  return (
    <Box as="section" py={24} px={[5, 12, 7, 14, 24]}>
      <Flex alignItems="center" justify={{base: "center"}} flexWrap={{base: "wrap", md: "nowrap"}}>
        <Box fontSize={0} flexBasis={["100%", "70%", "48%"]} mb={{base: 14, md: 0}}>
          <Image src={coming_soon} alt="" priority />
        </Box>
        <Spacer display={{base: "none", md: "block"}} />
        <VStack spacing={6} align="start" flexBasis={{base: "100%", md: "50%", lg: "48%", xl: "45%"}}>
          <Text color="brand.lime.700" w="full" textAlign={{base: "center", md: "left"}} lineHeight="144%" fontSize={{base: 32, md: 49}} fontWeight="bold">Coming Soon!!!</Text>
          <Text color="brand.lime.700" fontSize={13}>Our team is working hard to develop this product. Kindly provide your email so we&apos;ll inform you when we launch.</Text>
          <Text color="brand.lime.500" fontWeight="medium">Be the first to know when we launch</Text>
          <form aria-label="Join the waitlist" onSubmit={handleSubmit} style={{width: "100%"}}>
            <FormControl mb={6} isRequired isInvalid={emailError}>
              <FormLabel htmlFor="email" mb={2} fontSize={13} fontWeight="medium">Email</FormLabel>
              <Input id="email" type="email" name="email" value={email} placeholder="Enter your email" fontSize={13}
                focusBorderColor="brand.lime.500" onChange={handleChange}
              />
              <FormErrorMessage>Email is invalid.</FormErrorMessage>
            </FormControl>
            <Button type="submit" variant="solid" isLoading={loading}>Join waitlist</Button>
          </form>
        </VStack>
      </Flex>
    </Box>
  )
}
