import { Avatar, AvatarBadge, Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { StarIcon } from "@heroicons/react/solid";
import { StarIcon as OutlinedStarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import scholarly_logo2 from "../../public/scholarly_logo2.svg";
import opening_quotes from "../../public/opening_quotes.svg";

export type TestimonialProps = {
  name: string;
  title: string;
  image: string;
  message: string;
  rating: number;
}

export default function Testimonial({ name, title, image, message, rating }: TestimonialProps) {
  const handleDragStart = (e: React.DragEvent<HTMLElement>) => e.preventDefault();

  return (
    <Box as="article" maxW='425px' pb={2.5} m='auto' onDragStart={handleDragStart} role="presentation">
      <VStack spacing={5}>
        <HStack w='full' justify='space-between' align='center'>
          <Image src={opening_quotes} alt='Double opening quotes' />
          <HStack spacing={0} align='center'>
            <Image src={scholarly_logo2} alt='Scholarly Logo' width='20%' height={12.47} />
            <Text color='gray'fontWeight='semibold'>Scholarly</Text>
          </HStack>
        </HStack>
        <Box bgColor='white' borderRadius={20} py='34px' px='22px'>
          <Text color='brand.lime.700'>
            {message}
          </Text>
        </Box>
        <HStack justify='space-between' align='start' w='full'>
          <HStack spacing={6}>
            <Avatar name={name} src={image}>
              <AvatarBadge boxSize='1em' bg='brand.lime.500' />
            </Avatar>
            <Box>
              <Text color='brand.lime.700' fontWeight='medium'>{name}</Text>
              <Text color='brand.lime.700' fontSize={13} mt={0.5}>{title}</Text>
            </Box>
          </HStack>
          <Box>
            {[...Array(5)].map((item, index) => (
              <Icon key={index+1} as={index+1 <= rating ? StarIcon : OutlinedStarIcon} color='brand.yellow' />
            ))}
          </Box>
        </HStack>
      </VStack>
    </Box>
  )
}
