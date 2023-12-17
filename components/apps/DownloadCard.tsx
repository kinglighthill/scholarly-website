import Image from "next/image";
import Link from "next/link";
import { Box, Button, Icon, Link as ChakraLink, Text, Tooltip, VStack } from "@chakra-ui/react";
import { DownloadIcon, StarIcon } from "@heroicons/react/solid";
import { StarIcon as OutlinedStarIcon } from "@heroicons/react/outline";
import { DownloadCardProps } from "../../types/components/apps/download_card";
// import { useEffect, useRef } from "react";

export default function DownloadCard({ store_icon, platform, app_rating, app_availability, download_link, trackDownloadClick }: DownloadCardProps) {
  // const downloadBtn = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   platform === "Android" && downloadBtn.current?.focus();
  // }, []);
  
  return (
    <Box maxW={{base: "full", md: "235px"}} py={[6, 8]} px={7} bg="white" borderRadius={8} boxShadow="0px 2.90312px 36.289px 17.4187px rgba(0, 0, 0, 0.08)">
      <VStack spacing={2} justify="flex-end">
        <Box maxW={["47px", "100%"]}>
          <Image src={store_icon} alt={platform} width={90} height={90} />
        </Box>
        <Box>
          {[...Array(5)].map((item, index) => (
            <Icon key={index+1} as={index+1 <= app_rating ? StarIcon : OutlinedStarIcon} color='brand.yellow' />
          ))}
        </Box>
        <Text textAlign="center">Download for {platform}</Text>
        <Tooltip hasArrow label={app_availability ? undefined : 'App is currently unavailable on this platform'} bg='blue.600' shouldWrapChildren>
          <Link passHref href={download_link ? download_link : '/apps/android'}>
            <ChakraLink isExternal _hover={{textDecoration: 'none'}} onClick={trackDownloadClick}>
              <Button disabled={!app_availability} type="button" variant="solid" iconSpacing={{base: 0, md: 4}}
                rightIcon={<Icon display={{base: "none", md: "inline-block"}} as={DownloadIcon} />}
              >
                Download
              </Button>
            </ChakraLink>
          </Link>
        </Tooltip>
      </VStack>
    </Box>
  )
}
