import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Box, HStack, Icon, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import activation_pins from '../../public/activation_pins.webp';
import CustomLink from '../reusables/CustomLink';

const CartProvider = dynamic(() =>
  import("../../context/CartContext")
);

const BuyPin = dynamic(() =>
  import("../reusables/BuyPin")
);

const PinOutlets = dynamic(() =>
  import("../reusables/PinOutlets")
);

export default function ActivationPins() {
  const { isOpen: isSalesOuletsOpen, onOpen: openSalesOutlets, onClose: closeSalesOutlets } = useDisclosure();
  const { isOpen: isBuyPinOpen, onOpen: openBuyPin, onClose: closeBuyPin } = useDisclosure();

  return (
    <>
    
      <VStack spacing={4} align={{base: "start", md: "center"}} h="100%">
        <Box fontSize={0}>
          <Image src={activation_pins} alt="" />
        </Box>
        <VStack align='start' justify='space-between' h='100%' maxW={{base: '100%', md: '89%'}}>
          <Box mb={4}>
            <Text as='h1' color='brand.lime.700' mb={3} fontSize={[23, 25]} fontWeight='bold'>Activation Pins</Text>
            <Text color='brand.lime.700' fontSize={16}>Get 16 digits activation pin to unlock all the locked contents in Scholarly apps.</Text>
          </Box>
          <HStack spacing={{base: 0, xl: 2}}>
            {/* <Button type='button' variant='solid' display={{base: 'none', xl: 'inline-flex'}} onClick={openBuyPin}
              iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}
            >
              Buy now
            </Button> */}
            {/* When pin sales outlets are available, remove the CustomLink and uncomment the Button */}
            <CustomLink href='/pin-sales-outlets' type='button' variant='outline' fontSize={16} iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}>
              {/* <Button
                onClick={openSalesOutlets}
              > */}
                Sales Outlets
              {/* </Button> */}
            </CustomLink>
          </HStack>
        </VStack>
      </VStack>

      <CartProvider>
        <BuyPin isOpen={isBuyPinOpen} onClose={closeBuyPin} />
      </CartProvider>
      <PinOutlets isOpen={isSalesOuletsOpen} onClose={closeSalesOutlets} />
    </>
  )
}
