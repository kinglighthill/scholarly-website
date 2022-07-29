import Image from "next/image";
import { Box, Icon, Text, VStack } from "@chakra-ui/react";
import transaction_successful from "../../public/transaction_successful.svg"
import { TransactionSuccessfulProps } from "../../types/components/reusables/transaction_successful";
import { StarIcon } from "@heroicons/react/solid";

export default function TransactionSuccessful({ message, cta }: TransactionSuccessfulProps) {
  return (
    <VStack spacing={9} h="77vh" justify="center">
      <Box pos="relative">
        <Image src={transaction_successful} alt="" />
        <Icon as={StarIcon} pos="absolute" top="-40px" color="brand.yellow" fontSize="160%" />
        <Icon as={StarIcon} pos="absolute" top="-10px" left="5px" color="brand.yellow" fontSize="260%" />
        <Icon as={StarIcon} pos="absolute" bottom="10px" left="-40px" color="brand.yellow" fontSize="150%" />
        <Icon as={StarIcon} pos="absolute" bottom="40px" right="20px" color="brand.yellow" fontSize="150%" />
      </Box>
      <Text color="brand.yellow" textTransform="capitalize" fontSize={31} fontWeight="bold">{message}</Text>
      {cta}
    </VStack>
  )
}
