import { Box, Icon } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

export interface NavButtonProps {
  variant: 'prev' | 'next';
  // The clickHandler is an experimental feature.
  clickHandler?: (trigger: 'prev' | 'next') => void;
}

export default function NavButton({ variant, clickHandler }: NavButtonProps) {
  if (variant === 'prev') {
    return (
      <Box bg='#B2BBB6' px={2} pt={1.5} pb={0.5} borderRadius='20px' display='inline-block' cursor='pointer' zIndex={1}
        pos='absolute' top={{base: -12, md: '30%'}} left={{base: '4%', md: '7%', lg: '-4.5%', xl: '-8.7%'}}
      >
        <Icon as={ChevronLeftIcon} color='white' />
      </Box>
    )
  }
  
  if (variant === 'next') {
    return (
      <Box bg='#B2BBB6' px={2} pt={1.5} pb={0.5} borderRadius='20px' display='inline-block' cursor='pointer' zIndex={1}
        pos='absolute' top={{base: -12, md: '30%'}} right={{base: '4%', md: '7%', lg: '-4.5%', xl: '-8.7%'}}
      >
        <Icon as={ChevronRightIcon} color='white' />
      </Box>
    )
  }
  
  return null;
}
