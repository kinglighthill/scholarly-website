import { Box, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import GetStartedCard from "../../components/get_started/Card";
import Footer from "../../components/reusables/Footer";
import Navbar from "../../components/reusables/Navbar";
import { GetStartedCardProps } from "../../types/components/get_started/card";

const getStartedOptions: GetStartedCardProps[] = [
  { title: "Partners", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vitae faucibus sit male consectetur adipiscing elit. Id vitae faucibus sit male", btnHref: "/partners" },
  { title: "Students", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vitae faucibus sit male consectetur adipiscing elit. Id vitae faucibus sit male", btnHref: "/students" },
  { title: "Business", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vitae faucibus sit male consectetur adipiscing elit. Id vitae faucibus sit male", btnHref: "/business" },
]

export default function GetStarted() {
  return (
    <div>
      <Head>
        <title>Scholarly Africa | Get Started</title>
      </Head>
      <Navbar />

      <Box as="section" bg="brand.lime.700" m="auto" px={[5, "10%"]} pt={12} pb={28} borderBottom="1px solid" borderColor="brand.yellow">
        <Text as="h1" mb={5} color="brand.yellow" fontSize={39} fontWeight="medium">Get Started</Text>
        <Stack direction={["column", "row"]} spacing={5}>
          {getStartedOptions.map((option, index) => (
            <GetStartedCard key={index} title={option.title} description={option.description} btnHref={option.btnHref} />
          ))}
        </Stack>
      </Box>
    
      <Footer />
    </div>
  )
}
