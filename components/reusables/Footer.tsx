import { Box, Flex, HStack, Icon, Link as ChakraLink, Spacer, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import scholarly_logo2 from '../../public/scholarly_logo2.svg';
import facebook from '../../public/facebook.svg';
import twitter from '../../public/twitter.svg';
import linkedin from '../../public/linkedin.svg';
import instagram from '../../public/instagram.svg';
import whatsapp from '../../public/whatsapp.svg';
import classes from '../../styles/components/Footer.module.css';
import FooterMenu from '../footer/FooterMenu';
import { PhoneIcon, AtSymbolIcon } from '@heroicons/react/outline';
import MobileFooter from '../footer/MobileFooter';
import CustomLink from './CustomLink';

export default function Footer() {
  return (
    <Box as='footer' bgColor='brand.lime.700' className={classes.footer_container}>
      <Box display={{base: 'none', lg: 'block'}} className='responsive_1440px'>
        <CustomLink href='/' className={classes.logo_wrapper} _hover={{textDecor: 'none'}}>
          <HStack spacing={1} align='end'>
            <Image src={scholarly_logo2} alt='Scholarly Logo' />
            <Text fontWeight='bold' color='white' fontSize={24}>Scholarly</Text>
          </HStack>
        </CustomLink>

        <Flex mb='50px'>
          <FooterMenu title='Products'
            items={[
              { name: 'Mobile Apps', url: '/apps/android' },
              { name: 'Desktop Apps', url: '/apps/desktop' },
              { name: 'Partner Apps', url: '/partners' },
              { name: 'Enterprise Software', url: '/business' }
            ]}
          />
          <Spacer />
          <FooterMenu title='Company'
            items={[
              { name: 'About', url: '/about' },
              { name: 'FAQs', url: '/faqs' },
              { name: 'Contact us', url: '/contact-us' },
            ]}
          />
          <Spacer />
          <FooterMenu title='Legal'
            items={[
              { name: 'Terms', url: '/terms' },
              { name: 'Privacy', url: '/privacy' },
            ]}
          />
          <Spacer />
          <Box>
            <Box p='25px 14px' mb={4} borderRadius='30px 0' background='rgba(255,255,255,0.2)' maxW='273px'>
              <VStack spacing='26px'>
                <Box>
                  <HStack spacing={1.5} color='white'>
                    <Icon as={PhoneIcon} />
                    <CustomLink href='tel:+23481-3694-1462'>+23481-3694-1462</CustomLink>
                  </HStack>
                  <HStack spacing={1.5} color='brand.yellow'>
                    <Icon as={AtSymbolIcon} />
                    <CustomLink href='mailto:info@scholarly.africa'>info@scholarly.africa</CustomLink>
                  </HStack>
                </Box>
                <Text color='white' fontSize={13} textAlign='right'>5, Samuelson close, Isiuzo street, Independence Layout, Enugu, Nigeria</Text>
              </VStack>
            </Box>
            <HStack spacing={4}>
              <ChakraLink href='https://facebook.com/scholarlyng' isExternal aria-label='Visit our facebook page'>
                <Image src={facebook} alt='Facebook Icon' />
              </ChakraLink>
              <ChakraLink href='https://twitter.com/scholarlyng' isExternal aria-label='Visit our twitter handle'>
                <Image src={twitter} alt='Twitter Icon' />
              </ChakraLink>
              <ChakraLink href='https://www.linkedin.com/company/scholarlyafrica/' isExternal aria-label='Visit our linkedin page'>
                <Image src={linkedin} alt='LinkedIn Icon' />
              </ChakraLink>
              <ChakraLink href='https://www.instagram.com/scholarlyng/' isExternal aria-label='Visit our instagram page'>
                <Image src={instagram} alt='Instagram Icon' />
              </ChakraLink>
              <ChakraLink href='https://wa.me/+2349061701939' isExternal aria-label='Send us a message on Whatsapp'>
                <Image src={whatsapp} alt='WhatsApp Icon' />
              </ChakraLink>
            </HStack>
          </Box>     
        </Flex>

        <Text maxW='656px' m='auto' color='white' textAlign='center' fontWeight='light'>
          Scholarly is a leading educational technology company focused in Africa. With over 3 years experience, we provide better learning tools and resources to students for better grade.
        </Text>

        <Flex color='white' fontWeight='light' mt={8}>
          <Text>Copyright 2020 Scholarly educational software, Inc. All Rights reserved</Text>
          <Spacer />
          <HStack spacing={8}>
            <CustomLink href='/privacy' prefetch={false}>Privacy</CustomLink>
            <CustomLink href='/terms' prefetch={false}>Terms of use</CustomLink>
          </HStack>
        </Flex>
      </Box>
      
      <Box display={{lg: 'none'}}>
        <MobileFooter />
      </Box>
    </Box>
  )
}
