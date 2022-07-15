import { Box, HStack, Text } from "@chakra-ui/react";
import { LabelProps } from "../../types/components/reusables/label";

export default function Label({ labelText, labelIcon, box }: LabelProps) {
  return (
    <Box
      bgColor='white' p={2} borderRadius={8} w='max' zIndex={2}
      pos='absolute' boxShadow='0px 0px 21px rgba(0, 148, 66, 0.15)' {...box}
    >
      <HStack spacing={1} alignItems='center'>
        {labelIcon}
        <Text fontWeight='medium' fontSize={13} color='brand.lime.700'>{labelText}</Text>
      </HStack>
    </Box>
  )
}