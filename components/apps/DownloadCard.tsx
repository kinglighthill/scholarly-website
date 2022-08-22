import Image from "next/image";
import Link from "next/link";
import { Box, Button, Icon, Text, VStack } from "@chakra-ui/react";
import { DownloadIcon, StarIcon } from "@heroicons/react/solid";
import { StarIcon as OutlinedStarIcon } from "@heroicons/react/outline";
import { DownloadCardProps } from "../../types/components/apps/download_card";


export default function DownloadCard({ storeIcon, storeName, appRating }: DownloadCardProps) {
  return (
    <Box maxW={{base: "full", md: "225px"}} py={[6, 8]} px={7} bg="white" borderRadius={8} boxShadow="0px 2.90312px 36.289px 17.4187px rgba(0, 0, 0, 0.08)">
      <VStack spacing={2}>
        <Box maxW={["47px", "100%"]}>
          <Image src={storeIcon} alt={storeName} width={90} height={90} />
        </Box>
        <Box>
          {[...Array(5)].map((item, index) => (
            <Icon key={index+1} as={index+1 <= appRating ? StarIcon : OutlinedStarIcon} color='brand.yellow' />
          ))}
        </Box>
        <Text textAlign="center">Download from {storeName}</Text>
        <Link href="/hello">
          <a>
            <Button disabled={storeName.toLowerCase() !== "playstore" ? true : false} type="button" variant="solid" iconSpacing={{base: 0, md: 4}} rightIcon={<Icon display={{base: "none", md: "inline-block"}} as={DownloadIcon} />}>
              Download
            </Button>
          </a>
        </Link>
      </VStack>
    </Box>
  )
}
