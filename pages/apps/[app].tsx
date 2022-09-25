import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Page from '../../components/reusables/Page';
import App from '../../components/apps/App';
import { fetchContent } from '../../services/fetch_content.service';
import { Apps } from '../../types/components/apps/apps';

interface Path {
  params: { app: string },
}

const generateAppPaths = (appData: Apps[]) => {
  const appPaths: string[] = [];
  appData.map((item) => {
    item.apps.map((app) => {
      appPaths.push(app.path);
    })
  });

  return appPaths;
}

// This function gets called at build time
export async function getStaticPaths() {
  let paths: Path[] = [];

  try {
    const response = await fetchContent('getApps/apps');
    const content = await response.json();
    // Get the paths we want to pre-render based on the app data
    const androidAppPaths = generateAppPaths(content.data.android);
    const iosAppPaths = generateAppPaths(content.data.ios);
    const desktopAppPaths = generateAppPaths(content.data.desktop);
    // Deduplicate paths by merging the paths from each category and converting to a set. Then, convert back to an array.
    const allPaths = Array.from(new Set([...androidAppPaths, ...iosAppPaths, ...desktopAppPaths]));

    paths = allPaths.map(path => ({
      params: { app: path },
    }))
  }
  catch (error) {
    console.log('An error occurred in the getStaticPaths function: ' + error);
  }

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the app path as obtained from getStaticPaths() above.
  // If the route is like /apps/jamb-utme, then params.id is 'jamb-utme'
  if (params && params.app) {
    try {
      const response = await fetchContent(`getApps/apps/${params.app}`);
      const content = await response.json();
      // Pass content to the page via props  
      return { props: { data: content.data } }
    }
    catch (error) {
      console.log('An error occurred in the getStaticProps function: ' + error);
    }
  }
  return { props: { error: true } }
}

const AppPage: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = props;
  
  return (
    <Page title='Scholarly Africa | Apps'>
      <App appData={data} />
    </Page>
  )
}

export default AppPage;