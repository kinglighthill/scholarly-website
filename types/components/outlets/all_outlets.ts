import { Outlet } from "../../data";
import { ApplyFilter } from "../../hooks/use_search_filter";

export interface AllOutletsProps {
  searchBar?: boolean;
  outlets: Outlet[];
  applyFilter?: ApplyFilter;
}