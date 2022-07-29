import React, { useState } from "react";
import { Button, FormControl, FormLabel, Icon, Input, VStack } from "@chakra-ui/react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { PayWithCardProps } from "../../types/components/payment/pay_with_card";

export default function PayWithCard({ updatePaymentStatus, updateProvidedEmail }: PayWithCardProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [CVV, setCVV] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');

  const validateCVV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    // Ensures that CVV does not have more than 3 characters and negative values are not accepted.
    if (value.length <= 3 && +value >= 0) setCVV(value);
  }

  const validateExpiry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    // Ensures that all inputted characters are numbers except the '/' that is automatically added between the month and year.
    if (isNaN(+value.replace('/', ''))) return;

    // Manages the addition and removal of the forward slash (/) used to separate the two-digit month from the year.
    if (value.length === 2) {
      // Allow only values between 01 and 12 (both inclusive) for the month and add a '/' afterwards.
      if (!isNaN(+value) && +value <= 12 && +value > 0) {
        setExpiry(value + '/');
      }
      // Automatically remove the '/' when the user erases part of the values of the input field such that the required length of the month section of the input has not been satisfied.
      else if (isNaN(+value)) {
        setExpiry(value.replace('/', ''));
      }
      return;
    }

    // Checks if more than two characters were inputted before or after the forward slash (/).
    if (value.length > 3) {
      // Returns true if more than two characters were inputted before the forward slash (/).
      const beforeSlash = /(?<=\w{3})\//;
      // Returns true if more than two characters were inputted after the forward slash (/).
      const afterSlash = /\/(?=\w{3})/;

      if (beforeSlash.test(value) || afterSlash.test(value)) {
        return;
      }
    }
    
    setExpiry(value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { cardName, cardNumber, expiry, cvv, email } = e.target as HTMLFormElement;
    // console.log(cardName.value, cardNumber.value, expiry.value, cvv.value, email.value)
    // setLoading(true);
    updatePaymentStatus('successful');
    updateProvidedEmail(email.value);
  }

  return (
    <form style={{textAlign: "center"}} onSubmit={handleSubmit}>
      <VStack spacing={6} align="start" px={5} pt={5} pb={7} bg="brand.nearWhite" borderRadius={4}>
        <FormControl isRequired>
          <FormLabel htmlFor="card-name" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Name on card</FormLabel>
          <Input id="card-name" name="cardName" type="text" isDisabled={loading} placeholder="E.g. John Doe" bg="white" focusBorderColor="brand.lime.500"
            _placeholder={{fontSize: 13, color: "brand.gray"}}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="card-number" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Card number</FormLabel>
          <Input id="card-number" name="cardNumber" type="number" isDisabled={loading} placeholder="0000 0000 0000 0000" bg="white" focusBorderColor="brand.lime.500"
            _placeholder={{fontSize: 13, color: "brand.gray"}}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="expiry" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Expiry date</FormLabel>
          <Input id="expiry" name="expiry" type="text" value={expiry} minLength={5} maxLength={5} isDisabled={loading} placeholder="MM/YY" bg="white" focusBorderColor="brand.lime.500"
            _placeholder={{fontSize: 13, color: "brand.gray"}} onChange={validateExpiry}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="cvv" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>CVV</FormLabel>
          <Input id="cvv" name="cvv" type="number" value={CVV} isDisabled={loading} placeholder="123" bg="white" focusBorderColor="brand.lime.500"
            _placeholder={{fontSize: 13, color: "brand.gray"}} onChange={validateCVV}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email" color="brand.lime.700" fontSize={13} fontWeight="medium" mb={2}>Email</FormLabel>
          <Input id="email" name="email" type="email" isDisabled={loading} placeholder="Enter a valid email" bg="white" focusBorderColor="brand.lime.500"
            _placeholder={{fontSize: 13, color: "brand.gray"}}
          />
        </FormControl>
      </VStack>
      
      <Button type="submit" variant="solid" disabled={loading} mt={7}>
        Confirm Payment
        <Icon as={ArrowNarrowRightIcon} ml={3.5} />
      </Button>
    </form>
  )
}