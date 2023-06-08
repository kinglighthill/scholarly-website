import type { NextPage } from 'next';
import Page from "../components/reusables/Page";
import ComingSoon from "../components/reusables/ComingSoon";

const Business: NextPage = () => {
  return (
    <Page title="Scholarly For Business - Run your Business with Scholarly Enterprise Software"
      description="Own a School, CBT Centre or Cyber Cafe? Increase your revenue with our Enterprise Software. Request a demo now!"
      keywords={['enterprise software', 'cbt exam practice centres', 'cbt exam practice vendors', 'business', 'Scholarly exam centres']}
    >
      <ComingSoon feature='scholarly-for-business' />
    </Page>
  )
}

export default Business;