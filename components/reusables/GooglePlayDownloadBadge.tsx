import Image from 'next/image';
import CustomLink from './CustomLink';
import google_play_download_badge from '../../public/google_play_download_badge.webp';
import { GooglePlayDownloadBadgeProps } from '../../types/components/reusables/google_play_download_badge';

export default function GooglePlayDownloadBadge({ download_link, width, height }: GooglePlayDownloadBadgeProps) {
  return (
    <CustomLink href={download_link} isExternal>
      <Image src={google_play_download_badge} alt='Google Play Download Badge' width={width} height={height} />
    </CustomLink>
  )
}
