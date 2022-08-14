import Link from "next/link";
import { Box, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
import classes from "../../styles/Apps.module.css";
import playstore from "../../public/playstore.svg";
import appstore from "../../public/appstore.svg";
import windows from "../../public/windows.svg";
import { TabNavigationProps } from "../../types/components/apps/tab_navigation";

export function DesktopTabNavigation({ activeTab }: TabNavigationProps) {
  return (
    <Box display={{base: "none", lg: "block"}} borderLeft="8px solid #F8C343" w="218px">
      <Link href='/apps/android'>
        <a>    
          <HStack py={2.5} pl={2.5} cursor="pointer" className={activeTab === 'android' ? classes.activeTab : undefined}>
            <Image src={playstore} alt="Playstore Logo" />
            <Text ml={6} color="brand.lime.700" fontWeight="medium">Android Apps</Text>
          </HStack>
        </a>
      </Link>
      <Link href='/apps/ios'>
        <a>
          <HStack py={3.5} pl={3.5} cursor="pointer" className={activeTab === 'ios' ? classes.activeTab : undefined}>
            <Image src={appstore} alt="Applestore Logo" />
            <Text ml={7} color="brand.lime.700" fontWeight="medium">IOS Apps</Text>
          </HStack>
        </a>
      </Link>
      <Link href='/apps/desktop'>
        <a>
          <HStack py={3.5} pl={3.5} cursor="pointer" className={activeTab === 'desktop' ? classes.activeTab : undefined}>
            <Image src={windows} alt="Windows Logo" />
            <Text ml={7} color="brand.lime.700" fontWeight="medium">Desktop Apps</Text>
          </HStack>
        </a>
      </Link>
    </Box>
  )
}

export function MobileTabNavigation({ activeTab }: TabNavigationProps) {
  return (
    <HStack display={{base: "flex", lg: "none"}} align="start" justify="center" spacing={[5, 8]} pt={5} px={5} borderBottom="1px solid" borderBottomColor="rgba(35, 61, 44, 0.2)">
      <Link href='/apps/android'>
        <a>
          <Text fontSize={[13, 16]} fontWeight="medium" color="brand.lime.700" opacity={0.5}
            className={activeTab === 'android' ? classes.activeTab : undefined}
          >
            Android Apps
          </Text>
        </a>
      </Link>
      <Link href='/apps/desktop'>
        <a>
          <Text fontSize={[13, 16]} fontWeight="medium" color="brand.lime.700" opacity={0.5}
            className={activeTab === 'desktop' ? classes.activeTab : undefined}
          >
            Desktop Apps
          </Text>
        </a>
      </Link>
      <Link href='/apps/ios'>
        <a>
          <Text fontSize={[13, 16]} fontWeight="medium" color="brand.lime.700" opacity={0.5}
            className={activeTab === 'ios' ? classes.activeTab : undefined}
          >
            IOS Apps
          </Text>
        </a>
      </Link>
    </HStack>
  )
}