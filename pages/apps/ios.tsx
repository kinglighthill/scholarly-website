import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Page from '../../components/reusables/Page';
import Apps from '../../components/apps/Apps';
import { fetchContent } from '../../services/fetch_content.service';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetchContent('getApps/apps/ios');
    const content = await response.json();
    // Pass content to the page via props  
    return { props: { data: content.data } }
  }
  catch (error) {
    console.log('An error occurred: ' + error);
    return { props: { error: true } }
  }
}

const IOSApps: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = props;
  
  return (
    <Page title='Scholarly iOS Apps - 30+ Apps for iPhone' description='Over 30+ offline iOS apps available for JAMB, WAEC, Post UTME, NECO, BECE exams etc.'>
      <Apps apps_info={data.ios} activeTab='ios' />
    </Page>
  )
}

export default IOSApps;