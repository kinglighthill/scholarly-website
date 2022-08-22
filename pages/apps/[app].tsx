import type { NextPage } from 'next';
import Page from '../../components/reusables/Page';
import App from '../../components/apps/App';

const AppPage: NextPage = () => {
  return (
    <Page title='Scholarly Africa | Apps'>
      <App />
    </Page>
  )
}

export default AppPage;