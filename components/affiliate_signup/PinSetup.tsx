import { FormControl, FormErrorMessage, FormLabel, HStack, Input, PinInput, PinInputField, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { AuthInfoState, SignupLevelProps } from '../../types/components/reusables/affiliate_signup';

export default function PinSetup({ formData, updateFormData }: SignupLevelProps) {
  const authInfo = formData as AuthInfoState;
  const [hidePin, setHidePin] = useState<boolean>(true);
  const [hideConfirmPin, setHideConfirmPin] = useState<boolean>(true);
  const [pinsMatch, setPinsMatch] = useState<boolean>(true);

  const comparePins = (value: string) => {
    if (authInfo.app_lock_pin !== value) {
      setPinsMatch(false);
      return;
    }
    setPinsMatch(true);
  }

  return (
    <form>
      <VStack spacing={6} align="start">
        <FormControl isRequired>
          <FormLabel htmlFor="app_lock_pin" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Pin</FormLabel>
          <HStack spacing={4}>
            <PinInput mask={hidePin} id="app_lock_pin" value={authInfo.app_lock_pin} focusBorderColor="brand.lime.500" onChange={(value) => updateFormData("app_lock_pin", value)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
            <Text cursor="pointer" fontSize={13} onClick={() => setHidePin(!hidePin)}>
              {hidePin ? "Show" : "Hide"}
            </Text>
          </HStack>
        </FormControl>
        <FormControl isRequired isInvalid={!pinsMatch}>
          <FormLabel htmlFor="confirm_app_lock_pin" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Confirm Pin</FormLabel>
          <HStack spacing={4}>
            <PinInput mask={hideConfirmPin} id="confirm_app_lock_pin" value={authInfo.confirm_app_lock_pin} focusBorderColor="brand.lime.500"
              onChange={(value) => updateFormData("confirm_app_lock_pin", value)} onComplete={value => comparePins(value)}
            >
              <PinInputField borderColor={!pinsMatch ? "brand.red" : "inherit"}  />
              <PinInputField borderColor={!pinsMatch ? "brand.red" : "inherit"} />
              <PinInputField borderColor={!pinsMatch ? "brand.red" : "inherit"} />
              <PinInputField borderColor={!pinsMatch ? "brand.red" : "inherit"} />
            </PinInput>
            <Text cursor="pointer" fontSize={13} onClick={() => setHideConfirmPin(!hideConfirmPin)}>
              {hideConfirmPin ? "Show" : "Hide"}
            </Text>
          </HStack>
          <FormErrorMessage>Pins do not match.</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="bvn" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>BVN</FormLabel>
          <Input id="bvn" name="bvn" value={authInfo.bvn} type="text" minLength={11} maxLength={11} placeholder="Enter BVN" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
      </VStack>
    </form>
  )
}
