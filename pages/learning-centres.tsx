import type { NextPage } from 'next';
import Page from "../components/reusables/Page";
import ComingSoon from "../components/reusables/ComingSoon";

const LearningCentres: NextPage = () => {
  return (
    <Page title="Scholarly Africa | Learning Centres">
      <ComingSoon />
    </Page>
  )
}

export default LearningCentres;