import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import classes from '../../styles/components/Footer.module.css';

const DesktopFooter = dynamic(() =>
  import("../footer/DesktopFooter")
);

const MobileFooter = dynamic(() =>
  import("../footer/MobileFooter")
);

export default function Footer() {
  return (
    <Box as='footer' bgColor='brand.lime.700' className={classes.footer_container}>
      <Box display={{base: 'none', lg: 'block'}} className='responsive_1440px'>
        <DesktopFooter />
      </Box>
      
      <Box display={{lg: 'none'}}>
        <MobileFooter />
      </Box>
    </Box>
  )
}
