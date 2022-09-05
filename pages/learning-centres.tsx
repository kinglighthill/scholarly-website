import type { NextPage } from 'next';
import Page from "../components/reusables/Page";
import ComingSoon from "../components/reusables/ComingSoon";

const LearningCentres: NextPage = () => {
  return (
    <Page title="Scholarly Learning Centres - Find Learning Centres near you" description="Find hundreds of Scholarly-accredited learning centres around you where you can go in person to learn from the best tutors and with the best facilities">
      <ComingSoon feature='learning-centers' />
    </Page>
  )
}

export default LearningCentres;