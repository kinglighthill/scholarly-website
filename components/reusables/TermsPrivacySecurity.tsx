import Link from "next/link";
import { Box, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import { TermsPrivacySecurityProps } from "../../types/components/reusables/terms_privacy_security";

export default function TermsPrivacyService({ page, title, content }: TermsPrivacySecurityProps) {
  return (
    <Box as="section" pl={[5, "10%", 0]} pr={[5, "10%"]} bg="brand.lime.700" borderBottom="1px solid" borderColor="brand.yellow">
      <Flex>
        {/* Navigation for devices above 768px */}
        <Box display={{base: "none", md: "block"}} pt={12} color="white" flexBasis="22%" bg="rgba(255, 255, 255, 0.2)">
          <Text py={3} pl={4} bg={page === 'terms' ? "rgba(255, 255, 255, 0.3)" : "none"}>
            <Link href="/terms">
              <a style={{display: "block"}}>Terms</a>
            </Link>
          </Text>
          <Text py={3} pl={4} bg={page === 'privacy' ? "rgba(255, 255, 255, 0.3)" : "none"}>
            <Link href="/privacy">
              <a style={{display: "block"}}>Privacy</a>
            </Link>
          </Text>
          <Text py={3} pl={4} bg={page === 'security' ? "rgba(255, 255, 255, 0.3)" : "none"}>
            <Link href="/security">
              <a style={{display: "block"}}>Security</a>
            </Link>
          </Text>
        </Box>

        <Spacer />

        <VStack spacing={8} align="start" mt={[6, "74px"]} mb={[36, "74px"]} flexBasis={{base: "100%", md: "60%"}}>
          <Text as="h1" color="brand.yellow" fontSize={[31, 39]} fontWeight={["bold", "black"]}>{title}</Text>
          <VStack spacing={3} py={5} px={6} borderRadius={8} bg="rgba(255, 255, 255, 0.2)">{content}</VStack>
        </VStack>
      </Flex>

      {/* Navigation for devices below 768px */}
      <VStack spacing={6} textAlign="center" w="full" mb={20} display={{md: "none"}}>
        <Text color="brand.yellow" fontWeight="medium" display={page === "terms" ? "none" : "block"}>
          <Link href="/terms">Terms</Link>
        </Text>
        <Text color="brand.yellow" fontWeight="medium" display={page === "privacy" ? "none" : "block"}>
          <Link href="/privacy">Privacy</Link>
        </Text>
        <Text color="brand.yellow" fontWeight="medium" display={page === "security" ? "none" : "block"}>
          <Link href="/security">Security</Link>
        </Text>
      </VStack>
    </Box>
  )
}
