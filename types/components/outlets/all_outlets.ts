import { Outlet } from "../../data";
import { ApplyFilter } from "../../hooks/use_search_filter";
import { FilterQueries } from "./filter";

export interface AllOutletsProps {
  searchBar?: boolean;
  outlets: Outlet[];
  applyFilter?: ApplyFilter;
  filterQueries?: FilterQueries;
  updateQueryList?: (id: string, value: string[], trigger?: 'chip') => void;
}