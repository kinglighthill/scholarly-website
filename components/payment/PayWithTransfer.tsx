import { Box, Button, HStack, ListItem, OrderedList, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import zenith_bank_logo from "../../public/zenith_bank_logo.webp";
import { BankAccount } from "../../types/components/payment/pay_with_transfer";

const bankAccounts: BankAccount[] = [
  { bankName: "Zenith Bank", accountNumber: 1017030259, accountName: "Scholarly Educational Software Ltd." },
  { bankName: "Zenith Bank", accountNumber: 1017030259, accountName: "Scholarly Educational Software Ltd." }
];

const accountCards = bankAccounts.map(account => {
  const handleDragStart = (e: React.DragEvent<HTMLElement>) => e.preventDefault();

  return (
    <Box key={account.accountNumber} w="full" bg="brand.nearWhite" borderRadius={8} onDragStart={handleDragStart}>
      <HStack w="full" justify="space-between" borderBottom="1px solid white" py={3.5} px={6}>
        <Text fontSize={13}>
          <Text as="span" color="brand.gray">Bank Name: </Text>
          <Text as="span" color="brand.lime.700">Zenith Bank</Text>
        </Text>
        <Image src={zenith_bank_logo} alt="Zenith Bank Logo" width={31} height={31} />
      </HStack>
      <Box fontSize={13} borderBottom="1px solid white" py={3.5} px={6}>
        <Text as="span" color="brand.gray">Account Number: </Text>
        <Text as="span" color="brand.lime.700">1017030259</Text>
      </Box>
      <HStack spacing={0} align="start" fontSize={13} py={3.5} px={6}>
        <Text as="span" color="brand.gray" flexBasis="35%">Account Name:</Text>
        <Text as="span" color="brand.lime.700" flexBasis="65%">Scholarly Educational Software Ltd.</Text>
      </HStack>
    </Box>
  )
})

export default function PayWithTransfer() {
  return (
    <VStack spacing={7}>
      <Text color="brand.lime.700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vitae faucibus sit malesuada donec vel mi, vitae. Sed tellus, lectus tempor vestibulum sem morbi purus elit. Lorem ut ac 
      </Text>
      <AliceCarousel items={accountCards} autoPlay autoPlayInterval={5000} infinite mouseTracking disableButtonsControls />
      <VStack spacing={6} align="start">
        <Text color="brand.lime.700">
          After payment, send a whatsapp message containing payment details to +2348136941462 using the format below:
        </Text>
        <Box>
          <OrderedList>
            <ListItem>Account name (belonging to the account owner or POS agent)</ListItem>
            <ListItem>Amount paid</ListItem>
            <ListItem>Your email address</ListItem>
            <ListItem>Date of payment</ListItem>
            <ListItem>Bank paid to</ListItem>
            <ListItem>CBT Exam paid for (JAMB, WAEC etc)</ListItem>
          </OrderedList>
        </Box>
        <Text color="brand.lime.700">
          Once payment has been confirmed, an activation pin will be instantly sent to your inbox.
        </Text>
        <Text color="brand.lime.700">
          Recieve activation pin after payment confirmation may take up to 20 minutes
        </Text>
      </VStack>
      <a href="https://wa.me/+2348136941462" target="_blank" rel="noreferrer" aria-label='Send us a message on Whatsapp'>
        <Button type="button" variant="solid">I have paid</Button>
      </a>
    </VStack>
  )
}