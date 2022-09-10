import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Page from '../../components/reusables/Page';
import Apps from '../../components/apps/Apps';
import { fetchContent } from '../../services/fetch_content.service';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetchContent('getApps/apps/desktop');
    const content = await response.json();
    // Pass content to the page via props  
    return { props: { data: content.data } }
  }
  catch (error) {
    console.log('An error occurred: ' + error);
    return { props: { error: true } }
  }
}

const DesktopApps: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = props;

  return (
    <Page title='Scholarly Desktop Apps - 30+ Apps for PC' description='Over 30+ offline desktop apps for PC available for JAMB, WAEC, Post UTME, NECO, BECE, etc.'>
      <Apps apps_info={data.ios} activeTab='desktop' />
    </Page>
  )
}

export default DesktopApps;