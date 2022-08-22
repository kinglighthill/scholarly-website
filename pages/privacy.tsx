import type { NextPage } from 'next';
import { Text } from "@chakra-ui/react";
import TermsPrivacySecurity from "../components/reusables/TermsPrivacySecurity";
import Page from "../components/reusables/Page";

const Privacy: NextPage = () => {
  return (
    <Page title="Scholarly Africa | Privacy">
      <TermsPrivacySecurity page="privacy" title="Privacy"
        content={
          <>
            <Text color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem </Text>
            <Text color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem </Text>
          </>
        } 
      />
    </Page>
  )
}

export default Privacy;