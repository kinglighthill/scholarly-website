import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import scholarly_logo1 from '../../public/scholarly_logo1.svg';
import classes from '../../styles/components/Navbar.module.css';
import CustomLink from './CustomLink';

const DesktopNavbar = dynamic(() =>
  import("../navbar/DesktopNavbar")
);

const NavigationDrawer = dynamic(() =>
  import("../navbar/NavigationDrawer")
);

export default function Navbar() {
  return (
    <Box as="header" pos='relative' h={{base: 16, lg: 20}} zIndex={100}>
      <nav className={classes.nav}>
        <Flex align='center' className='responsive_1440px'>
          <CustomLink href='/' className={classes.logo_wrapper}>
            <Image src={scholarly_logo1} alt="Scholarly Logo" priority />
          </CustomLink>

          <Spacer />

          <DesktopNavbar />
          <NavigationDrawer />
        </Flex>
      </nav>
    </Box>
  )
}
