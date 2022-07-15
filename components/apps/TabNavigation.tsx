import { Box, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
import classes from "../../styles/Apps.module.css";
import playstore from "../../public/playstore.svg";
import appstore from "../../public/appstore.svg";
import windows from "../../public/windows.svg";
import { TabNavigationProps } from "../../types/components/apps/tab_navigation";

export function DesktopTabNavigation({ active, changeTab }: TabNavigationProps) {
  return (
    <Box display={{base: "none", lg: "block"}} borderLeft="8px solid #F8C343" w="218px">
      <HStack py={2.5} pl={2.5} cursor="pointer" onClick={() => changeTab("android")}
        className={active === 'android' ? classes.active : undefined}
      >
        <Image src={playstore} alt="Playstore Logo" />
        <Text ml={6} color="brand.lime.700" fontWeight="medium">Android Apps</Text>
      </HStack>
      <HStack py={3.5} pl={3.5} cursor="pointer" onClick={() => changeTab("ios")}
        className={active === 'ios' ? classes.active : undefined}
      >
        <Image src={appstore} alt="Applestore Logo" />
        <Text ml={7} color="brand.lime.700" fontWeight="medium">IOS Apps</Text>
      </HStack>
      <HStack py={3.5} pl={3.5} cursor="pointer" onClick={() => changeTab("desktop")}
        className={active === 'desktop' ? classes.active : undefined}
      >
        <Image src={windows} alt="Windows Logo" />
        <Text ml={7} color="brand.lime.700" fontWeight="medium">Desktop Apps</Text>
      </HStack>
    </Box>
  )
}

export function MobileTabNavigation({ active, changeTab }: TabNavigationProps) {
  return (
    <HStack display={{base: "flex", lg: "none"}} align="start" justify="center" spacing={[5, 8]} pt={5} px={5} borderBottom="1px solid" borderBottomColor="rgba(35, 61, 44, 0.2)">
      <Text fontSize={[13, 16]} fontWeight="medium" color="brand.lime.700" opacity={0.5}
        className={active === 'android' ? classes.active : undefined} onClick={() => changeTab("android")}
      >
        Android Apps
      </Text>
      <Text fontSize={[13, 16]} fontWeight="medium" color="brand.lime.700" opacity={0.5}
        className={active === 'desktop' ? classes.active : undefined} onClick={() => changeTab("desktop")}
      >
        Desktop Apps
      </Text>
      <Text fontSize={[13, 16]} fontWeight="medium" color="brand.lime.700" opacity={0.5}
        className={active === 'ios' ? classes.active : undefined} onClick={() => changeTab("ios")}
      >
        IOS Apps
      </Text>
    </HStack>
  )
}