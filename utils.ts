import * as fbq from './lib/fpixel';
import * as gtag from './lib/gtag';
import { DownloadCardProps } from './types/components/apps/download_card';

export function capitalize(word: string) {
  const firstLetter = word[0].toUpperCase();
  const otherLetters = word.slice(1);
  return firstLetter.concat(otherLetters);
}

// name refers to the name of the app/product.
// platform refers to the platform that the downloaded app is meant for. It is one of 'Android', 'iOS', and 'Windows'.
// label indicates where the download is coming from. In the meantime, it is one of 'From marketing campaign page' and 'From Apps pages'.
// content_ids is an array of values that can be used to identify the app. E.g. ['jamb-utme'] for all JAMB apps regardless of the platform.
// value can be used to indicate the version no. of the downloaded app/product.
export const trackDownloadClick = (name: string, platform: DownloadCardProps['platform'], label: string, content_ids?: string[], value?: number) => {
  fbq.customEvent(`Download ${name}`, { content_name: name, content_category: 'Downloads', content_ids, label, platform });
  gtag.download_event(`Download ${name}`, 'Downloads', label, value, platform);
}