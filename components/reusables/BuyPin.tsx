import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from "@chakra-ui/react";
import SelectApps from "../buy_pin/SelectApps";
import { ModalProps } from "../../types/generics/modal";
import { BuyPinTabOptions } from "../../types/components/reusables/buy_pin";

const Cart = dynamic(() =>
  import("../buy_pin/Cart")
);

const Pay = dynamic(() =>
  import("../buy_pin/Pay")
);

export default function BuyPin({ isOpen, onClose }: ModalProps) {
  const [tab, setTab] = useState<BuyPinTabOptions>("select-apps");
  const changeTab = (tab: BuyPinTabOptions) => {
    setTab(tab);
  }

  const closeBuyPinModal = () => {
    // Remove cached data when the user closes the modal from either the 'Select Apps' or the 'Pay' tab.
    // Reset the 'tab' state to its default value in case the user closed the modal from the 'Pay' tab.
    if (tab === "select-apps" || tab === "pay") {
      sessionStorage.removeItem("selectedApps")
      setTab("select-apps");
    };
    onClose();
  }

  return (
    <Modal size={['full', 'md']} isOpen={isOpen} onClose={closeBuyPinModal} scrollBehavior="inside" closeOnOverlayClick={false} isCentered>
      <ModalOverlay />
      <ModalContent my={0} minH={{base: "90vh", '2xl': "70vh"}}>
        <ModalHeader color="brand.lime.700">Buy Activation Pins</ModalHeader>
        <ModalCloseButton color='#F98A8A' top={3} />
        {tab === "select-apps" && <SelectApps changeTab={changeTab} />}
        {tab === "cart" && <Cart changeTab={changeTab} />}
        {tab === "pay" && <Pay changeTab={changeTab} />}
      </ModalContent>
    </Modal>
  )
}
