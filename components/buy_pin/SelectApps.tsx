import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Checkbox, CheckboxGroup,  HStack, Icon, Select, Text, VStack } from "@chakra-ui/react";
import { ModalBody, ModalFooter } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useCartContext } from "../../context/CartContext";
import { BuyPinTabProps } from "../../types/components/reusables/buy_pin";
import { apps } from "../../data";
import { CartItem } from "../../types/context/cart_context";
import { SelectedApps } from "../../types/components/buy_pin/select_apps";

export default function SelectApps({ changeTab }: BuyPinTabProps) {
  const [platform, setPlatform] = useState<string>('android');
  const [selectedApps, setSelectedApps] = useState<SelectedApps>({});
  const [cart, updateCart] = useCartContext();

  // Cache selected apps in session storage.
  const rememberSelectedApps = () => {
    sessionStorage.setItem('selectedApps', JSON.stringify(selectedApps));
  }

  useEffect(() => {
    // Remember selected apps (cached in session storage) when the user switches back to the 'Select Apps' tabs.
    const previouslySelectedApps = sessionStorage.getItem('selectedApps');
    previouslySelectedApps && setSelectedApps(JSON.parse(previouslySelectedApps));
  }, []);

  // Change the app platform category. The options available are android, ios, and desktop
  const changePlatform = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlatform(e.target.value);
  }

  const updateSelectedApps = (value: string[], category_name: string) => {
    if (value.length === 0) {
      // Discard the entire object property corresponding to a checkbox group if its value is an empty array.
      // This is done because of the way the data in the selectedApps state is used in the populateCart() function below.
      const { [category_name]: discarded, ...rest } = selectedApps;
      setSelectedApps(rest);
      return;
    }
    setSelectedApps({...selectedApps, [category_name]: value})
  }

  const populateCart = () => {
    // Extract the app name, image, and price from the encoded checkbox value.
    // Checkbox values were encoded as string because the CheckboxGroups that wrap them expect only strings or numbers as the elements of the CheckboxGroup's value array.
    const decodeString = (string: string) => {
      const [name, image, price] = string.split('%');
      return { name, image, price };
    }

    // Store all selected apps in an array, regardless of the app category.
    const allApps: string[] = [];
    Object.values(selectedApps).map((value: string[]) => {
      allApps.push(...value);
    })
    
    const cartItems: CartItem[] = allApps.map(app => {
      const appDetails = decodeString(app);
      // If the selected app already exists in the cart, do not change the existing item count, else set the count to the default value - 1.
      const existsInCart = cart.find(item => item.name === appDetails.name);
      const count = existsInCart ? existsInCart.count : 1;
      return ({...appDetails, count});
    });

    return cartItems;
  }

  const handleNavigation = () => {
    rememberSelectedApps();
    updateCart(populateCart());
    changeTab('cart');
  }

  return (
    <>
      <ModalBody>
        <Select aria-label="Select App Category" placeholder="Select Category" value={platform}
          onChange={changePlatform} mb={6} _focus={{borderColor: "brand.lime.500"}} _focusVisible={{boxShadow: "0 0 0 1px #46AC66"}}
        >
          <option value='android'>Android Apps</option>
          <option value='desktop'>Desktop Apps</option>
          <option value='ios'>IOS Apps</option>
        </Select>
        <VStack spacing={7} align="start">
          {apps[platform].map(category => (
            <VStack key={category.category_name} spacing={3} align="start" w="full">
              <Text color="brand.lime.500" fontSize={20} fontWeight="medium">{category.category_name}</Text>
              <CheckboxGroup colorScheme="brand.lime" value={selectedApps[category.category_name]} onChange={(value: string[]) => updateSelectedApps(value, category.category_name)}>
                <VStack spacing={4} align="start" w="full">
                  {category.apps.map(app => (
                    <Checkbox key={app.name} value={`${app.name}%${app.logo.url}%${app.price}`} 
                      w="full" flexDir="row-reverse" justifyContent="space-between" pr={3}
                    >
                      <HStack>
                        <Image src={app.logo.static_img} alt={`${app.name} Logo`} width={24} height={24} />
                        <Text color="brand.lime.700" fontSize={20}>{app.name}</Text>
                      </HStack>
                    </Checkbox>
                  ))}
                </VStack>
              </CheckboxGroup>
            </VStack>
          ))}
        </VStack>
      </ModalBody>

      <ModalFooter justifyContent="center">
        <Button type="button" variant="solid" disabled={Object.entries(selectedApps).length === 0} onClick={handleNavigation}>
          Next
          <Icon as={ChevronRightIcon} ml={4} />
        </Button>
      </ModalFooter>
    </>
  )
}