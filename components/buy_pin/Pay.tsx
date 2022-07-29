import { useState } from "react";
import { Button, Icon, Text, VStack } from "@chakra-ui/react";
import { ModalBody } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import { BuyPinTabProps } from "../../types/components/reusables/buy_pin";
import PayWithCard from "../payment/PayWithCard";
import PayWithTransfer from "../payment/PayWithTransfer";
import TransactionSuccessful from "../reusables/TransactionSuccessful";

export default function Pay({ changeTab }: BuyPinTabProps) {
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'successful'>('pending');
  const [providedEmail, setProvidedEmail] = useState<string>('');

  const updatePaymentStatus = (status: 'pending' | 'successful') => {
    setPaymentStatus(status);
  }

  // Email provided when filling out the 'Pay with Card' form.
  const updateProvidedEmail = (email: string) => {
    setProvidedEmail(email);
  }

  return (
    <>
      <ModalBody p={0}>
        {paymentStatus === 'successful' ?
          <TransactionSuccessful message="Payment Successful" cta={
            <VStack spacing={0}>
              <Text color='brand.lime.700'>Your pin has been sent to</Text>
              <Text color='brand.lime.500'>{providedEmail}</Text>
            </VStack>
          }/>
          :
          <Tabs isLazy>
            <TabList px={[5, 10]} pt={5} display='flex' justifyContent='space-between'>
              <Tab color='brand.lime.700' opacity={0.5} _selected={{
                color: 'brand.lime.500', borderBottom: '4px solid', borderBottomColor: 'brand.lime.500',
                borderBottomLeftRadius: 4, borderBottomRightRadius: 4, opacity: 1
              }}>
                Pay with Card
              </Tab>
              <Tab color='brand.lime.700' opacity={0.5} _selected={{
                color: 'brand.lime.500', borderBottom: '4px solid', borderBottomColor: 'brand.lime.500',
                borderBottomLeftRadius: 4, borderBottomRightRadius: 4, opacity: 1
              }}>
                Pay with bank transfer
              </Tab>
            </TabList>
            <Button type="button" variant="unstyled" mx={5} mt={3} mb={6} onClick={() => changeTab("cart")}>
              <Icon as={ArrowNarrowLeftIcon} mr={2} verticalAlign="middle" mb={0.5} />
              Back to Cart
            </Button>
            <TabPanels px={[5, 12]} pb={6}>
              <TabPanel p={0}>
                <PayWithCard updatePaymentStatus={updatePaymentStatus} updateProvidedEmail={updateProvidedEmail} />
              </TabPanel>
              <TabPanel p={0}>
                <PayWithTransfer />
              </TabPanel>
            </TabPanels>
          </Tabs>
        }
      </ModalBody>
    </>
  )
}