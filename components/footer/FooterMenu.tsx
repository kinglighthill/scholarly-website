import { Box, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FooterMenuProps } from "../../types/components/footer/footer_menu";

export default function FooterMenu({ title, items }: FooterMenuProps) {
  return (
    <Box color='white'>
      <Box as='h2' fontWeight='medium' mb={5}>{title}</Box>
      <VStack spacing={4} align='start'>
        {items.map(item => (
          <Text key={item.name+item.url} fontWeight='light'>
            <Link href={item.url}>{item.name}</Link>
          </Text>
        ))}
      </VStack>
    </Box>
  )
}
