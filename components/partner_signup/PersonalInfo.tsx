import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { PersonalInfoState, SignupLevelProps } from '../../types/components/reusables/partner_signup';

export default function PersonalInfo({ formData, updateFormData }: SignupLevelProps) {
  const personalInfo = formData as PersonalInfoState;

  return (
    <form>
      <VStack spacing={6} align="start">
        <FormControl isRequired>
          <FormLabel htmlFor="first-name" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>First Name</FormLabel>
          <Input id="first-name" name="firstName"  value={personalInfo.firstName} type="text" placeholder="First name" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="middle-name" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Middle Name</FormLabel>
          <Input id="middle-name" name="middleName" value={personalInfo.middleName} type="text" placeholder="Middle name" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="last-name" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Last Name</FormLabel>
          <Input id="last-name" name="lastName" value={personalInfo.lastName} type="text" placeholder="Last name" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="referral-code" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Referral Code (Optional)</FormLabel>
          <Input id="referral-code" name="referralCode" value={personalInfo.referralCode} type="text" placeholder="Enter referral code" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
      </VStack>
    </form>
  )
}
