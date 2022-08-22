import type { NextPage } from 'next';
import Page from '../../components/reusables/Page';
import Apps from '../../components/apps/Apps';

const DesktopApps: NextPage = () => {
  return (
    <Page title='Scholarly Africa | Desktop Apps'>
      <Apps activeTab='desktop' />
    </Page>
  )
}

export default DesktopApps;