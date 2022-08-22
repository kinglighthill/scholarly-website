import { Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, CheckboxGroup, VStack, Checkbox, useDisclosure } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { areas, countries, lgas, states } from '../../data';
import { FilterProps, TabItem } from '../../types/components/outlets/filter';

const tabs: string[] = ['Country', 'State', 'Area', 'LGA'];
const tabItems: TabItem[] = [
  { id: 'country', panel: countries },
  { id: 'state', panel: states },
  { id: 'city', panel: areas },
  { id: 'lga', panel: lgas },
];

export default function Filter({ children, applyFilter, filterQueries, updateQueryList }: FilterProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleApplyFilter = () => {
    onClose();
    applyFilter();
  }

  return (
    <Popover isLazy placement='bottom-end' isOpen={isOpen} onOpen={onOpen} onClose={onClose} closeOnBlur={false}>
      <PopoverTrigger>
        {children}
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        
        <PopoverBody>
          <Tabs>
            <TabList display='flex' justifyContent='space-between' px={3} pt={5} pb={0}>
              {tabs.map((tab, index) => (
                <Tab key={tab+index} px={2} py={1} color='brand.lime.700' opacity={0.5} _selected={{
                  color: 'brand.lime.500', borderBottom: '4px solid', borderBottomColor: 'brand.lime.500',
                  borderBottomLeftRadius: 4, borderBottomRightRadius: 4, opacity: 1
                }}>
                  {tab}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {tabItems.map((tabItem, index) => (
                <TabPanel key={index}>
                  <CheckboxGroup colorScheme="brand.lime" defaultValue={filterQueries[tabItem.id]} onChange={(value: string[]) => updateQueryList(tabItem.id, value)}>
                    <VStack spacing={5} align="start" w="full">
                      {tabItem.panel.map(item => (
                        <Checkbox key={item} value={item.toLowerCase()} spacing='8px !important' color='brand.lime.700'>
                          {item}
                        </Checkbox>
                      ))}
                    </VStack>
                  </CheckboxGroup>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </PopoverBody>

        <PopoverFooter color='brand.lime.500' bg='brand.lime.50' textAlign='center' fontWeight='medium' p={0}>
          <Button type='button' variant='unstyled' w='full' onClick={handleApplyFilter}>
            Apply filter
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}