import { Box, Stack, Text } from "@chakra-ui/react";
import { ReferralStepCardProps } from "../../types/components/affiliates/referral";

export default function ReferralStepCard({ index, title, description }: ReferralStepCardProps) {
  return (
    <Box px={5} py={9} maxW={{xl: "28%"}} borderRadius={10} bg="rgba(255, 255, 255, 0.1)">
      <Stack direction="column" spacing={1.5}>
        <Text color="brand.yellow" fontWeight="medium">{`${index}. ${title}`}</Text>
        <Text color="white" fontSize={13}>{description}</Text>
      </Stack>
    </Box>
  )
}