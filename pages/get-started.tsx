import type { NextPage } from 'next';
import { Box, Stack, Text } from "@chakra-ui/react";
import GetStartedCard from "../components/get_started/Card";
import { GetStartedCardProps } from "../types/components/get_started/card";
import Page from "../components/reusables/Page";

const getStartedOptions: GetStartedCardProps[] = [
  { title: "Partners", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vitae faucibus sit male consectetur adipiscing elit. Id vitae faucibus sit male", btnHref: "/partners" },
  { title: "Students", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vitae faucibus sit male consectetur adipiscing elit. Id vitae faucibus sit male", btnHref: "/students" },
  { title: "Business", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id vitae faucibus sit male consectetur adipiscing elit. Id vitae faucibus sit male", btnHref: "/business" },
]

const GetStarted: NextPage = () => {
  return (
    <Page title="For Students, Partners and Businesses" description="Scholarly is available for students sitting for exams, partners who aim to make profit from reselling activation pins, and businesses who want to increase their revenues with our enterprise software.">
      <Box as="section" bg="brand.lime.700" m="auto" px={[5, "10%", 7, "10%"]} pt={12} pb={28} borderBottom="1px solid" borderColor="brand.yellow">
        <Text as="h1" mb={5} color="brand.yellow" fontSize={39} fontWeight="medium">Get Started</Text>
        <Stack direction={{base: "column", md: "row"}} spacing={5}>
          {getStartedOptions.map((option, index) => (
            <GetStartedCard key={index} title={option.title} description={option.description} btnHref={option.btnHref} />
          ))}
        </Stack>
      </Box>
    </Page>
  )
}

export default GetStarted;