import Image, { ImageProps } from 'next/image';
import { Box } from '@chakra-ui/react';
import jamb_logo from '../../public/jamb_logo.svg';
import ghana_educational_service_logo from '../../public/ghana_educational_service_logo.svg';
import waec_logo from '../../public/waec_logo.svg';
import neco_logo from '../../public/neco_logo.svg';
import playstore from '../../public/playstore.svg';
import windows from '../../public/windows.svg';
import appstore from '../../public/appstore.svg';
import { BoxWithIconProps } from '../../types/components/reusables/box_with_icon';

export function BoxWithJambIcon({ width, height }: Pick<ImageProps, 'width' | 'height'>) {
  return (
    <BoxWithIcon>
      <Image src={jamb_logo} alt='Jamb Logo' width={width} height={height} />
    </BoxWithIcon>
  )
}

export function BoxWithNecoIcon({ width, height }: Pick<ImageProps, 'width' | 'height'>) {
  return (
    <BoxWithIcon>
      <Image src={neco_logo} alt='NECO Logo' width={width} height={height} />
    </BoxWithIcon>
  )
}

export function BoxWithWaecIcon({ width, height }: Pick<ImageProps, 'width' | 'height'>) {
  return (
    <BoxWithIcon>
      <Image src={waec_logo} alt='WAEC Logo' width={width} height={height} />
    </BoxWithIcon>
  )
}

export function BoxWithGESIcon({ width, height }: Pick<ImageProps, 'width' | 'height'>) {
  return (
    <BoxWithIcon>
      <Image src={ghana_educational_service_logo} alt='Ghana Educational Service Logo' width={width} height={height} />
    </BoxWithIcon>
  )
}

export function BoxWithPlaystoreIcon({ width, height }: Pick<ImageProps, 'width' | 'height'>) {
  return (
    <BoxWithIcon styles={{bgColor: 'brand.nearWhite', p: 2.5, pb: 1.5, borderRadius: 2}}>
      <Image src={playstore} alt='Playstore Logo' width={width} height={height} />
    </BoxWithIcon>
  )
}

export function BoxWithWindowsIcon({ width, height }: Pick<ImageProps, 'width' | 'height'>) {
  return (
    <BoxWithIcon styles={{bgColor: 'brand.nearWhite', p: 3.5, pb: 2.5, borderRadius: 2}}>
      <Image src={windows} alt='Windows Logo' width={width} height={height} />
    </BoxWithIcon>
  )
}

export function BoxWithAppstoreIcon({ width, height }: Pick<ImageProps, 'width' | 'height'>) {
  return (
    <BoxWithIcon styles={{bgColor: 'brand.nearWhite', p: 3.5, pb: 2.5, borderRadius: 2}}>
      <Image src={appstore} alt='Applestore Logo' width={width} height={height} />
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
