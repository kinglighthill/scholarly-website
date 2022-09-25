import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Box, HStack, Text } from '@chakra-ui/react';
import Business from '../components/home/Business';
import Students from '../components/home/Students';
import Partners from '../components/home/Partners';
import Testimonials, { Testimonial } from '../components/reusables/Testimonials';
import TopBanner from '../components/home/TopBanner';
import Page from '../components/reusables/Page';
import { statistics } from '../data';
import { fetchContent } from '../services/fetch_content.service';
import { TestimonialProps } from '../types/components/reusables/testimonials';
import Blog from '../components/home/Blog';
import FAQs from '../components/home/FAQs';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const endpoints: string[] = ['getTestimonials/testimonials', 'getFAQs/faqs'];
    const responses = await Promise.all(endpoints.map(endpoint => fetchContent(endpoint)));
    const contents = await Promise.all(responses.map(response => response.json()));
    const data = contents.map(content => content.data);
    // Pass data to the page via props  
    return { props: { data } }
  }
  catch (error) {
    return { props: { error: true } }
  }
}

const Home: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [ testimonialsData, faqsData ] = props.data;
  const testimonials = testimonialsData.map((testimonial: TestimonialProps, index: number) => (
    <Testimonial key={testimonial.full_name + index+1} full_name={testimonial.full_name} user_type={testimonial.user_type}
      rating={testimonial.rating} profile_pic_sm={testimonial.profile_pic_sm} content={testimonial.content}
    />
  ));
  
  return (
    <Page title='Scholarly | Improved Learning, Better Academic Performance'
      description='Ace your JAMB, WAEC, Post UTME, NECO, BECE, and other exams with Scholarly Apps. Over 1 million students use Scholarly apps to study for their exams. Available for Android, iOS and Desktop.'
    >
      <TopBanner />
      <Students />
      <Partners />
      <Business />

      {/* Statistics section */}
      <Box as="section" bgColor='brand.lime.700' py={{base: 7, md: 98}}>
        <HStack spacing={[6, 8, '60px', '145px']} justify='center'>
          {statistics.map(statistic => (
            <Box key={statistic.title}>
              <Text color='brand.yellow' fontSize={{base: 16, md: 31}} fontWeight='semibold' textAlign='center'>{statistic.value}</Text>
              <Text color='white' fontSize={{base: 10, md: 25}} fontWeight='light' textAlign='center'>{statistic.title}</Text>
            </Box>
          ))}
        </HStack>
      </Box>

      {/* Testimonials Section */}
      <Box as='section' bgColor='brand.nearWhite' pt={{base: '60px', md: '82px'}} pb={{base: '60px', md: '115px'}}>
        <Box textAlign='center' mb={{base: '90px', md: 12}} px={{base: 5, md: 0}}>
          <Text display='inline-block' textAlign='center' px='42px' py='10px' borderRadius={4} bgColor='brand.lime.700' color='brand.nearWhite' fontSize={[20, 31]} fontWeight='medium'>
            What people are saying
          </Text>
        </Box>
        <Testimonials testimonials={testimonials} />
      </Box>

      <Blog />
      <FAQs data={faqsData} />
    </Page>
  )
}

export default Home
