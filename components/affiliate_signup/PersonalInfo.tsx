import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { PersonalInfoState, SignupLevelProps } from '../../types/components/reusables/affiliate_signup';

export default function PersonalInfo({ formData, updateFormData }: SignupLevelProps) {
  const personalInfo = formData as PersonalInfoState;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData(e.target.name, e.target.value)
  }

  const validateDate = () => {

  }

  return (
    <form>
      <VStack spacing={6} align="start">
        <FormControl isRequired>
          <FormLabel htmlFor="first-name" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>First Name</FormLabel>
          <Input id="first-name" name="first_name"  value={personalInfo.first_name} type="text" placeholder="First name" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="middle-name" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Middle Name</FormLabel>
          <Input id="middle-name" name="middle_name" value={personalInfo.middle_name} type="text" placeholder="Middle name" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="last-name" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Last Name</FormLabel>
          <Input id="last-name" name="last_name" value={personalInfo.last_name} type="text" placeholder="Last name" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="date-of-birth" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Date of Birth</FormLabel>
          <Input id="date-of-birth" name="dob" value={personalInfo.dob} type="date" placeholder="dd-mm-yyyy" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="referral-code" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Referral Code (Optional)</FormLabel>
          <Input id="referral-code" name="referrer_code" value={personalInfo.referrer_code} type="text" placeholder="Enter referral code" bg="white" fontSize={13}
            _placeholder={{color: "brand.gray"}} focusBorderColor="brand.lime.500" onChange={(e) => updateFormData(e.target.name, e.target.value)}
          />
        </FormControl>
      </VStack>
    </form>
  )
}
