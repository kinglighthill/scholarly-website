import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";

type StepProps = {
  index: number;
  title: string;
  description: string;
  icon: string;
  direction: string;
}

export default function Step({ index, title, description, icon, direction }: StepProps) {
  return (
    <HStack justify={direction === 'forward' ? 'space-between' : 'start'} w='50%' flexDir={direction === 'forward' ? 'row' : 'row-reverse'}>
      <VStack spacing={4} align='start' ml={direction === 'reverse' ? '21%' : 0} mr={direction === 'forward' ? '20%' : 0}>
        <Text fontSize={25} fontWeight='bold'>
          <Text as='span' color='brand.lime.500'>Step {index}: </Text><Text as='span' color='brand.lime.700'>{title}</Text>
        </Text>
        <Text color='brand.lime.700'>{description}</Text>
      </VStack>
      <Box minW='15%'>
        <Image src={icon} alt='' />
      </Box>
    </HStack>
  )
}
