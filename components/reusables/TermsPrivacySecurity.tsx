import { Box, Flex, List, ListItem, OrderedList, Spacer, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { TermsPrivacySecurityProps } from "../../types/components/reusables/terms_privacy_security";
import parse, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser';
import CustomLink from "./CustomLink";

export default function TermsPrivacyService({ page, title, content }: TermsPrivacySecurityProps) {
  const parserOptions: HTMLReactParserOptions = {
    replace: domNode => {
      if (domNode instanceof Element) {
        const { name, children, attribs } = domNode;

        if (name === 'h2' || name === 'h3' || name === 'p') {
          const fontSize = name === 'h2' ? 25 : name === 'h3' ? 20 : 16;
          const fontWeight = name === 'h2' || name === 'h3' ? 'semibold' : 'normal';
          const topMargin = name === 'h2' || name === 'h3' ? 7 : 0;
          return (
            <Text as={name} fontSize={fontSize} fontWeight={fontWeight} mb={3.5} mt={topMargin}>
              {domToReact(children, parserOptions)}
            </Text>
          )
        }
        if (name === 'ol' || name === 'ul') {
          const listStyleType = attribs.type === 'a' ? 'lower-alpha' : attribs.type;
          const Component = attribs.type === 'none' ? List : name === 'ol' ? OrderedList : UnorderedList;
          return (
            <Component spacing={4} mb={3} listStyleType={listStyleType || undefined} listStylePos={name === 'ol' ? 'inside' : 'outside'}>
              {domToReact(children, parserOptions)}
            </Component>
          )
        }
        if (name === 'li') {
          return <ListItem>{domToReact(children, parserOptions)}</ListItem>
        }
        if (name === 'a') {
          return <CustomLink href={attribs.href}>{domToReact(children, parserOptions)}</CustomLink>
        }
        if (name === 'br') {
          return <><br/><br/></>
        }
      }
    }
  };

  return (
    <Box as="section" pl={[5, "10%", 0]} pr={[5, "10%"]} bg="brand.lime.700" borderBottom="1px solid" borderColor="brand.yellow">
      <Flex className='responsive_1440px'>
        {/* Navigation for devices above 768px */}
        <Box display={{base: "none", md: "block"}} pt={12} flexBasis="22%" color="white" bg="rgba(255, 255, 255, 0.2)">
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
