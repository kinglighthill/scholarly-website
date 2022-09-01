import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Text } from "@chakra-ui/react";
import TermsPrivacySecurity from "../components/reusables/TermsPrivacySecurity";
import Page from "../components/reusables/Page";
import { fetchContent } from '../services/fetch_content.service';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetchContent('getSecurity/security');
    const content = await response.json();
    // Pass content to the page via props  
    return { props: { data: content.data } }
  }
  catch (error) {
    console.log('An error occurred: ' + error);
    return { props: { error: true } }
  }
}

const Security: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = props;

  return (
    <Page title="Security | Scholarly">
      <TermsPrivacySecurity page="security" title="Security"
        content={
          <>
            {data && data.content.split('\\n').map((item: string, index: number) => (
              <Text key={index+1} color="white">{item}</Text>
            ))}
          </>
        } 
      />
    </Page>
  )
}

export default Security;