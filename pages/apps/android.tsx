import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Page from '../../components/reusables/Page';
import Apps from '../../components/apps/Apps';
import { fetchContent } from '../../services/fetch_content.service';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetchContent('getApps/apps/android');
    const content = await response.json();
    // Pass content to the page via props  
    return { props: { data: content.data } }
  }
  catch (error) {
    console.log('An error occurred: ' + error);
    return { props: { error: true } }
  }
}

const AndroidApps: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = props;

  return (
    <Page title='Scholarly Android Apps - 30+ Apps for Android' description='Over 30+ offline android apps available for JAMB, WAEC, Post UTME, NECO, BECE exams, etc.'>
      <Apps apps_info={data} activeTab='android' />
    </Page>
  )
}

export default AndroidApps;