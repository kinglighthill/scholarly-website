import { useState } from "react";
import dynamic from "next/dynamic";
import { Box, Button, HStack, Icon, Input, InputGroup, InputLeftElement, VStack, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import { Outlet } from '../../types/data';
import useLocation from "../../hooks/useLocation";

const AllOutlets = dynamic(() =>
  import("./AllOutlets")
);

export default function NearYou({ allOutlets }: {allOutlets: Outlet[]}) {
  const [outlets, setOutlets] = useState<Outlet[]>([]);
  const { address, setAddress } = useLocation();
  const mapsApiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;

  const updateAddress = (address: string) => {
    setAddress(address);
  }

  const filterOutlets = (filterQuery: string) => {
    const query: string = filterQuery.toLowerCase();
    // Check for a city-state, state-country, or city-state-country match between the user-provided address and the locations/addresses of the outlets.
    // Return only outlets that match any of the three criteria.
    const filteredOutlets: Outlet[] = allOutlets.filter(outlet => {
      const city: string = outlet.location.city.toLowerCase();
      const state: string = outlet.location.state.toLowerCase();
      const country: string = outlet.location.country.toLowerCase();
      const city_state_match: boolean = query.includes(city) && query.includes(state);
      const state_country_match: boolean = query.includes(state) && query.includes(country);
      const state_country_city_match: boolean = query.includes(city) && query.includes(state) && query.includes(country);
      
      return city_state_match || state_country_match || state_country_city_match;
    })
    
    setOutlets(filteredOutlets);
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Access the value of the input field with the name 'address'.
    const addressInput: string = (e.target as HTMLFormElement).address.value;
    
    updateAddress(addressInput);
    filterOutlets(addressInput);
  }


  return (
    <>
      <Box borderRadius={3.5} mb={5}>
        <VStack spacing={2} align='start' bg='brand.nearWhite' borderTopRadius={3.5} pt={5} pb={2.5} px={[4, 5]}>
          <form aria-label="Search for outlets near you" onSubmit={handleSearch} style={{width: '100%'}}>
            <FormControl>
              <FormLabel htmlFor='address' color='brand.lime.700' fontSize={13} fontWeight='medium' mb={2}>Where are you?</FormLabel>
              <HStack spacing={0.5} align='center' w='full'>
                <InputGroup>
                  <InputLeftElement pointerEvents='none' color='#B2BBB6'>
                    <Icon as={LocationMarkerIcon} fontSize='1.2em' />
                  </InputLeftElement>
                  <Input id='address' name='address' type='text' defaultValue={address} bg='white' focusBorderColor='brand.lime.500'
                    placeholder='E.g. Ilupeju, Lagos, Nigeria' _placeholder={{fontSize: 13}}
                  />
                </InputGroup>
                <Button type='submit' variant='solid'>Search</Button>
              </HStack>
              <FormHelperText fontSize={11}>For better search accuracy, we recommend that you include the city, state, and country in the address provided. Check below the map to see your search results.</FormHelperText>
            </FormControl>
          </form>
        </VStack>
        {address && <iframe src={`https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${encodeURIComponent(address)}`} width="100%" height="200" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>}
      </Box>

      <AllOutlets searchBar={false} outlets={outlets} />
    </>
  )
}