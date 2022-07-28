import { FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';
import { countries, states } from '../../data';
import { ContactInfoState, SignupLevelProps } from '../../types/components/reusables/partner_signup';

export default function ContactInfo({ formData, updateFormData }: SignupLevelProps) {
  const contactInfo = formData as ContactInfoState;

  return (
    <form style={{textAlign: "center"}}>
      <VStack spacing={6} align="start">
        <FormControl isRequired>
          <FormLabel htmlFor="select-country" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Country</FormLabel>
          <Select id="select-country" name="country" value={contactInfo.country} aria-label="Select Country" placeholder="Select country" fontSize={13}
            _focus={{borderColor: "brand.lime.500"}} _focusVisible={{boxShadow: "0 0 0 1px #46AC66", fontSize: 16}}
            onChange={(e) => updateFormData(e.target.name, e.target.value)}
          >
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="state-of-origin" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>State of Origin</FormLabel>
          <Select id="state-of-origin" name="stateOfOrigin" value={contactInfo.stateOfOrigin} aria-label="Select State of Origin" placeholder="Select state" fontSize={13}
            _focus={{borderColor: "brand.lime.500"}} _focusVisible={{boxShadow: "0 0 0 1px #46AC66", fontSize: 16}}
            onChange={(e) => updateFormData(e.target.name, e.target.value)}
          >
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="state-of-residence" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>State of Residence</FormLabel>
          <Select id="state-of-residence" name="stateOfResidence" value={contactInfo.stateOfResidence} aria-label="Select State of Residence" placeholder="Select state" fontSize={13}
            _focus={{borderColor: "brand.lime.500"}} _focusVisible={{boxShadow: "0 0 0 1px #46AC66", fontSize: 16}}
            onChange={(e) => updateFormData(e.target.name, e.target.value)}
          >
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="address" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Address</FormLabel>
          <Input id="address" name="address" value={contactInfo.address} type="text" placeholder="Enter your address" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
      </VStack>
    </form>
  )
}
