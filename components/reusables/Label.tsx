import { HStack, Text } from "@chakra-ui/react";
import { LabelProps } from "../../types/components/reusables/label";
import { PropsWithChildren } from "react";

export default function Label({ children, labelText, labelIcon, boxProps }: PropsWithChildren<LabelProps>) {
  return (    
    <HStack spacing={1} align='center' bg='white' p={2} borderRadius={8} w='max' zIndex={2} pos='absolute'
      boxShadow='0px 0px 21px rgba(0, 148, 66, 0.15)' {...boxProps} 
    >
      {labelIcon}
      {labelText && !children ?
        <Text fontWeight='medium' fontSize={13} color='brand.lime.700'>{labelText}</Text>
        :
        children
      }
    </HStack>
  )
}