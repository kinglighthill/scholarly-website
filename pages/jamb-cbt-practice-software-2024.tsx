import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Page from "../components/reusables/Page";
import { Box, Text } from "@chakra-ui/react";
import Testimonials, { Testimonial } from "../components/reusables/Testimonials";
import { TestimonialProps } from "../types/components/reusables/testimonials";
import { fetchContent } from "../services/fetch_content.service";
import AppFeatures from "../components/jamb_cbt_practice/AppFeatures";
import Banner from "../components/jamb_cbt_practice/Banner";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const response = await fetchContent('getApps/apps/jamb-utme');
    const content = await response.json();
    // Pass content to the page via props  
    return { props: { data: content.data } }
  }
  catch (error) {
    console.log('An error occurred in the getStaticProps function: ' + error);
  }
  return { props: { error: true } }
}

const JambCbtPracticeSoftware: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = props;

  const testimonials = data.testimonials.map((testimonial: TestimonialProps, index: number) => (
    <Testimonial key={testimonial.full_name + index+1} full_name={testimonial.full_name} user_type={testimonial.user_type}
      rating={testimonial.rating} profile_pic_sm={testimonial.profile_pic_sm} content={testimonial.content}
    />
  ));
  
  return (
    <Page title='2024 JAMB CBT Practice Software' description='Prepare for your JAMB exam with Scholarly JAMB CBT Practice Software. Over 1 million students use Scholarly apps to study for their exams.'
      keywords={[
        'utme', 'jamb', 'exam novels', 'literature novels', 'Education', 'Learning', 'Learn', 'Study apps and notes', 'Students', 'Prepare for examinations', 'Ace your examinations',
        'JAMB CBT', 'JAMB CBT practice', 'Mock exam', 'JAMB CBT mock exam', 'Desktop education apps', 'Google Education', 'Education blog', 'School',
      ]}
    >
      {/* Slider Section */}
      <Banner />

      {/* Features Section */}
      <Box as='section'>
        <AppFeatures />
      </Box>

      {/* Testimonials Section */}
      <Box as='section' bg='brand.nearWhite' pt={{base: '60px', md: '82px'}} pb={{base: '60px', md: '115px'}}>
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

export default JambCbtPracticeSoftware;