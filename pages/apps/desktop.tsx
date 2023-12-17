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
    <Page title='Scholarly Desktop Apps - 30+ Apps for PC' description='Over 30+ offline desktop apps for PC available for JAMB, WAEC, Post UTME, NECO, BECE, etc.'
      keywords={[
        'Learning', 'Learn', 'Study apps and notes', 'Students', 'Prepare for examinations', 'Ace your examinations', 'Android education apps', 'Desktop education apps', 'iOS education Apps', 'Playstore education apps', 'Google Education', 'Education blog',
        'utme past questions', 'post utme past questions', 'waec past questions', 'jamb past questions', 'wassce past questions', 'putme past questions', 'unilag examinations', 'unizik examinations', 'unn examinatons', 'uniport examinatons', 'unilorin examinatons', 'oau examinatons', 'UI examinatons', 'imsu examinatons',
        'absu examinatons', 'delsu examinations', 'futo examinations', 'futa examinations', 'futminna examinations', 'uniabuja examinations', 'unijos examinations', 'buk examinations', 'abu examinations', 'esut examinations',
        'funaab examinations', 'NDA examinations', 'uniben examinations', 'rsust examinations', 'unical examinations', 'literature examinations', 'bece examinations', 'jhs examinations', 'neco examinations',
        'unilag past questions', 'unizik past questions', 'unn examinatons', 'uniport examinatons', 'unilorin examinatons', 'oau examinatons', 'UI examinatons', 'imsu examinatons', 'absu examinatons',
        'delsu past questions', 'futo past questions', 'futa past questions', 'futminna past questions', 'uniabuja past questions', 'unijos past questions', 'buk past questions', 'abu past questions', 'esut past questions',
        'funaab past questions', 'NDA past questions', 'uniben past questions', 'rsust past questions', 'unical past questions', 'literature past questions', 'bece past questions', 'jhs past questions', 'neco past questions'
      ]}
    >
      <Apps apps_info={data} activeTab='desktop' />
    </Page>
  )
}

export default DesktopApps;