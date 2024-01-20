import Image from "next/image";
import { Box, Button, Flex, Icon, Link as ChakraLink, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import young_male_with_khaki_shirt from "../../public/young_male_with_khaki_shirt.webp";
import scholarly_students_demo2 from "../../public/scholarly_students_demo2.webp";
import appstore from "../../public/appstore.svg";
import playstore from "../../public/playstore.svg";
import windows from "../../public/windows.svg";
import DownloadCard from "./DownloadCard";
import Testimonials, { Testimonial } from "../reusables/Testimonials";
import { AppProps } from "../../types/components/apps/app";
import { TestimonialProps } from "../../types/components/reusables/testimonials";
import { DownloadIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import DownloadPrompt from "./DownloadPrompt";
import { trackDownloadClick } from "../../utils";

export default function App({ appData, appPath }: AppProps) {
  const router = useRouter();

  const generateLogoAlt = () => {
    const urlSecondHalf = appData.logo_url.split('exam_logos%2F')[1];
    const imageName = urlSecondHalf.slice(0, urlSecondHalf.indexOf('.'));
    return (imageName + ' Logo');
  }

  const testimonials = appData.testimonials.map((testimonial: TestimonialProps, index: number) => (
    <Testimonial key={testimonial.full_name + index + 1} full_name={testimonial.full_name} user_type={testimonial.user_type}
      rating={testimonial.rating} profile_pic_sm={testimonial.profile_pic_sm} content={testimonial.content}
    />
  ));

  return (
    <Box>
      {/* Banner Section */}
      <Box as="section" bg="#F8C343" pt={7} px={{ base: 14, md: 16, lg: 32 }}>
        <Flex className='responsive_1440px'>
          <Box fontSize={0} flexBasis="23%" display={{ base: "none", md: "block" }}>
            <Image src={young_male_with_khaki_shirt} alt="A young male wearing a khaki shirt" priority />
          </Box>
          <Spacer />
          <Box fontSize={0} flexBasis={{ base: "100%", md: "53%" }} pos="relative">
            <Image src={scholarly_students_demo2} alt="Scholarly Students App Demo" priority />
            <Box maxW={{ md: "75px", lg: "100%" }} pos="absolute" bottom="-35px" right="-10px" display={{ base: "none", md: "block" }}>
              <Image src={appData.logo_url} alt={generateLogoAlt()} width={95} height={90} />
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* App Details */}
      <Flex as="section" justify='space-between' align='center' py={[8, "50px"]} px={[5, 12, 12, "120px"]}>
        <Stack flexBasis={{ base: '100%', lg: '75%' }} direction="row" spacing={{ base: 0, md: 10 }} justify="center" className='responsive_1440px'>
          <Box display={{ base: "none", md: "block" }} filter="drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25))">
            <Image src={appData.icon_url} alt={`${appData.name} Icon`} width={145} height={145} />
          </Box>
          <VStack spacing={4} align="start">
            <Text as="h1" color="brand.lime.700" lineHeight="120%" fontSize={[20, 32]} fontWeight="bold">{appData.name}</Text>
            <Text color="brand.lime.700" lineHeight="120%" fontSize={14} fontWeight="medium">{appData.description}</Text>
          </VStack>
        </Stack>
        {/*<Link passHref href={`/api/download?fileName=${name}`}>
          <ChakraLink isExternal onClick={trackDownloadClick}
            display={{ base: 'none', lg: 'inline' }} _hover={{ textDecoration: 'none' }}
          >
            <Button type="button" variant="solid" iconSpacing={{ base: 0, md: 4 }}
              rightIcon={<Icon display={{ base: "none", md: "inline-block" }} as={DownloadIcon} />}
            >
              Download
            </Button>
          </ChakraLink>
        </Link>*/}
        <Box display={{ base: "none", md: "block" }}>
          <DownloadPrompt
            app={{
              app_name: appData.name,
              path: appPath,
              download_link_android: appData.download_link_android,
              download_link_ios: appData.download_link_ios,
              download_link_desktop: appData.download_link_desktop,
              available_on_android: appData.available_on_android,
              available_on_ios: appData.available_on_ios,
              available_on_desktop: appData.available_on_desktop
            }} dark={true}
          />
        </Box>
      </Flex>

      {/* Download Section */}
      <Box as="section" pt={[6, 8]} pb={8} px={[5, 12, 12, "120px"]} bg={{ md: "linear-gradient(to bottom, white 50%, #FEF8E8 50%)" }}>
        <Stack direction={{ base: "column", md: "row" }} spacing={6} justify="center" className='responsive_1440px'>
          {
            appData.available_on_android &&
              <DownloadCard store_icon={playstore} platform="Android" app_rating={5} app_availability={appData.available_on_android}
                download_link={`/api/download?fileName=${appPath}&platform=android`}
                trackDownloadClick={() => trackDownloadClick(appData.name, "Android", "From Apps pages", [router.query.app as string])}
              />
          }

          {
            appData.available_on_ios &&
              <DownloadCard store_icon={appstore} platform="iOS" app_rating={5} app_availability={appData.available_on_ios}
                download_link={`/api/download?fileName=${appPath}&platform=ios`}
                trackDownloadClick={() => trackDownloadClick(appData.name, "iOS", "From Apps pages", [router.query.app as string])}
              />
          }

          {
            appData.available_on_desktop &&
              <DownloadCard store_icon={windows} platform="Windows" app_rating={5} app_availability={appData.available_on_desktop}
                download_link={`/api/download?fileName=${appPath}&platform=windows`}
                trackDownloadClick={() => trackDownloadClick(appData.name, "Windows", "From Apps pages", [], 2024)}
              />
          }
        </Stack>
      </Box>

      {/* Testimonials Section */}
      {testimonials.length !== 0 &&
        <Box as='section' bg='brand.nearWhite' pt={{ base: '60px', md: '82px' }} pb={{ base: '60px', md: '115px' }}>
          <Box textAlign='center' mb={{ base: '90px', md: 12 }} px={{ base: 5, md: 0 }}>
            <Text display='inline-block' color='brand.lime.700' textAlign='center'
              fontStyle='italic' fontSize={[20, 25]} fontWeight='medium' className='responsive_1440px'
            >
              What people are saying
              <svg xmlns="http://www.w3.org/2000/svg" width="303" height="13" viewBox="0 0 303 13" fill="none">
                <path d="M0.132744 4.5638C6.13126 4.69707 21.3276 18.538 111.105 7.02917C200.883 -4.47965 259.702 4.32892 302.058 11.2714" stroke="#F8C343" />
              </svg>
            </Text>
          </Box>
          <Testimonials testimonials={testimonials} />
        </Box>
      }
    </Box>
  )
}
