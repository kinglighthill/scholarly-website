import type { NextPage } from 'next';
import Page from "../components/reusables/Page";
import ComingSoon from "../components/reusables/ComingSoon";

const CbtCentres: NextPage = () => {
  return (
    <Page title="Scholarly CBT Centres - Find JAMB CBT Centres near you" description="Find hundreds of Scholarly-accredited CBT centres around you to practice for JAMB, WAEC, Post UTME, etc. with our robust softwares for PC"
      keywords={[
        'Scholarly CBT centres', 'enterprise software', 'cbt exam practice centres', 'cbt exam practice vendors', 'businesses', 'Scholarly exam centres',
        'Learning', 'Learn', 'Study apps and notes', 'Students', 'Prepare for examinations', 'Ace your examinations', 'education'
      ]}
    >
      <ComingSoon feature='cbt-centers' />
    </Page>
  )
}

export default CbtCentres;