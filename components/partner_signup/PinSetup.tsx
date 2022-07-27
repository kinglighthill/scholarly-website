import { FormControl, FormErrorMessage, FormLabel, HStack, Input, PinInput, PinInputField, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { AuthInfoState, SignupLevelProps } from '../../types/components/reusables/partner_signup';

export default function PinSetup({ formData, updateFormData }: SignupLevelProps) {
  const authInfo = formData as AuthInfoState;
  const [hidePin, setHidePin] = useState<boolean>(true);
  const [hideConfirmPin, setHideConfirmPin] = useState<boolean>(true);
  const [pinsMatch, setPinsMatch] = useState<boolean>(true);

  const comparePins = (value: string) => {
    if (authInfo.pin !== value) {
      setPinsMatch(false);
      return;
    }
    setPinsMatch(true);
  }

  return (
    <form>
      <VStack spacing={6} align="start">
        <FormControl isRequired>
          <FormLabel htmlFor="pin" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Pin</FormLabel>
          <HStack spacing={4}>
            <PinInput mask={hidePin} id="pin" value={authInfo.pin} focusBorderColor="brand.lime.500" onChange={(value) => updateFormData("pin", value)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
            <Text cursor="pointer" fontSize={13} fontWeight="brand.lime.700" onClick={() => setHidePin(!hidePin)}>
              {hidePin ? "Show" : "Hide"}
            </Text>
          </HStack>
        </FormControl>
        <FormControl isRequired isInvalid={!pinsMatch}>
          <FormLabel htmlFor="confirm-pin" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Confirm Pin</FormLabel>
          <HStack spacing={4}>
            <PinInput mask={hideConfirmPin} id="confirm-pin" value={authInfo.confirmPin} focusBorderColor="brand.lime.500"
              onChange={(value) => updateFormData("confirmPin", value)} onComplete={value => comparePins(value)}
            >
              <PinInputField borderColor={!pinsMatch ? "brand.red" : "inherit"}  />
              <PinInputField borderColor={!pinsMatch ? "brand.red" : "inherit"} />
              <PinInputField borderColor={!pinsMatch ? "brand.red" : "inherit"} />
              <PinInputField borderColor={!pinsMatch ? "brand.red" : "inherit"} />
            </PinInput>
            <Text cursor="pointer" fontSize={13} fontWeight="brand.lime.700" onClick={() => setHideConfirmPin(!hideConfirmPin)}>
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
