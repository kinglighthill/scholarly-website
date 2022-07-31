import { Text } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../../components/reusables/Footer";
import Navbar from "../../components/reusables/Navbar";
import TermsPrivacySecurity from "../../components/reusables/TermsPrivacySecurity";

export default function Security() {
  return (
    <div>
      <Head>
        <title>Scholarly Africa | Security</title>
      </Head>
      <Navbar />

      <main>
        <TermsPrivacySecurity page="security" title="Security"
          content={
            <>
              <Text color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem </Text>
              <Text color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem </Text>
            </>
          } 
        />
      </main>

      <Footer />
    </div>
  )
}
