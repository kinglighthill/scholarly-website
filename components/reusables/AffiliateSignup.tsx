import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Icon, HStack, StackDivider, Divider } from "@chakra-ui/react";
import { Button, Text, VStack } from '@chakra-ui/react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import AccountCredentials from '../affiliate_signup/AccountCredentials';
import ContactInfo from '../affiliate_signup/ContactInfo';
import PersonalInfo from '../affiliate_signup/PersonalInfo';
import PinSetup from '../affiliate_signup/PinSetup';
import TransactionSuccessful from "./TransactionSuccessful";
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon, CheckIcon } from "@heroicons/react/solid";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { ModalProps } from "../../types/generics/modal";
import { AccountCredentialsState, AuthInfoState, ContactInfoState, PersonalInfoState } from "../../types/components/reusables/affiliate_signup";
// import { signup } from "../../services/signup.service";

const tabData = [
  { label: "Personal", content: PersonalInfo },
  { label: "Account", content: AccountCredentials },
  { label: "Contact", content: ContactInfo },
  { label: "Pin", content: PinSetup },
];

const initialFormData = {
  personalInfo: {
    first_name: '',
    middle_name: '',
    last_name: '',
    dob: '',
    referrer_code: '',
  },
  accountCredentials: {
    email: '',
    phone_number: '',
    password: '',
    confirm_password: ''
  },
  contactInfo: {
    country_id: '',
    state_of_origin_id: '',
    state_of_residence_id: '',
    address: ''
  },
  authInfo: {
    app_lock_pin: '',
    confirm_app_lock_pin: '',
    bvn: ''
  }
};

