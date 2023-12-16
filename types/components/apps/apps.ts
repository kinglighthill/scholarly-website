import { TabNavigationProps } from "./tab_navigation";

export interface App {
  name: string;
  icon_url: string;
  // download_link: string;
  path: string;
  countries: string[];
  download_link_android: string
  download_link_ios: string
  download_link_desktop: string
  available_on_android: boolean
  available_on_ios: boolean
  available_on_desktop: boolean
}

export interface AppMinified {
  app_name: string;
  path: string;
  download_link_android: string
  download_link_ios: string
  download_link_desktop: string
  available_on_android: boolean
  available_on_ios: boolean
  available_on_desktop: boolean
}

export interface Apps {
  title: string;
  description: string;
  apps: App[];
}

export interface AppsProps extends TabNavigationProps {
  apps_info: Apps[]
}