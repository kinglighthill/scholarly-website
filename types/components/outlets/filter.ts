import { ApplyFilter } from "../../hooks/use_search_filter";

export interface TabItem {
  id: string;
  panel: string[];
}

export interface FilterProps {
  children: React.ReactNode;
  applyFilter: ApplyFilter;
}

export interface FilterQueries {
  [id: string]: string[];
}