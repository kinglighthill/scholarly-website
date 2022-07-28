import Link from "next/link";
import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { GetStartedCardProps } from "../../types/components/get_started/card";

export default function GetStartedCard({ title, description, btnText, btnHref }: GetStartedCardProps) {
  return (
    <Box pt={7} pb={5} px={5} bg="rgba(255, 255, 255, 0.2)" borderRadius={8}>
      <Text as="h2" fontSize={25} mb={6} color="white">{title}</Text>
      <Text mb={4} color="white">{description}</Text>
      <Link href={btnHref}>
        <Button type="button" variant="solid" bg="white" color="brand.lime.500" _hover={{bg: "gray.100"}}>
          Continue
          <Icon as={ArrowNarrowRightIcon} ml={4} />
        </Button>
      </Link>
    </Box>
  )
}