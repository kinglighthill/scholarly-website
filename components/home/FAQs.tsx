import { Box, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import { useFaqsContext } from '../../context/FaqsContext';
import classes from '../../styles/Home.module.css';
import { FAQ } from '../../types/components/faqs/questions';
import Questions from '../faqs/Questions';
import CustomLink from '../reusables/CustomLink';

export default function FAQs({ data }: { data: FAQ[]}) {
  const [faqsSection, setFaqsSection] = useFaqsContext();

  return (
    <Box as='section' bg='brand.nearWhite' className={classes.faqs_section}>
      <Text as='h2' color='brand.lime.700' mb={8} textAlign='center' fontSize={[25, 31]} fontWeight='bold' className='responsive_1440px'>
        Frequently Asked Questions (FAQs)
      </Text>
      <Tabs variant='unstyled' isLazy maxW="min(800px, 95%)" m="auto" className='responsive_1440px'
        onChange={index => setFaqsSection(index)}
      >
        <TabList mb={9} color="brand.lime.700" justifyContent="center">
          <Tab pl={0} _selected={{pl: 4, borderRadius: 4, color: "white", bg: "brand.lime.500"}}>Students</Tab>
          <Tab _selected={{borderRadius: 4, color: "white", bg: "brand.lime.500"}}>Partners</Tab>
          <Tab _selected={{borderRadius: 4, color: "white", bg: "brand.lime.500"}}>Business</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <Questions questions={data} category="student" color="35, 61, 44" max={4} search={false} />
          </TabPanel>
          <TabPanel p={0}>
            <Questions questions={data} category="partner" color="35, 61, 44" max={4} search={false} />
          </TabPanel>
          <TabPanel p={0}>
            <Questions questions={data} category="business" color="35, 61, 44" max={4} search={false}  />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box textAlign='center' mt={9} className='responsive_1440px'>
        <CustomLink href='/faqs' prefetch={false} type='button' variant='solid' iconSpacing={4} rightIcon={<Icon as={ArrowNarrowRightIcon} />}>
          View All
        </CustomLink>
      </Box>
    </Box>
  )
}
