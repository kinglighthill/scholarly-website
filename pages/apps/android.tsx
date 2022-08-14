import type { NextPage } from 'next';
import Page from '../../components/reusables/Page';
import Apps from '../../components/apps/Apps';

const AndroidApps: NextPage = () => {
  return (
    <Page title='Scholarly Africa | Android Apps'>
      <Apps activeTab='android' />
    </Page>
  )
}

export default AndroidApps;