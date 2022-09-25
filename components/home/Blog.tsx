import { Box, Button, Link as ChakraLink, Stack, Text } from '@chakra-ui/react';
import useSWR from 'swr';
import { fetchContent } from '../../services/fetch_content.service';
import { BlogPostData } from '../../types/components/reusables/blog_post';
import BlogPost from '../reusables/BlogPost';
import classes from '../../styles/Home.module.css';

const fetcher = (args: string) => fetchContent(args).then((res) => res.json());

export default function Blog() {
  const { data: blogPosts, error } = useSWR('getBlogPosts/blog-posts/recent', fetcher);

  return (
    blogPosts && 
      <Box as="section" className={classes.blog_section}>
        <Text as='h2' color='brand.lime.700' mb={12} textAlign='center' fontSize={[25, 31]} fontWeight='bold'>From Our Blog</Text>
        <Stack spacing={5} direction={{base: 'column', md: 'row'}} w='full' justify='space-between' align={{base: 'center', md: 'stretch'}}>
          {blogPosts.data.posts.map((post: BlogPostData) => (
            <BlogPost key={post.url} post_data={post} />
          ))}
        </Stack>
        <Box textAlign='center' mt={10}>
          <ChakraLink href='https://blog.scholarly.africa/' isExternal _hover={{textDecoration: 'none'}}>
            <Button type='button' variant='solid'>Go to Blog</Button>
          </ChakraLink>
        </Box>
      </Box>
  )
}
