import { useRef } from "react";
import Image from "next/image";
import { Avatar, AvatarBadge, Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { StarIcon } from "@heroicons/react/solid";
import { StarIcon as OutlinedStarIcon, ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import scholarly_logo2 from "../../public/scholarly_logo2.svg";
import opening_quotes from "../../public/opening_quotes.svg";
import useCarousel, { Breakpoints } from "../../hooks/useCarousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import classes from "../../styles/components/Testimonials.module.css";
import { TestimonialProps, TestimonialsProps } from "../../types/components/reusables/testimonials";
import { capitalize } from "../../utils";

const handleDragStart = (e: React.DragEvent<HTMLElement>) => e.preventDefault();

export function Testimonial({ full_name, user_type, profile_pic_sm, content, rating, bg }: TestimonialProps) {
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
        <Box bg={bg ? bg : 'white'} borderRadius={20} py='34px' px='22px'>
          <Text color='brand.lime.700'>
            {content}
          </Text>
        </Box>
        <HStack spacing={0} justify='space-between' align='start' w='full'>
          <HStack spacing={6} align='start' flexBasis='72%'>
            <Avatar name={full_name} src={profile_pic_sm}>
              <AvatarBadge boxSize='1em' bg='brand.lime.500' />
            </Avatar>
            <Box>
              <Text color='brand.lime.700' fontWeight='medium'>{full_name}</Text>
              <Text color='brand.lime.700' fontSize={13} mt={0.5}>{capitalize(user_type)}</Text>
            </Box>
          </HStack>
          <Box flexBasis='25%'>
            {[...Array(5)].map((item, index) => (
              <Icon key={index+1} as={index+1 <= rating ? StarIcon : OutlinedStarIcon} color='brand.yellow' />
            ))}
          </Box>
        </HStack>
      </VStack>
    </Box>
  )
}

const responsive: Breakpoints = {
  0: {
    items: 1
  },
  1024: {
    items: 2
  }
};

export default function Testimonials({ testimonials }: TestimonialsProps) {  
  const carousel = useRef<AliceCarousel>(null);
  const { handleNavigation } = useCarousel(testimonials, responsive, carousel);

  return (
    <Box pos='relative' className={classes.carousel}>
      <Box bg='#B2BBB6' px={2} pt={1.5} pb={0.5} borderRadius='20px' display='inline-block' cursor='pointer' zIndex={1}
        pos='absolute' top={{base: -12, md: '40%'}} left={{base: '4%', md: '12%', lg: '4%', xl: '8%'}} onClick={() => handleNavigation('prev')}
      >
        <Icon as={ChevronLeftIcon} color='white' />
      </Box>
      <AliceCarousel items={testimonials} mouseTracking responsive={responsive} ref={carousel} disableButtonsControls disableDotsControls />
      <Box bg='#B2BBB6' px={2} pt={1.5} pb={0.5} borderRadius='20px' display='inline-block' cursor='pointer' zIndex={1}
        pos='absolute' top={{base: -12, md: '40%'}} right={{base: '4%', md: '12%', lg: '4%', xl: '9%'}} onClick={() => handleNavigation('next')}
      >
        <Icon as={ChevronRightIcon} color='white' />
      </Box>
    </Box>
  )
}