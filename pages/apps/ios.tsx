import type { NextPage } from 'next';
import Page from '../../components/reusables/Page';
import Apps from '../../components/apps/Apps';

const IOSApps: NextPage = () => {
  return (
    <Page title='Scholarly Africa | IOS Apps'>
      <Apps activeTab='ios' />
    </Page>
  )
}

export default IOSApps;