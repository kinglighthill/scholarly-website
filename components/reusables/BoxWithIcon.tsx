import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import jamb_logo from '../../public/jamb_logo.svg';
import waec_logo from '../../public/waec_logo.svg';
import neco_logo from '../../public/neco_logo.svg';
import playstore from '../../public/playstore.svg';
import windows from '../../public/windows.svg';
import appstore from '../../public/appstore.svg';
import { BoxWithIconProps } from '../../types/components/reusables/box_with_icon';

export function BoxWithJambIcon () {
  return (
    <BoxWithIcon>
      <Image src={jamb_logo} alt='Jamb Logo' />
    </BoxWithIcon>
  )
}

export function BoxWithNecoIcon () {
  return (
    <BoxWithIcon>
      <Image src={neco_logo} alt='NECO Logo' />
    </BoxWithIcon>
  )
}

export function BoxWithWaecIcon () {
  return (
    <BoxWithIcon>
      <Image src={waec_logo} alt='WAEC Logo' />
    </BoxWithIcon>
  )
}

export function BoxWithPlaystoreIcon () {
  return (
    <BoxWithIcon styles={{bgColor: 'brand.nearWhite', p: 2.5, pb: 1.5, borderRadius: 2}}>
      <Image src={playstore} alt='Playstore Logo' />
    </BoxWithIcon>
  )
}

export function BoxWithWindowsIcon () {
  return (
    <BoxWithIcon styles={{bgColor: 'brand.nearWhite', p: 3.5, pb: 2.5, borderRadius: 2}}>
      <Image src={windows} alt='Windows Logo' />
    </BoxWithIcon>
  )
}

export function BoxWithAppstoreIcon () {
  return (
    <BoxWithIcon styles={{bgColor: 'brand.nearWhite', p: 3.5, pb: 2.5, borderRadius: 2}}>
      <Image src={appstore} alt='Applestore Logo' />
    </BoxWithIcon>
  )
}

const defaultStyles = {
  bgColor: 'brand.lime.50', p: 2, pb: 1.5, borderRadius: 4
}

export default function BoxWithIcon({ children, styles = defaultStyles }: BoxWithIconProps) {
  return (
    <Box {...styles}>
      {children}
    </Box>
  )
}
