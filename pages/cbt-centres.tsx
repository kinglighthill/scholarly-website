import type { NextPage } from 'next';
import Page from "../components/reusables/Page";
import ComingSoon from "../components/reusables/ComingSoon";

const CbtCentres: NextPage = () => {
  return (
    <Page title="Scholarly CBT Centres - Find JAMB CBT Centres near you" description="Find hundreds of Scholarly-accredited CBT centres around you to practice for JAMB, WAEC, Post UTME, etc. with our robust softwares for PC">
      <ComingSoon feature='cbt-centers' />
    </Page>
  )
}

export default CbtCentres;