import { useEffect } from 'react';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Box, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import Slider from '../components/students/Slider';
import TopBanner from '../components/students/TopBanner';
import classes from '../styles/Students.module.css';
import Page from '../components/reusables/Page';
import Testimonials, { Testimonial } from '../components/reusables/Testimonials';
import { fetchContent } from '../services/fetch_content.service';
import { TestimonialProps } from '../types/components/reusables/testimonials';
import ExamApps from '../components/students/ExamApps';
import ActivationPins from '../components/students/ActivationPins';
import CbtCentresSection from '../components/students/CbtCentresSection';
import LearningCentresSection from '../components/students/LearningCentresSection';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetchContent('getTestimonials/testimonials/student');
    const content = await response.json();
    // Pass content to the page via props  
    return { props: { data: content.data } }
  }
  catch (error) {
    console.log('An error occurred: ' + error);
    return { props: { error: true } }
  }
}

const Students: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = props;

  const testimonials = data.map((testimonial: TestimonialProps, index: number) => (
    <Testimonial key={testimonial.full_name + index+1} full_name={testimonial.full_name} user_type={testimonial.user_type}
      rating={testimonial.rating} profile_pic_sm={testimonial.profile_pic_sm} content={testimonial.content}
    />
  ));

  // Remove cached data from the Buy Pin modal when the user leaves or refreshes the Students page.
  useEffect(() => {
    return () => sessionStorage.removeItem('selectedApps');
  }, []);
  
  return (
    <Page title='Scholarly For Students - Smash Any Exam' description='Smash your JAMB, WAEC, Post UTME, NECO, BECE and other exams with Scholarly Apps. Over 1 million students use Scholarly apps to study for their exams. Available for Android, iOS and Desktop.'>
      <TopBanner />
      <Slider />

      {/* Exam Apps, Activation Pins, and CBT Centres Section */}
      <Box as='section'>
        <Box maxW='100vw' px={{base: 5, lg: '120px'}} pt={['60px', '120px']} pb={['60px', 0, '130px']}>
          <SimpleGrid columns={{base: 1, md: 3}} spacingX={5} spacingY={["60px", "110px", 0]} fontSize={0}
            maxW='1440px' m='auto'
          >
            <GridItem className={classes.image_grid_item}>
              <ExamApps />
            </GridItem>
            <GridItem className={classes.image_grid_item}>
              <ActivationPins />
            </GridItem>
            <GridItem className={classes.image_grid_item}>
              <CbtCentresSection />
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>

      {/* Learning Centres Section */}
      <Box as='section' px={{base: 5, lg: '120px'}} pt={[0, '110px']} pb={['60px', '110px']} pos='relative'>
        <LearningCentresSection />
      </Box>

      {/* Testimonials Section */}
      <Box as='section' bgColor='brand.nearWhite' pt={{base: '60px', md: '82px'}} pb={{base: '60px', md: '115px'}}>
        <Box textAlign='center' mb={{base: '90px', md: 12}} px={{base: 5, md: 0}}>
          <Text display='inline-block' textAlign='center' px='42px' py='10px' borderRadius={4} bgColor='brand.lime.700' color='brand.nearWhite'
            fontSize={[20, 31]} fontWeight='medium' className='responsive_1440px'
          >
            What users are saying
          </Text>
        </Box>
        <Testimonials testimonials={testimonials} />
      </Box>    
    </Page>
  )
}

export default Students;