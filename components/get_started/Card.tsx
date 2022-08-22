import Link from "next/link";
import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { GetStartedCardProps } from "../../types/components/get_started/card";

export default function GetStartedCard({ title, description, btnText, btnHref }: GetStartedCardProps) {
  return (
    <Box pt={7} pb={5} px={5} bg="rgba(255, 255, 255, 0.2)" borderRadius={8} display="flex" flexDir="column" justifyContent="space-between">
      <Text as="h2" mb={6} color="white" fontSize={25} fontWeight="medium">{title}</Text>
      <Text mb={4} color="white">{description}</Text>
      <Link href={btnHref}>
        <Button type="button" variant="solid" w="max-content" bg="white" color="brand.lime.500" _hover={{bg: "gray.200"}} iconSpacing={4} rightIcon={<Icon as={ArrowNarrowRightIcon} />}>
          Continue
        </Button>
      </Link>
    </Box>
  )
}