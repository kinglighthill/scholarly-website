import { Box, Flex, ListItem, OrderedList, Spacer, Text, VStack } from "@chakra-ui/react";
import { TermsPrivacySecurityProps } from "../../types/components/reusables/terms_privacy_security";
import parse, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser';
import CustomLink from "./CustomLink";

export default function TermsPrivacyService({ page, title, content }: TermsPrivacySecurityProps) {
  const parserOptions: HTMLReactParserOptions = {
    replace: domNode => {
      if (domNode instanceof Element) {
        const { name, children } = domNode;

        if (name === 'ol') {
          return <OrderedList spacing={5}>{domToReact(children)}</OrderedList>
        }
        if (name === 'li') {
          return <ListItem>{domToReact(children)}</ListItem>
        }
      }
    }
  };

  return (
    <Box as="section" pl={[5, "10%", 0]} pr={[5, "10%"]} bg="brand.lime.700" borderBottom="1px solid" borderColor="brand.yellow">
      <Flex className='responsive_1440px'>
        {/* Navigation for devices above 768px */}
        <Box display={{base: "none", md: "block"}} pt={12} color="white" flexBasis="22%" bg="rgba(255, 255, 255, 0.2)">
          <CustomLink href="/terms" prefetch={false} display="block" _hover={{textDecor: 'none'}}
            py={3} pl={4} bg={page === 'terms' ? "rgba(255, 255, 255, 0.3)" : "none"}
          >
            Terms
          </CustomLink>
          <CustomLink href="/privacy" prefetch={false} display="block" _hover={{textDecor: 'none'}}
            py={3} pl={4} bg={page === 'privacy' ? "rgba(255, 255, 255, 0.3)" : "none"}
          >
            Privacy
          </CustomLink>
        </Box>

        <Spacer />

        <VStack spacing={8} align="start" mt={[6, "74px"]} mb={[36, "74px"]} flexBasis={{base: "100%", md: "60%"}}>
          <Text as="h1" color="brand.yellow" fontSize={[31, 39]} fontWeight={["bold", "black"]}>{title}</Text>
          <Box color="white" py={5} px={6} borderRadius={8} bg="rgba(255, 255, 255, 0.2)">
            {parse(content, parserOptions)}
          </Box>
        </VStack>
      </Flex>

      {/* Navigation for devices below 768px */}
      <VStack spacing={6} textAlign="center" w="full" mb={20} display={{md: "none"}}>
        <CustomLink href="/terms" prefetch={false} color="brand.yellow" fontWeight="medium" display={page === "terms" ? "none" : "block"}>
          Terms
        </CustomLink>
        <CustomLink href="/privacy" prefetch={false} color="brand.yellow" fontWeight="medium" display={page === "privacy" ? "none" : "block"}>
          Privacy
        </CustomLink>
      </VStack>
    </Box>
  )
}
