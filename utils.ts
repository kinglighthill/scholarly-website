import * as fbq from './lib/fpixel';
import * as gtag from './lib/gtag';
import { DownloadCardProps } from './types/components/apps/download_card';

export function capitalize(word: string) {
  const firstLetter = word[0].toUpperCase();
  const otherLetters = word.slice(1);
  
  return firstLetter.concat(otherLetters);
}

export const trackDownloadClick = (name: string, platform: DownloadCardProps['platform'], label: string, content_ids?: string[], value?: number) => {
  fbq.customEvent(`Download ${name} for ${platform}`, { content_name: name, content_ids });
  gtag.event(`Download ${name} for ${platform}`, 'Downloads', label, value);
}