import Image from "next/image";
import { Box, Flex, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import young_male_with_khaki_shirt from "../../public/young_male_with_khaki_shirt.webp";
import scholarly_students_demo2 from "../../public/scholarly_students_demo2.webp";
import appstore from "../../public/appstore.svg";
import playstore from "../../public/playstore.svg";
import windows from "../../public/windows.svg";
import DownloadCard from "./DownloadCard";
import Testimonials, { Testimonial } from "../reusables/Testimonials";
import { AppProps } from "../../types/components/apps/app";
import { TestimonialProps } from "../../types/components/reusables/testimonials";

export default function App({ appData }: AppProps) {
  const generateLogoAlt = () => {
    const urlSecondHalf = appData.logo_url.split('exam_logos%2F')[1];
    const imageName = urlSecondHalf.slice(0, urlSecondHalf.indexOf('.'));
    return (imageName + ' Logo');
  }

  const testimonials = appData.testimonials.map((testimonial: TestimonialProps, index: number) => (
    <Testimonial key={testimonial.full_name + index+1} full_name={testimonial.full_name} user_type={testimonial.user_type}
      rating={testimonial.rating} profile_pic_sm={testimonial.profile_pic_sm} content={testimonial.content} bg="brand.nearWhite"
    />
  ));

  return (
    <Box>
      {/* Banner Section */}
      <Box as="section" bg="#F8C343" pt={7} px={{base: 14, md: 16, lg: 32}}>
        <Flex>
          <Box fontSize={0} flexBasis="23%" display={{base: "none", md: "block"}}>
            <Image src={young_male_with_khaki_shirt} alt="A young male wearing a khaki shirt" />
          </Box>
          <Spacer />
          <Box fontSize={0} flexBasis={{base: "100%", md: "53%"}} pos="relative">
            <Image src={scholarly_students_demo2} alt="Scholarly Students App Demo" />
            <Box maxW={{md: "75px", lg: "100%"}} pos="absolute" bottom="-35px" right="-10px" display={{base: "none", md: "block"}}>
              <Image src={appData.logo_url} alt={generateLogoAlt()} width={95} height={90} />
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* App Details */}
      <Box as="section" py="50px" px={[5, 12, 12, "120px"]} bg="brand.nearWhite">
        <Stack direction="row" spacing={{base: 0, md: 10}} justify="center">
          <Box display={{base: "none", md: "block"}}>
            <Image src={appData.icon_url} alt={`${appData.name} Icon`} width={145} height={145} style={{boxShadow: "0px 2.90312px 33px 8px rgba(0, 0, 0, 0.08)"}} />
          </Box>
          <VStack spacing={4} align="start">
            <Text as="h1" color="brand.lime.700" lineHeight="120%" fontSize={[20, 32]} fontWeight="bold">{appData.name}</Text>
            <Text color="brand.lime.700" lineHeight="120%" fontSize={14} fontWeight="medium">{appData.description}</Text>
          </VStack>
        </Stack>
      </Box>

      {/* Download Section */}
      <Box as="section" py={8} px={[5, 12, 12, "120px"]} bg={{md: "linear-gradient(to bottom, #F5F6F6 50%, white 50%)"}}>
        <Stack direction={{base: "column", md: "row"}} spacing={6} justify="center">
          <DownloadCard store_icon={playstore} store_name="PlayStore" app_rating={5} app_availability={appData.available_on_android} download_link={appData.download_link_android} />
          <DownloadCard store_icon={appstore} store_name="Appstore" app_rating={5} app_availability={appData.available_on_ios} />
          <DownloadCard store_icon={windows} store_name="Microsoft Store" app_rating={5} app_availability={appData.available_on_desktop} />
        </Stack>
      </Box>

      {/* Testimonials Section */}
      {testimonials.length !== 0 &&
        <Box as='section' bg='white' pt={{base: '60px', md: '82px'}} pb={{base: '60px', md: '115px'}}>
          <Box textAlign='center' mb={{base: '90px', md: 12}} px={{base: 5, md: 0}}>
            <Text display='inline-block' textAlign='center' px='42px' py='10px' borderRadius={4} bgColor='brand.lime.700' color='brand.nearWhite' fontSize={[20, 31]} fontWeight='medium'>
              What people are saying
            </Text>
          </Box>
          <Testimonials testimonials={testimonials} />
        </Box>
      }
    </Box>
  )
}
