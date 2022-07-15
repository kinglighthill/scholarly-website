import { useState } from "react";
import { Outlet, OutletLocation } from "../types/data";
import { ApplyFilter } from "../types/hooks/use_search_filter";

export default function useSearchFilter(outlets: Outlet[]) {
  const [filteredOutlets, setFilteredOutlets] = useState<undefined | Outlet[]>();

  const applyFilter: ApplyFilter = (filterQueries) => {
    // If no filter query is selected, set filteredOutlets to undefined so that all the outlets will be displayed.
    if (Object.entries(filterQueries).length === 0) {
      setFilteredOutlets(undefined);
      return;
    }

    // Filter the oulets based on the selected queries.
    const result = outlets.filter(outlet => {
      for (let key in filterQueries) {
        // Check if the value of the different location properties (city, state, lgas, & country) of the outlets matches any of the values of their corresponding properties in the filter queries.
        if (filterQueries[key].includes(outlet.location[key as keyof OutletLocation].toLowerCase())) {
          return true;
        }
      }
    })

    setFilteredOutlets(result);
  }

  return {
    applyFilter,
    filteredOutlets
  };
}
