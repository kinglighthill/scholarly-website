import { ApplyFilter } from "../../hooks/use_search_filter";

export interface TabItem {
  id: string;
  panel: string[];
}

export interface FilterProps {
  children: React.ReactNode;
  applyFilter: ApplyFilter;
  filterQueries: FilterQueries;
  updateQueryList: (id: string, value: string[]) => void;
}

export interface FilterQueries {
  [id: string]: string[];
}