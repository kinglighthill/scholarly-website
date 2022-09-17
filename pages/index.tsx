import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Box, Button, HStack, Link as ChakraLink, Stack, Text } from '@chakra-ui/react';
import Business from '../components/home/Business';
import Students from '../components/home/Students';
import Partners from '../components/home/Partners';
import Testimonials, { Testimonial } from '../components/reusables/Testimonials';
import TopBanner from '../components/home/TopBanner';
import Page from '../components/reusables/Page';
import { statistics } from '../data';
import { fetchContent } from '../services/fetch_content.service';
import { TestimonialProps } from '../types/components/reusables/testimonials';
import classes from '../styles/Home.module.css';
import useSWR from 'swr';
import BlogPost from '../components/reusables/BlogPost';
import { BlogPostData } from '../types/components/reusables/blog_post';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetchContent('getTestimonials/testimonials');
    const content = await response.json();
    // Pass content to the page via props  
    return { props: { data: content.data } }
  }
  catch (error) {
    console.log('An error occurred: ' + error);
    return { props: { error: true } }
  }
}

const fetcher = (args: string) => fetchContent(args).then((res) => res.json());

const Home: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data: blogPosts, error } = useSWR('getBlogPosts/blog-posts/recent', fetcher);
  const { data } = props;
  const testimonials = data.map((testimonial: TestimonialProps, index: number) => (
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

      {/* Blog Section */}
      {blogPosts && 
        <Box as="section" className={classes.blog_section}>
          <Text as='h2' color='brand.lime.700' mb={12} textAlign='center' fontSize={31} fontWeight='bold'>From Our Blog</Text>
          <Stack spacing={5} direction={{base: 'column', md: 'row'}} w='full' justify='space-between' align={{base: 'center', md: 'stretch'}}>
            {blogPosts.data.posts.map((post: BlogPostData) => (
              <BlogPost key={post.url} post_data={post} />
            ))}
          </Stack>
          <Box textAlign='center' mt={10}>
            <ChakraLink href='https://blog.scholarly.africa/' target='_blank' _hover={{textDecoration: 'none'}}>
              <Button type='button' variant='solid'>Go to Blog</Button>
            </ChakraLink>
          </Box>
        </Box>
      }
    </Page>
  )
}

export default Home
