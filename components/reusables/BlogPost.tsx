import Image from "next/image";
import { Box, Text, Link as ChakraLink, VStack, HStack } from "@chakra-ui/react";
import { BlogPostProps } from "../../types/components/reusables/blog_post";

export default function BlogPost({ post_data }: BlogPostProps) {
  const { feature_image, title, excerpt, published_at, reading_time, url } = post_data;

  const getDateString = () => {
    const date = new Date(published_at).toDateString();
    const displayedDate = date.slice(date.indexOf(' ')+1);
    return displayedDate;
  }

  return (
    <VStack spacing={0} maxW="432px" bg="white" flexBasis="30%" pos="relative" boxShadow="0px 4px 50px 24px rgba(0, 0, 0, 0.08)">
      <Box maxH="180px" fontSize={0} flexBasis="26%">
        <Image src={feature_image} alt={title} width={432} height={180} />
      </Box>
      <VStack spacing={4} p={4} align="start" justify="space-between" flexBasis="74%">
        <ChakraLink href={url} isExternal
          _before={{content: "''", display: "block", pos: "absolute", top: 0, left: 0, w: "100%", h: "100%"}}
        >
          <Text as="h3" color="brand.lime.700" lineHeight="120%" fontWeight="extrabold" textTransform="uppercase">
            {title}
          </Text>
        </ChakraLink>
        <Box>
          <Text noOfLines={3} color="brand.lime.700" fontSize={14} lineHeight="144%">{excerpt}</Text>
          <HStack spacing={1.5} mt={1.5} color="rgba(35, 61, 44, 0.63)" fontSize={12}>
            <Text>{getDateString()}</Text>
            <Text>{reading_time} min. read</Text>
          </HStack>
        </Box>
        <ChakraLink href={url} isExternal color="brand.lime.500" fontSize={14} pos="relative" zIndex={1}
          onClick={(e) => e.stopPropagation()}
        >
          Read more
        </ChakraLink>
      </VStack>
    </VStack>
  )
}
