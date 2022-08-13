import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, ModalHeader } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { salesOutlets } from '../../data';
import useSearchFilter from '../../hooks/useSearchFilter';
import { ModalProps } from '../../types/generics/modal';
import AllOutlets from '../outlets/AllOutlets';
import NearYou from '../outlets/NearYou';

export default function CbtCentres({ isOpen, onClose }: ModalProps) {
  const { applyFilter, filteredOutlets, filterQueries, updateQueryList } = useSearchFilter(salesOutlets);

  return (
    <Modal size={['full', 'md']} isOpen={isOpen} onClose={onClose} scrollBehavior="inside" isCentered>
      <ModalOverlay />
      <ModalContent my={0} pt={3} pb={6} minH={{base: "90vh", '2xl': "70vh"}}>
        <ModalHeader color='brand.lime.700' pl={5}>CBT Centres</ModalHeader>
        <ModalCloseButton color='#F98A8A' top={6} />
        <ModalBody p={0} overflowX='hidden'>
          <Tabs isLazy>
            <TabList display='flex' justifyContent='space-around'>
              <Tab color='brand.lime.700' opacity={0.5} _selected={{
                  color: 'brand.lime.500', borderBottom: '4px solid', borderBottomColor: 'brand.lime.500',
                  borderBottomLeftRadius: 4, borderBottomRightRadius: 4, opacity: 1
                }}
              >
                All Outlets
              </Tab>
              <Tab color='brand.lime.700' opacity={0.5} _selected={{
                  color: 'brand.lime.500', borderBottom: '4px solid', borderBottomColor: 'brand.lime.500',
                  borderBottomLeftRadius: 4, borderBottomRightRadius: 4, opacity: 1
                }}
              >
                Near you
              </Tab>
            </TabList>

            <TabPanels px={[3, 5]} py={6}>
              <TabPanel p={0}>
                <AllOutlets outlets={filteredOutlets ? filteredOutlets : salesOutlets} applyFilter={applyFilter}
                  filterQueries={filterQueries} updateQueryList={updateQueryList}
                />
              </TabPanel>
              <TabPanel p={0}>
                <NearYou allOutlets={salesOutlets} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}