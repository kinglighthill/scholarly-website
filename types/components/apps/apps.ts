import { TabNavigationProps } from "./tab_navigation";

export interface App {
  name: string;
  icon_url: string;
  download_link: string;
  path: string;
  countries: string[];
}

export interface Apps {
  title: string;
  description: string;
  apps: App[];
}

export interface AppsProps extends TabNavigationProps {
  apps_info: Apps[]
}