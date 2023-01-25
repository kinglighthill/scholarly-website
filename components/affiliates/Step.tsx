import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { StepProps } from "../../types/components/affiliates/step";

export default function Step({ index, title, description, icon, direction }: StepProps) {
  return (
    <HStack w={['full', '85%', '60%', '50%']} wrap={['wrap', 'nowrap']}
      justify={direction === 'forward' ? 'space-between' : 'start'} align={['start', 'center']}
      flexDir={['column-reverse', direction === 'forward' ? 'row' : 'row-reverse']}
    >
      <VStack spacing={[2.5, 4]} align='start'
        mr={direction === 'forward' ? [0, '11%', '20%'] : 0}
        ml={direction === 'reverse' ? [0, '11%', '21%'] : 0}
      >
        <Text fontSize={[16, 25]} fontWeight='bold'>
          <Text as='span' color='brand.lime.500'>Step {index}: </Text><Text as='span' color='brand.lime.700'>{title}</Text>
        </Text>
        <Text color='brand.lime.700' fontSize={[13, 16]}>{description}</Text>
      </VStack>
      <Box minW='15%' maxW={['15%', '100%']} ml='0 !important' mb={['13px !important', 0]}>
        <Image src={icon} alt='' />
      </Box>
    </HStack>
  )
}
