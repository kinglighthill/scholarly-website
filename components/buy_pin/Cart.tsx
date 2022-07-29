import Image from "next/image";
import { Box, Button, Flex, HStack, Icon, Input, ModalBody, ModalFooter, Spacer, Text, VStack } from "@chakra-ui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon, XIcon } from "@heroicons/react/solid";
import { BuyPinTabProps } from "../../types/components/reusables/buy_pin";
import { useCartContext } from "../../context/CartContext";
import { CartItem } from "../../types/context/cart_context";

export default function Cart({ changeTab }: BuyPinTabProps) {
  const [cart, updateCart] = useCartContext();

  let total: number = 0;
  // Calculate the total amount of all the items in the cart.
  cart.forEach(item => total += +item.price * +item.count);

  const updateCount = (index: number, replaceValue: number) => {
    const newItem: CartItem = { ...cart[index], count: replaceValue};
    // Create a copy of the cart to prevent mutation of state by the splice method.
    const newCart: CartItem[] = [...cart];
    newCart.splice(index, 1, newItem);

    updateCart(newCart);
  }

  const deleteCartItem = (index: number) => {
    const newCart: CartItem[] = [...cart];
    newCart.splice(index, 1);

    updateCart(newCart);
  }
  
  return (
    <>
      <ModalBody p={5}>
        <Flex mb={8}>
          <Button type="button" variant="unstyled" onClick={() => changeTab("select-apps")}>
            <Icon as={ArrowNarrowLeftIcon} mr={2} verticalAlign="middle" mb={0.5} />
            Back to Select Apps
          </Button>
          <Spacer />
          <Text color="brand.lime.700" p={2} borderRadius={4} bg="brand.lime.50">
            Total: ₦{total}
          </Text>
        </Flex>

        <VStack spacing={8} align="stretch">
          {cart.map((item, index) => (
            <Box key={index+1} p={4} bg="brand.nearWhite" borderRadius={10}>
              <Box textAlign="right" mb={2}>
                <Icon as={XIcon} color="#F98A8A" cursor="pointer" onClick={() => deleteCartItem(index)} />
              </Box>
              <Flex align="start">
                <HStack spacing={5} align="start">
                  <Image src={`/${item.image}`} alt="" width={61} height={61} />
                  <VStack spacing={1} align="start">
                    <Text color="brand.lime.700" opacity={0.5} fontSize={13}>{item.name}</Text>
                    <Text color="brand.lime.700">₦{item.price}</Text>
                  </VStack>
                </HStack>
                <Spacer />
                <VStack spacing={4}>
                  <HStack spacing={0}>
                    <Button p={2} bg="brand.lime.500" disabled={item.count === 0} onClick={() => updateCount(index, item.count-1)}>
                      <Icon as={MinusSmIcon} />
                    </Button>
                    <Input type="number" variant="unstyled" value={item.count} bgColor="white" maxW={8} minH={10} borderRadius={0}
                      textAlign="center" onChange={(e) => updateCount(index, +e.target.value)}
                    />
                    <Button p="2px !important" bg="brand.lime.500" onClick={() => updateCount(index, item.count+1)}>
                      <Icon as={PlusSmIcon} />
                    </Button>
                  </HStack>
                  <Text color="brand.lime.700">₦{item.count * +item.price}</Text>
                </VStack>
              </Flex>
            </Box>
          ))}
        </VStack>
      </ModalBody>

      <ModalFooter justifyContent="center">
        <Button type="button" variant="solid" disabled={total <= 0} onClick={() => changeTab("pay")}>
          Checkout
          <Icon as={ArrowNarrowRightIcon} ml={4} />
        </Button>
      </ModalFooter>
    </>
  )
}