import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Text } from "@chakra-ui/react";
import TermsPrivacySecurity from "../components/reusables/TermsPrivacySecurity";
import Page from "../components/reusables/Page";
import { fetchContent } from '../services/fetch_content.service';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetchContent('getTermsOfService/tos');
    const content = await response.json();
    // Pass content to the page via props  
    return { props: { data: content.data } }
  }
  catch (error) {
    console.log('An error occurred: ' + error);
    return { props: { error: true } }
  }
}

const Terms: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = props;

  return (
    <Page title="Terms of Service | Scholarly Africa" 
      keywords={[
        "Scholarly's Terms of Service", "Scholarly's Terms and Conditions", "Purpose of Scholarly", "Entities in Scholarly",
        "Scholarly Device Activation", "Scholarly Affiliates", "Scholarly's licences", "Scholarly's data protection"
      ]}
    >
      <TermsPrivacySecurity page="terms" title="Terms of Service" content={data.content} />
    </Page>
  )
}

export default Terms;