export default function AffiliateSignup({ isOpen, onClose }: ModalProps) {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoState>(initialFormData.personalInfo);
  const [accountCredentials, setAccountCredentials] = useState<AccountCredentialsState>(initialFormData.accountCredentials);
  const [contactInfo, setContactInfo] = useState<ContactInfoState>(initialFormData.contactInfo);
  const [authInfo, setAuthInfo] = useState<AuthInfoState>(initialFormData.authInfo);

  const formData = () => {
    if (tabIndex === 0) {
      return personalInfo;
    }
    else if (tabIndex === 1) {
      return accountCredentials;
    }
    else if (tabIndex === 2) {
      return contactInfo;
    }
    else if (tabIndex === 3) {
      return authInfo;
    }
    return {};
  }

  const disableButton = () => {
    // Disable button if any of the required input fields is empty, incomplete, or incorrect.
    if (tabIndex === 0) {
      const { first_name, last_name } = personalInfo;
      return first_name === '' || last_name === '';
    }
    else if (tabIndex === 1) {
      const { email, phone_number, password, confirm_password } = accountCredentials;
      // Regex pattern coined from https://www.regular-expressions.info/email.html
      const emailPattern = /^[A-Z0-9][A-Z0-9._%+-]+?@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;
      return Object.values(accountCredentials).includes('') || !(emailPattern.test(email)) || phone_number.length < 2 || password !== confirm_password;
    }
    else if (tabIndex === 2) {
      return Object.values(contactInfo).includes('');
    }
    else if (tabIndex === 3) {
      const { app_lock_pin, confirm_app_lock_pin, bvn } = authInfo;
      return app_lock_pin.length < 4 || confirm_app_lock_pin.length < 4 || app_lock_pin !== confirm_app_lock_pin || bvn.length !== 11; 
    }
  }

  const updateFormData = (targetName: string, targetValue: string) => {
    if (tabIndex === 0) {
      setPersonalInfo(prev => ({...prev, [targetName]: targetValue}));
    }
    else if (tabIndex === 1) {
      if (targetName === 'phone_number') {
        // Allow only numbers and the '+' sign which is used to indicate the country's dial code to be entered.
        // Correspondignly, allow the '+' sign to be entered only as the first value.
        if (/[^0-9+]/.test(targetValue) || targetValue.includes('+', 1)) return;
      }
      setAccountCredentials(prev => ({...prev, [targetName]: targetValue}));
    }
    else if (tabIndex === 2) {
      setContactInfo(prev => ({...prev, [targetName]: targetValue}));
    }
    else if (tabIndex === 3) {
      if (targetName === 'bvn') {
        // Ensure that the bvn input provided is a positive number.
        if (isNaN(+targetValue) || +targetValue < 0) return;
      }
      setAuthInfo(prev => ({...prev, [targetName]: targetValue}));
    }
  }

  const handleNavigation = () => {
    setTabIndex(tabIndex+1);
  }

  const resetForm = () => {
    setPersonalInfo(initialFormData.personalInfo);
    setAccountCredentials(initialFormData.accountCredentials);
    setContactInfo(initialFormData.contactInfo);
    setAuthInfo(initialFormData.authInfo);
  }

  const closeModal = () => {
    setSubmitted(false);
    resetForm();
    setTabIndex(0);
    onClose();
  }
// There is no bvn field in the POST data schema, There is no gender field in the design
  const handleSubmit = async () => {
    const { address } = contactInfo;
    const { confirm_password, ...accCredRemaining } = accountCredentials;
    const { app_lock_pin } = authInfo;
    const payload = {
      ...personalInfo, ...accCredRemaining, address, app_lock_pin,
      country_id: 1,
      state_of_origin_id: 1,
      state_of_residence_id: 1,
      dob: "2000-01-02",
      gender: "m",
      fcm_token: "",
      device_info: {
        name: "",
        version: "",
        api_level: 26,
        platform: "",
        form_factor: "web",
        device_id: "",
        app_version_name: ""
      },
      referrer_info: {
        referrer_url: "",
        referrer_click_time: 0,
        app_install_time: 0,
        instant_experience_launched: false
      }
    }

    // try {
    //   const response = await signup(payload);
    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log(data);
    //     setSubmitted(true);
    //   }
    // }
    // catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <Modal size={['full', 'md']} isOpen={isOpen} onClose={closeModal} scrollBehavior="inside" closeOnOverlayClick={false} isCentered>
      <ModalOverlay />
      <ModalContent my={0} minH={{base: "90vh", '2xl': "70vh"}} bgImage="/contour.svg" bgRepeat="no-repeat" bgSize="cover" bgPos="center top">
        <ModalHeader color="brand.lime.700">Sign Up</ModalHeader>
        <ModalCloseButton color='#F98A8A' top={4} />
        {submitted === true ?
          <ModalBody>
            <TransactionSuccessful message="Verification Successful"
              cta={
                <Button type="button" variant="solid">
                  Open App and Login
                  <Icon as={ChevronRightIcon} ml={4} />
                </Button>
              }
            />
          </ModalBody>
          :
          <>
            <ModalBody>
              <Tabs variant="unstyled" index={tabIndex} isLazy px={6} onChange={(index) => setTabIndex(index)}>
                <TabList display="flex" justifyContent="space-between">
                  <HStack w="full" justify="space-between" divider={<Text w="36px" h="1px" borderRadius={2} bg="#A6B1AA" mb="25px"></Text>}>
                    {tabData.map((data, index, arr) => (
                      <Tab key={index} isDisabled={index > tabIndex} px={0} w="17%">
                        <VStack spacing={2}>
                          <Text px={tabIndex > index ? 1.5 : 2} py="1px" borderRadius={25} fontWeight="medium" color={tabIndex === index ? "white" : "brand.lime.700"} 
                            bg={tabIndex >= index ? "brand.lime.500" : "brand.lime.50"}
                          >
                            {tabIndex > index ? <Icon as={CheckIcon} color="white" mt={1} /> : index+1}
                          </Text>
                          <Text color="brand.lime.700" fontSize={13} fontWeight="medium">{data.label}</Text> 
                        </VStack>
                        {/* Alternate method for adding a horizontal divider between the tab lists */}
                        {/* {index < arr.length-1 && <Text minW="36px" h="1px" borderRadius={2} bg="#A6B1AA" mt="18%" ml="9%"></Text>} */}
                      </Tab>
                    ))}
                  </HStack>
                </TabList>
                <TabPanels>
                  {tabData.map((data, index) => {
                    const Component = data.content;
                    return (
                      <TabPanel key={index} pt={6} px={0}>
                        <Component formData={formData()} updateFormData={updateFormData} />
                      </TabPanel>
                    )
                  })}
                </TabPanels>
              </Tabs>
            </ModalBody>

            <ModalFooter justifyContent="center">
              <HStack spacing={tabIndex === 0 ? 0 : 10}>
                <Button type="button" variant="outline" display={tabIndex === 0 ? "none" : "inline-flex"} 
                  onClick={() => setTabIndex(tabIndex-1)} iconSpacing={3.5} leftIcon={<Icon as={ArrowNarrowLeftIcon} />}
                >
                  Back
                </Button>
                <Button type="button" variant="solid" display={tabIndex === tabData.length - 1 ? "none" : "inline-flex"} mt={10}
                  disabled={disableButton()} onClick={handleNavigation} iconSpacing={3.5} rightIcon={<Icon as={ArrowNarrowRightIcon} />}
                >
                  Next
                </Button>
                <Button type="button" variant="solid" display={tabIndex === tabData.length - 1 ? "inline-block" : "none"}
                  mt={10} disabled={disableButton()} onClick={handleSubmit}
                >
                  Verify
                </Button>
              </HStack>
            </ModalFooter>
          </>
        }
      </ModalContent>
    </Modal>
  )
}
