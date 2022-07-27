import { FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { AccountCredentialsState, SignupLevelProps } from '../../types/components/reusables/partner_signup';

export default function AccountCredentials({ formData, updateFormData }: SignupLevelProps) {
  const accountCredentials = formData as AccountCredentialsState;
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  const comparePasswords = () => {
    if (accountCredentials.password !== accountCredentials.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);
  }

  return (
    <form>
      <VStack spacing={6} align="start">
        <FormControl isRequired>
          <FormLabel htmlFor="email" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Email</FormLabel>
          <Input id="email" name="email" value={accountCredentials.email} type="email" placeholder="Email" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="phone-number" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Phone</FormLabel>
          <Input id="phone-number" name="phoneNumber" value={accountCredentials.phoneNumber} type="tel" placeholder="Enter phone number" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Password</FormLabel>
          <Input id="password" name="password" value={accountCredentials.password} type="password" placeholder="Password" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl isRequired isInvalid={!passwordsMatch}>
          <FormLabel htmlFor="confirm-password" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Confirm Password</FormLabel>
          <Input id="confirm-password" name="confirmPassword" value={accountCredentials.confirmPassword} type="password" placeholder="Confirm password" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)} onBlur={comparePasswords}
          />
          <FormErrorMessage>Passwords do not match.</FormErrorMessage>
        </FormControl>
      </VStack>
    </form>
  )
}
