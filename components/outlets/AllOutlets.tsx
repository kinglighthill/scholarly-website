import { useState } from 'react';
import Image from 'next/image';
import { Box, StackDivider, HStack, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, VStack, Divider, Center, FormControl, FormLabel, ModalHeader, useDisclosure } from '@chakra-ui/react';
import { FilterIcon, StarIcon as OutlinedStarIcon } from '@heroicons/react/outline';
import { SearchIcon, StarIcon } from '@heroicons/react/solid';
import direction from '../../public/direction.svg';
import Filter from './Filter';
import { AllOutletsProps } from '../../types/components/outlets/all_outlets';

export default function AllOutlets({ searchBar=true, outlets, applyFilter=(() => null) }: AllOutletsProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const updateSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Update search query to filter results when the user has entered up to 3 characters in the search field.
    // Reset it to default (i.e. display all results) when the search field is empty or erased.
    if (value.length === 0) setSearchQuery('');
    else if (value.length >= 3) setSearchQuery(value);
    return;
  }
  
  return (
    <>
      <InputGroup mb={6} display={searchBar ? 'flex' : 'none'}>
        <InputLeftElement pointerEvents='none' color='#B2BBB6'>
          <Icon as={SearchIcon} fontSize='1.2em' />
        </InputLeftElement>
        <Input type='text' placeholder='Search by name' _placeholder={{fontSize: 13}}
          focusBorderColor='brand.lime.500' onChange={updateSearchQuery}
        />
        <InputRightElement color='#B2BBB6'>
          <Filter applyFilter={applyFilter}>
            <Icon as={FilterIcon} fontSize='1.2em' cursor='pointer' />
          </Filter>
        </InputRightElement>
      </InputGroup>

      {outlets.length !== 0 &&
        <VStack spacing={4} align='start' bg='brand.nearWhite' borderRadius={3.5} py={5} pl={[3, 5]} pr={[3, 4]} divider={<StackDivider maxW='77%' borderColor='#B2BBB6' />}>
          {outlets.filter(outlet => outlet.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((outlet, index) => {
            const encodedUrl = encodeURIComponent(`${outlet.location.address}, ${outlet.location.city}, ${outlet.location.state}, ${outlet.location.country}`);
            
            return (
              <HStack key={outlet.name+index} spacing={2.5} w='full' justify='space-between'>
                <Image src={outlet.image} alt={outlet.name} width={87} height={87} />

                <VStack spacing={1} align='start'>
                  <Text color='brand.lime.700'>{outlet.name}</Text>
                  <Text color='brand.lime.700' fontSize={13}>{outlet.description}</Text>
                  <Center pt={1.5}>
                    {[...Array(5)].map((item, index) => (
                      <Icon key={index+1} as={index+1 <= outlet.rating ? StarIcon : OutlinedStarIcon} color='brand.yellow' fontSize={13} />
                    ))}
                    <Text display='inline-block' color='brand.lime.700' fontSize={10} ml={1.5}>{outlet.rating.toFixed(1)}</Text>
                  </Center>
                  <HStack spacing={2} fontSize={10}  divider={<StackDivider borderColor='#B2BBB6' />}>
                    <Text color='#B2BBB6'>Opens <Text as='span' color='brand.lime.500'>{outlet.opens}</Text></Text>
                    <Text color='#B2BBB6'>Closes <Text as='span' color='brand.lime.500'>{outlet.closes}</Text></Text>
                  </HStack>
                </VStack>

                <Center h={10}>
                  <Divider orientation='vertical' borderColor='#B2BBB6' />
                </Center>
                
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodedUrl}`} target='blank'>
                  <VStack spacing={0} align='center' cursor='pointer' title='This opens in Google Maps'>
                    <Box fontSize={0}>
                      <Image src={direction} alt='' />
                    </Box>
                    <Text color='brand.lime.700' fontSize={10}>Directions</Text>
                  </VStack>
                </a>
              </HStack>
            )
          })}
        </VStack>
      }
    </>
  )
}